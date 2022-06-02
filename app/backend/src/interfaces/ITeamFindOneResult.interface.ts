import { ITeam } from './ITeam.interface';

export interface ITeamsFindOneResult {
  code: number,
  result: ITeam | object
}
