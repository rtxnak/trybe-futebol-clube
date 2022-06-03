import { NextFunction, Request, Response } from 'express';
import { IMatchService } from '../interfaces/IMatchService.interface';

class MatchController {
  private _IMatchService: IMatchService;
  constructor(matchService: IMatchService) {
    this._IMatchService = matchService;
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await this._IMatchService.findAll();

      return res.status(teams.code as number).json(teams.result);
    } catch (err) {
      next(err);
    }
  }
}

export default MatchController;
