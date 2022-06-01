import { IUser } from './IUser.interfaces';

export interface IUsersRepository {
  findUser(email: string): Promise<IUser | null>
}
