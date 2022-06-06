import { NextFunction, Request, Response } from 'express';
import { IMatchService } from '../interfaces/IMatchService.interface';

class MatchController {
  private _IMatchService: IMatchService;
  constructor(matchService: IMatchService) {
    this._IMatchService = matchService;
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { inProgress } = req.query;
      let query;
      if (!inProgress) {
        query = null;
      } else {
        query = inProgress === 'true';
      }

      const teams = await this._IMatchService.findAll(query);

      return res.status(teams.code as number).json(teams.result);
    } catch (err) {
      next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = req;
      const matchCreated = await this._IMatchService.create(body);

      return res.status(matchCreated.code as number).json(matchCreated.result);
    } catch (err) {
      next(err);
    }
  }

  async finishOrUpdate(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { homeTeamGoals, awayTeamGoals } = req.body;
      if (!homeTeamGoals || !awayTeamGoals) {
        const matchFinished = await this._IMatchService.finish(Number(id));
        return res.status(matchFinished.code as number).json(matchFinished.result);
      }
      const matchUpdated = await this._IMatchService
        .update(Number(id), homeTeamGoals, awayTeamGoals);
      return res.status(matchUpdated.code as number).json(matchUpdated.result);
    } catch (err) {
      next(err);
    }
  }
}

export default MatchController;
