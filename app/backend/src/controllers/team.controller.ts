import { NextFunction, Request, Response } from 'express';
import { ITeamService } from '../interfaces/ITeamService.interface';

class TeamController {
  private _ITeamService: ITeamService;
  constructor(teamService: ITeamService) {
    this._ITeamService = teamService;
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await this._ITeamService.findAll();

      return res.status(teams.code as number).json(teams.result);
    } catch (err) {
      next(err);
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const team = await this._ITeamService.findOne(id);

      return res.status(team.code as number).json(team.result);
    } catch (err) {
      next(err);
    }
  }
}

export default TeamController;
