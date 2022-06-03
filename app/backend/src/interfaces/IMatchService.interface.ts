import { IMatchFindAllResult } from './IMatchFindAllResult.interface';

export interface IMatchService {
  findAll(query: boolean | null): Promise<IMatchFindAllResult>
}
