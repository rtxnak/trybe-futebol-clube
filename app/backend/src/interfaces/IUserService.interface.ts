import { ILoginResult } from './ILoginResult.interface';
import { ILoginValidate } from './ILoginValidate.interface';

export interface IUsersService {
  login(email: string, password: string): Promise<ILoginResult>;
  validate(token: string) : ILoginValidate;
}
