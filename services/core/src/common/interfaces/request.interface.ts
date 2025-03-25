import { IUser } from 'src/users/interfaces/user.interface';

export interface IRequest extends Request {
  user: IUser;
}
