import Team from '../models/Teams';
import Match from '../models/Matches';

export default class LeaderboardRepository {
  public findAll = async () => {
    const teamHomeResult = await Team.findAll({
      order: ['id'],
      include: [{
        model: Match,
        as: 'teamHome',
        attributes: [['home_team_goals', 'goalsFavor'], ['away_team_goals', 'goalsOwn']],
        where: { inProgress: false },
      },
      {
        model: Match,
        as: 'teamAway',
        attributes: [['away_team_goals', 'goalsFavor'], ['home_team_goals', 'goalsOwn']],
        where: { inProgress: false },
      }],
    });
    return teamHomeResult;
  };
}
