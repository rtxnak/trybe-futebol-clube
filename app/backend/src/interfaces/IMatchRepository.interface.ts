import { IMatch } from './IMatch.interface';

export interface IMatchRepository {
  findAll(): Promise<IMatch[]>
}
