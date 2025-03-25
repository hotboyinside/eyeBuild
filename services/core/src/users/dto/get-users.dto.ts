import { IsOptional, IsEnum, IsInt, Min, Max, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { Role } from 'src/common/enums/roles.enum';
import { SortOrder, UserSortBy } from '../interfaces/user.interface';

export class GetUsersDto {
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
  @IsEnum(UserSortBy)
  sortBy: UserSortBy = UserSortBy.CREATED_AT;

  @IsOptional()
  @IsEnum(SortOrder)
  order: SortOrder = SortOrder.ASC;
}
