import {
  IsEnum,
  IsNotEmpty,
  IsString,
  IsDate,
  IsMongoId,
  IsOptional,
} from 'class-validator';
import { Status, Type } from 'src/common/enums/tickets.enum';

export class CreateTicketDto {
  @IsNotEmpty()
  @IsEnum(Type)
  type: string;

  @IsNotEmpty()
  @IsString()
  reason: string;

  @IsOptional()
  @IsString()
  paymentId: string;

  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;

  @IsOptional()
  @IsDate()
  closedDate?: Date;

  @IsNotEmpty()
  @IsMongoId()
  userId: string;
}
