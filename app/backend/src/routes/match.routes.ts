import { Router } from 'express';
import MatchRepository from '../database/repostories/match.repository';
import MatchService from '../services/match.service';
import MatchController from '../controllers/match.controller';

const matchRepository = new MatchRepository();
const matchService = new MatchService(matchRepository);
const matchController = new MatchController(matchService);

const matchRouter = Router();

matchRouter.get('/', (req, res, next) => {
  matchController.findAll(req, res, next);
});

matchRouter.post('/', (req, res, next) => {
  matchController.create(req, res, next);
});

matchRouter.patch('/:id/finish', (req, res, next) => {
  matchController.finishOrUpdate(req, res, next);
});

matchRouter.patch('/:id', (req, res, next) => {
  matchController.finishOrUpdate(req, res, next);
});

export default matchRouter;
