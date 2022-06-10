import { NextFunction, Request, Response } from 'express';
import { ILeaderboardService } from
  '../interfaces/LeaderboardInterfaces/ILeaderboardService.interface';

class LeaderboardController {
  private _ILeaderboardService: ILeaderboardService;
  constructor(LBService: ILeaderboardService) {
    this._ILeaderboardService = LBService;
  }

  async getLeaderboardByHome(req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await this._ILeaderboardService.getLeaderboard('home');

      return res.status(teams.code as number).json(teams.result);
    } catch (err) {
      next(err);
    }
  }

  async getLeaderboardByAway(req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await this._ILeaderboardService.getLeaderboard('away');

      return res.status(teams.code as number).json(teams.result);
    } catch (err) {
      next(err);
    }
  }

  async getLeaderboardOverall(req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await this._ILeaderboardService.getLeaderboard('none');

      return res.status(teams.code as number).json(teams.result);
    } catch (err) {
      next(err);
    }
  }
}

export default LeaderboardController;
