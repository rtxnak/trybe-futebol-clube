import { IMatch } from './IMatch.interface';

export interface IMatchRepository {
  findAll(query: boolean | null): Promise<IMatch[]>
}
