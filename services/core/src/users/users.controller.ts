import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Query,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Types } from 'mongoose';
import { GetUsersDto } from './dto/get-users.dto';
import { ALL_ADMINS } from 'src/common/enums/roles.enum';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles(...ALL_ADMINS)
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
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
    @Param('id') id: Types.ObjectId,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @Roles(...ALL_ADMINS)
  async delete(@Param('id') id: Types.ObjectId) {
    return await this.usersService.delete(id);
  }
}
