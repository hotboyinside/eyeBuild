import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  MinLength,
} from 'class-validator';
import {
  PASSWORD_MIN_LENGTH,
  PHONE_MAX_LENGTH,
  PHONE_MIN_LENGTH,
} from 'src/common/constants/validation.constant';
import { ErrorMessages } from 'src/common/enums/errors.enum';
import { Role } from 'src/common/enums/roles.enum';

export class CreateUserDto {
  @IsNotEmpty({ message: ErrorMessages.REQUIRED_USERNAME })
  @IsString()
  @Matches(/^[a-zA-Z0-9]{4,25}$/, {
    message: ErrorMessages.INVALID_USERNAME_FORMAT,
  })
  @Transform(({ value }) => String(value).toLowerCase())
  username: string;

  @IsNotEmpty({ message: ErrorMessages.REQUIRED_EMAIL })
  @IsEmail({}, { message: ErrorMessages.INVALID_EMAIL })
  email: string;

  @IsNotEmpty({ message: ErrorMessages.REQUIRED_PASSWORD })
  @MinLength(PASSWORD_MIN_LENGTH, { message: ErrorMessages.PASSWORD_TOO_SHORT })
  @Matches(/[A-Z]/, { message: ErrorMessages.PASSWORD_MISSING_UPPERCASE })
  @Matches(/[a-z]/, { message: ErrorMessages.PASSWORD_MISSING_LOWERCASE })
  @Matches(/\d/, { message: ErrorMessages.PASSWORD_MISSING_NUMBER })
  password: string;

  @IsNotEmpty({ message: ErrorMessages.REQUIRED_PHONE })
  @IsString()
  @Length(PHONE_MIN_LENGTH, PHONE_MAX_LENGTH, {
    message: ErrorMessages.INVALID_PHONE,
  })
  @Matches(/^\d+$/, { message: ErrorMessages.INVALID_PHONE })
  phone: string;

  @IsOptional()
  @IsString()
  @Matches(/^[\p{L}\p{M}`'-.]+ [\p{L}\p{M}`'-.]+$/u, {
    message: ErrorMessages.INVALID_FULL_NAME,
  })
  fullName?: string;

  @IsOptional()
  @IsString()
  companyName?: string;

  @IsOptional()
  @IsEmail({}, { message: ErrorMessages.INVALID_EMAIL })
  companyEmail: string;

  @IsNotEmpty({ message: ErrorMessages.REQUIRED_ROLE })
  @IsEnum(Role, { message: ErrorMessages.INVALID_ROLE })
  role: Role;

  @IsOptional()
  @IsBoolean()
  isBanned?: boolean;
}
