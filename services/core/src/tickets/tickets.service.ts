import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { Model, PipelineStage, Types } from 'mongoose';
import { Ticket } from './schemas/ticket.schema';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { GetTicketsDto } from './dto/get-tickets.dto';
import {
  Status,
  TicketsOrder,
  TicketsSortBy,
} from 'src/common/enums/tickets.enum';
import { FilterQuery } from 'mongoose';
import {
  IAllTicketsResponse,
  IFilter,
  ITicketsAfterAggregation,
} from './interfaces/ticket.interface';
import { Role } from 'src/common/enums/roles.enum';
import { UpdateTicketsDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(
    @InjectModel(Ticket.name) private ticketModel: Model<Ticket>,
    private configService: ConfigService,
  ) {}

  async findAll(params: GetTicketsDto): Promise<IAllTicketsResponse> {
    const {
      status,
      role,
      page = 1,
      limit = 20,
      order = TicketsOrder.ASC,
      sortBy = TicketsSortBy.CREATED_AT,
    } = params;

    const filter: FilterQuery<IFilter> = {};

    if (role === Role.ADMIN) {
      filter.role = { $in: [Role.ADMIN, Role.SUPERADMIN] };
    } else if (role) {
      filter.role = role;
    }

    if (status) {
      filter.status = status;
    }

    const sortOrder = order === TicketsOrder.ASC ? 1 : -1;
    const sortStage: { [key: string]: 1 | -1 } = { [sortBy]: sortOrder };

    const aggregationPipeline: PipelineStage[] = [
      {
        $facet: {
          tickets: [
            { $match: filter },
            { $sort: sortStage },
            { $skip: (page - 1) * limit },
            { $limit: limit },
            {
              $lookup: {
                from: 'users',
                localField: 'userId',
                foreignField: '_id',
                as: 'user',
              },
            },
            { $unwind: '$user' },
            {
              $project: {
                _id: 1,
                type: 1,
                status: 1,
                reason: 1,
                createdAt: 1,
                closedDate: 1,
                paymentId: 1,
                userId: 1,
                userName: '$user.username',
                fullName: '$user.fullName',
                email: '$user.email',
                companyName: '$user.companyName',
              },
            },
          ],
          totalCount: [{ $match: filter }, { $count: 'count' }],
          totalPendingTickets: [
            { $match: { status: Status.PENDING } },
            { $count: 'count' },
          ],
        },
      },
    ];

    const result = (await this.ticketModel
      .aggregate(aggregationPipeline)
      .exec()) as ITicketsAfterAggregation[];
    const tickets = result[0].tickets;
    const totalPendingTickets = result[0].totalPendingTickets[0]?.count || 0;
    const total = result[0].totalCount[0]?.count || 0;
    const pages = Math.ceil(total / limit);

    return {
      tickets,
      pagination: {
        totalPendingTickets,
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
    return this.ticketModel.findOne({ _id: id }).exec();
  }

  async create(ticketData: CreateTicketDto) {
    const createdTicket = new this.ticketModel(ticketData);
    return createdTicket.save();
  }

  async updateData(
    ticketId: Types.ObjectId,
    ticketData: UpdateTicketsDto,
  ): Promise<Ticket> {
    const updatedFields =
      ticketData.status === Status.CLOSED
        ? {
            ...ticketData,
            closedDate: Date.now(),
          }
        : ticketData;

    const updatedTicket = await this.ticketModel
      .findOneAndUpdate({ _id: ticketId }, updatedFields, { new: true })
      .exec();

    if (!updatedTicket) {
      throw new Error('Ticket is not found');
    }

    return updatedTicket;
  }

  async delete(ticketId: Types.ObjectId) {
    const deletedUser = await this.ticketModel
      .findByIdAndDelete(ticketId)
      .exec();
    return deletedUser;
  }

  // TODO: удалить в PROD
  async clearDatabase() {
    try {
      await this.ticketModel.collection.drop();
    } catch (error) {
      console.error('Error clearing user collection:', error);
    }
  }
}
