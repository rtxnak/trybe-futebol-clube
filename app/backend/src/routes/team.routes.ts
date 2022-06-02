import { Router } from 'express';
import TeamRepository from '../database/repostories/team.repository';
import TeamService from '../services/team.service';
import TeamController from '../controllers/team.controller';
import { ITeamRepository } from '../interfaces/ITeamRepository.interface';

const teamRepository = new TeamRepository();
const teamService = new TeamService(teamRepository as ITeamRepository);
const teamController = new TeamController(teamService);

const teamRouter = Router();

teamRouter.get('/', (req, res, next) => {
  teamController.findAll(req, res, next);
});
teamRouter.get('/:id', (req, res, next) => {
  teamController.findOne(req, res, next);
});

export default teamRouter;
