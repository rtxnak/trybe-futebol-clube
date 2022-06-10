import { IMatchLB } from '../../interfaces/LeaderboardInterfaces/IMatchLB.interface';
import { ITeamInfoLB } from '../../interfaces/LeaderboardInterfaces/ITeamInfoLB.interface';

class TeamStats {
  public name: string;
  public totalPoints: number;
  public totalGames: number;
  public totalVictories: number;
  public totalDraws: number;
  public totalLosses: number;
  public goalsFavor: number;
  public goalsOwn: number;
  public goalsBalance: number;
  public efficiency: number;

  constructor(teamInfo: ITeamInfoLB, type: string) {
    this.name = teamInfo.teamName;
    this.totalPoints = 0;
    this.totalGames = 0;
    this.totalVictories = 0;
    this.totalDraws = 0;
    this.totalLosses = 0;
    this.goalsFavor = 0;
    this.goalsOwn = 0;
    if (type === 'home') {
      this.calcHomeOrAwayStats(teamInfo, 'home');
      this.efficiency = Number(((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2));
    }
    if (type === 'away') {
      this.calcHomeOrAwayStats(teamInfo, 'away');
      this.efficiency = Number(((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2));
    }
    if (type === 'none') this.calcAllstats(teamInfo, 'none');
  }

  calcHomeOrAwayStats(teamInfo: ITeamInfoLB, type: string) {
    let teamInfoMatches: IMatchLB[] = [];
    if (type === 'home') teamInfoMatches = teamInfo.teamHome;
    if (type === 'away') teamInfoMatches = teamInfo.teamAway;
    teamInfoMatches.forEach((match: IMatchLB) => {
      this.goalsFavor += match.dataValues.goalsFavor;
      this.goalsOwn += match.dataValues.goalsOwn;
      if (match.dataValues.goalsFavor > match.dataValues.goalsOwn) {
        this.totalPoints += 3;
        this.totalVictories += 1;
      }
      if (match.dataValues.goalsFavor === match.dataValues.goalsOwn) {
        this.totalPoints += 1;
        this.totalDraws += 1;
      }
      if (match.dataValues.goalsFavor < match.dataValues.goalsOwn) this.totalLosses += 1;
    });
    this.totalGames += teamInfoMatches.length;
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
  }

  calcAllstats(teamInfo: ITeamInfoLB, type: string) {
    if (type === 'none') {
      this.calcHomeOrAwayStats(teamInfo, 'home');
      this.calcHomeOrAwayStats(teamInfo, 'away');
      this.goalsBalance = this.goalsFavor - this.goalsOwn;
      this.efficiency = Number(((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2));
    }
  }
}

export default TeamStats;
