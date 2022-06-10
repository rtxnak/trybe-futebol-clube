import { Router } from 'express';
import LeaderboardRepository from '../database/repostories/leaderboard.repository';
import LeaderboardService from '../services/leaderboard.service';
import LeaderboardController from '../controllers/leaderboard.controller';

const leaderboardRepository = new LeaderboardRepository();
const leaderboardService = new LeaderboardService(leaderboardRepository);
const leaderboardController = new LeaderboardController(leaderboardService);

const leaderboardRouter = Router();

leaderboardRouter.get('/', (req, res, next) => {
  leaderboardController.getLeaderboardOverall(req, res, next);
});

leaderboardRouter.get('/home', (req, res, next) => {
  leaderboardController.getLeaderboardByHome(req, res, next);
});

leaderboardRouter.get('/away', (req, res, next) => {
  leaderboardController.getLeaderboardByAway(req, res, next);
});

export default leaderboardRouter;
