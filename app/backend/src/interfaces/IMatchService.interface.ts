import { IMatchFindAllResult } from './IMatchFindAllResult.interface';

export interface IMatchService {
  findAll(): Promise<IMatchFindAllResult>
}
