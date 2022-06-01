import { ILoginResult } from './ILoginResult.interface';

export interface IUsersService {
  login(email: string, password: string): Promise<ILoginResult>
}
