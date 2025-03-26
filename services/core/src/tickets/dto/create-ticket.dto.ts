import {
  IsEnum,
  IsNotEmpty,
  IsString,
  IsDate,
  IsMongoId,
  IsOptional,
} from 'class-validator';
import { TicketStatuses, TicketTypes } from 'src/common/enums/tickets.enum';

export class CreateTicketDto {
  @IsNotEmpty()
  @IsEnum(TicketTypes)
  type: TicketTypes;

  @IsNotEmpty()
  @IsString()
  reason: string;

  @IsOptional()
  @IsString()
  paymentId: string;

  @IsNotEmpty()
  @IsEnum(TicketStatuses)
  status: TicketStatuses;

  @IsOptional()
  @IsDate()
  closedDate?: Date;

  @IsNotEmpty()
  @IsMongoId()
  userId: string;
}
