import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, PipelineStage, Types } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUsersDto } from './dto/get-users.dto';
import { Role } from 'src/common/enums/roles.enum';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs';
import {
  IAggregationResult,
  IFindAllUsersResponse,
  IUser,
  SortOrder,
  UserSortBy,
} from './interfaces/user.interface';
import {
  COMPANIES,
  DOMAINS,
  FIRSTNAMES,
  LASTNAMES,
} from 'src/common/mockUsers';
import { escapeRegExp, cleanNumber } from 'src/common/helpers/regex.helper';
import { RoleService } from 'src/common/services/role.service';
import { ErrorMessages } from 'src/common/enums/errors.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private configService: ConfigService,
    private roleService: RoleService,
  ) {}

  async create(currentUser: IUser, userData: CreateUserDto) {
    const existingUser = await this.userModel.findOne({
      username: userData.username,
    });
    if (existingUser) {
      throw new ConflictException('Username is already taken');
    }
    if (!this.roleService.isRoleHigher(currentUser.role, userData.role)) {
      throw new ForbiddenException(ErrorMessages.USER_PERMISSION);
    }
    userData.createdBy = new Types.ObjectId(currentUser._id);
    const createdUser = new this.userModel(userData);
    return createdUser.save();
  }

  async findAll(params: GetUsersDto): Promise<IFindAllUsersResponse> {
    const {
      role,
      page = 1,
      limit = 10,
      sortBy = UserSortBy.CREATED_AT,
      order = SortOrder.ASC,
      search,
    } = params;

    const filter: FilterQuery<any> = {};

    if (role === Role.ADMIN) {
      filter.role = { $in: [Role.ADMIN, Role.SUPERADMIN] };
    } else if (role) {
      filter.role = role;
    }

    if (search) {
      const escapedSearch = escapeRegExp(search);
      const regexQuery = new RegExp(escapedSearch, 'i');

      const cleanedPhone = cleanNumber(search);
      let phoneQuery: RegExp | null = null;

      if (cleanedPhone) {
        phoneQuery = new RegExp(`${escapedSearch}|${cleanedPhone}`, 'i');
      }

      filter.$or = [
        { fullName: regexQuery },
        { username: regexQuery },
        { email: regexQuery },
        { companyName: regexQuery },
        { phone: phoneQuery ? phoneQuery : regexQuery },
      ];
    }

    const sortOrder = order === SortOrder.ASC ? 1 : -1;
    const sortStage: { [key: string]: 1 | -1 } = { [sortBy]: sortOrder };

    const aggregationPipeline: PipelineStage[] = [
      {
        $facet: {
          users: [
            { $match: filter },
            { $sort: sortStage },
            { $skip: (page - 1) * limit },
            { $limit: limit },
            { $project: { password: 0 } },
          ],
          totalCount: [{ $match: filter }, { $count: 'count' }],
        },
      },
    ];

    const result = (await this.userModel
      .aggregate(aggregationPipeline)
      .exec()) as IAggregationResult[];

    const users = result[0].users;
    const total = result[0].totalCount[0]?.count || 0;
    const pages = Math.ceil(total / limit);

    return {
      users,
      pagination: {
        total,
        pages,
        page,
        limit,
        sortBy,
        order,
      },
    };
  }

  async findOne(id: Types.ObjectId) {
    return this.userModel.findOne({ _id: id }).exec();
  }

  async update(
    currentUser: IUser,
    id: Types.ObjectId,
    userData: UpdateUserDto,
  ) {
    const userToUpdate = await this.userModel.findById(id);
    if (!userToUpdate) {
      throw new NotFoundException('User not found');
    }
    if (!this.roleService.isRoleHigher(currentUser.role, userToUpdate.role)) {
      throw new ForbiddenException(ErrorMessages.USER_PERMISSION);
    }
    Object.assign(userToUpdate, userData);
    const updatedUser = await userToUpdate.save();
    return updatedUser;
  }

  async delete(currentUser: IUser, id: Types.ObjectId) {
    const userToDelete = await this.userModel.findById(id);
    if (!userToDelete) {
      throw new NotFoundException('User not found');
    }
    if (!this.roleService.isRoleHigher(currentUser.role, userToDelete.role)) {
      throw new ForbiddenException(ErrorMessages.USER_PERMISSION);
    }
    await userToDelete.deleteOne();
    return userToDelete;
  }

  async findByUsername(username: string) {
    return this.userModel
      .findOne({ username: username })
      .select('+password')
      .exec();
  }

  async createSuperAdminIfNotExists() {
    const existingSuperAdmin = await this.userModel
      .findOne({ role: Role.SUPERADMIN })
      .exec();
    if (existingSuperAdmin) return existingSuperAdmin;
    const superAdminData = {
      ...this.configService.get<User>('superadmin'),
      role: Role.SUPERADMIN,
    };
    const superAdmin = new this.userModel(superAdminData);
    return await superAdmin.save();
  }

  async createMockUsers() {
    const roles = [Role.CLIENT, Role.ADMIN, Role.FRANCHISEE];
    interface IMockUser {
      username: string;
      email: string;
      password: string;
      phone: string;
      companyName: string;
      fullName: string;
      companyEmail: string;
      role: Role;
      createdBy: Types.ObjectId;
    }
    const superAdmin = await this.createSuperAdminIfNotExists();
    const superAdminId = superAdmin._id;

    const mockUsers: IMockUser[] = [];
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash('asd123qwe', saltRounds);

    for (let i = 0; i < 120; i++) {
      const role = roles[Math.floor(Math.random() * roles.length)];
      const user = {
        username: `${FIRSTNAMES[Math.floor(Math.random() * FIRSTNAMES.length)].toLowerCase()}${LASTNAMES[Math.floor(Math.random() * LASTNAMES.length)].toLowerCase() + Math.floor(Math.random() * 1000)}`,
        email: `${FIRSTNAMES[Math.floor(Math.random() * FIRSTNAMES.length)].toLowerCase()}@${DOMAINS[Math.floor(Math.random() * DOMAINS.length)]}`,
        password: hashedPassword,
        phone: `199${String(Math.floor(Math.random() * 100000000)).padStart(8, '0')}`,
        companyName: COMPANIES[Math.floor(Math.random() * COMPANIES.length)],
        fullName: `${FIRSTNAMES[Math.floor(Math.random() * FIRSTNAMES.length)]} ${LASTNAMES[Math.floor(Math.random() * LASTNAMES.length)]}`,
        companyEmail: `${FIRSTNAMES[Math.floor(Math.random() * FIRSTNAMES.length)].toLowerCase()}@${DOMAINS[Math.floor(Math.random() * DOMAINS.length)]}`,
        role: role,
        createdBy: superAdminId,
      };
      mockUsers.push(user);
    }

    await this.userModel.insertMany(mockUsers);
  }

  // TODO: remove on prod
  async clearDatabase() {
    try {
      await this.userModel.collection.drop();
    } catch (error) {
      console.error('Error clearing user collection:', error);
    }
  }
}
