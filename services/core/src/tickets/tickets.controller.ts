import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { TicketsService } from './tickets.service';
import { GetTicketsDto } from './dto/get-tickets.dto';
import { Types } from 'mongoose';
import { UpdateTicketsDto } from './dto/update-ticket.dto';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get()
  async findAll(@Query() query: GetTicketsDto) {
    return this.ticketsService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: Types.ObjectId) {
    return this.ticketsService.findOne(id);
  }

  @Post()
  async create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketsService.create(createTicketDto);
  }

  @Put(':id')
  async updateStatus(
    @Param('id') id: Types.ObjectId,
    @Body() updateTicketsDto: UpdateTicketsDto,
  ) {
    return this.ticketsService.updateData(id, updateTicketsDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: Types.ObjectId) {
    return await this.ticketsService.delete(id);
  }
}
