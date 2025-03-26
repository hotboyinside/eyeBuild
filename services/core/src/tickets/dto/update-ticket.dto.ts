import { IsOptional, IsEnum, IsString } from 'class-validator';
import { TicketStatuses, TicketTypes } from 'src/common/enums/tickets.enum';

export class UpdateTicketsDto {
  @IsOptional()
  @IsEnum(TicketTypes)
  type: TicketTypes;

  @IsOptional()
  @IsEnum(TicketStatuses)
  status: TicketStatuses;

  @IsOptional()
  @IsString()
  reason: string;
}
