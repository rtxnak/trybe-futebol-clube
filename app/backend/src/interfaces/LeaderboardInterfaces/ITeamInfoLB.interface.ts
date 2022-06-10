import { IMatchLB } from './IMatchLB.interface';

export interface ITeamInfoLB {
  id: number;
  teamName: string;
  teamHome: IMatchLB[];
  teamAway: IMatchLB[];
}
