import { IsOptional, IsEnum, IsString } from 'class-validator';
import { Status, Type } from 'src/common/enums/tickets.enum';

export class UpdateTicketsDto {
  @IsOptional()
  @IsEnum(Type)
  type: Type;

  @IsOptional()
  @IsEnum(Status)
  status: Status;

  @IsOptional()
  @IsString()
  reason: string;
}
