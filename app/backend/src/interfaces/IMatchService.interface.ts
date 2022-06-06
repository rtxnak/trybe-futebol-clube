import { IMatchFindAllResult } from './IMatchFindAllResult.interface';
import { IMatch } from './IMatch.interface';
import { IMatchCreateResult } from './IMatchCreateResult.interface';
import { IMatchFinishResult } from './IMatchFinishResult.interface';
import { IMatchUpdateResult } from './IMatchUpdateResult.interface';

export interface IMatchService {
  findAll(query: boolean | null): Promise<IMatchFindAllResult>
  create(match: IMatch): Promise<IMatchCreateResult>
  finish(id: number): Promise<IMatchFinishResult>
  update(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<IMatchUpdateResult>
}
