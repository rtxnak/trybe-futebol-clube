import { IMatch } from './IMatch.interface';

export interface IMatchRepository {
  findAll(query: boolean | null): Promise<IMatch[]>
  create(match: IMatch): Promise<IMatch>
  finish(id: number): Promise<number>
  update(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<number>
}
