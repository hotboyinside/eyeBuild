import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Query,
  Delete,
  Put,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Types } from 'mongoose';
import { GetUsersDto } from './dto/get-users.dto';
import { ALL_ADMINS } from 'src/common/enums/roles.enum';
import { UpdateUserDto } from './dto/update-user.dto';
import { IRequest } from 'src/common/interfaces/request.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles(...ALL_ADMINS)
  async create(@Req() req: IRequest, @Body() createUserDto: CreateUserDto) {
    return this.usersService.create(req.user, createUserDto);
  }

  @Get()
  @Roles(...ALL_ADMINS)
  async findAll(@Query() query: GetUsersDto) {
    return this.usersService.findAll(query);
  }

  @Get(':id')
  @Roles(...ALL_ADMINS)
  async findOne(@Param('id') id: Types.ObjectId) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @Roles(...ALL_ADMINS)
  async update(
    @Req() req: IRequest,
    @Param('id') id: Types.ObjectId,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(req.user, id, updateUserDto);
  }

  @Delete(':id')
  @Roles(...ALL_ADMINS)
  async delete(@Req() req: IRequest, @Param('id') id: Types.ObjectId) {
    return await this.usersService.delete(req.user, id);
  }
}
