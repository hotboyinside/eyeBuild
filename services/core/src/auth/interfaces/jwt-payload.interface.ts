import { Types } from 'mongoose';
import { Role } from 'src/common/enums/roles.enum';

export interface JwtPayload {
  sub: Types.ObjectId;
  role: Role;
  isBanned: boolean;
}
