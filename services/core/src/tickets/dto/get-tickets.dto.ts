import { IsOptional, IsEnum, IsInt, Min, Max, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { Status, TicketsOrder, Type } from 'src/common/enums/tickets.enum';
import { TicketsSortBy } from '../../common/enums/tickets.enum';
import { Role } from 'src/common/enums/roles.enum';

export class GetTicketsDto {
  @IsOptional()
  @IsEnum(Status)
  status?: Status;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(({ value }) => parseInt(String(value), 10))
  page: number = 1;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  @Transform(({ value }) => parseInt(String(value), 10))
  limit: number = 10;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsEnum(Type)
  type: Type;

  @IsOptional()
  @IsEnum(TicketsSortBy)
  sortBy: TicketsSortBy = TicketsSortBy.CREATED_AT;

  @IsOptional()
  @IsEnum(TicketsOrder)
  order: TicketsOrder = TicketsOrder.ASC;
}
