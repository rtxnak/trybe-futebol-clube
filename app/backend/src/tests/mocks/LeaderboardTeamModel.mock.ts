import { ITeamInfoLB } from "../../interfaces/LeaderboardInterfaces/ITeamInfoLB.interface";

const leaderboardTeamModelMock: ITeamInfoLB[] = [
  {
    id: 1,
    teamName: "Avaí/Kindermann",
    teamHome: [{
      dataValues: {
        goalsFavor: 1,
        goalsOwn: 1
      },
    },
    {
      dataValues: {
        goalsFavor: 2,
        goalsOwn: 3
      },
    },
    {
      dataValues: {
        goalsFavor: 0,
        goalsOwn: 3
      }
    }],
    teamAway: [{
      dataValues: {
        goalsFavor: 0,
        goalsOwn: 1
      },
    },
    {
      dataValues: {
        goalsFavor: 1,
        goalsOwn: 0
      },
    }],
  },
  {
    id: 2,
    teamName: "Bahia",
    teamHome: [
      {
        dataValues: {
          goalsFavor: 0,
          goalsOwn: 1
        },
      },
      {
        dataValues: {
          goalsFavor: 0,
          goalsOwn: 1
        },
      },
      {
        dataValues: {
          goalsFavor: 0,
          goalsOwn: 2
        },
      }
    ],
    teamAway: [
      {
        dataValues: {
          goalsFavor: 0,
          goalsOwn: 0
        },
      },
      {
        dataValues: {
          goalsFavor: 2,
          goalsOwn: 2
        },
      }
    ]
  },
  {
    id: 3,
    teamName: "Botafogo",
    teamHome: [
      {
        dataValues: {
          goalsFavor: 0,
          goalsOwn: 0
        },
      },
      {
        dataValues: {
          goalsFavor: 0,
          goalsOwn: 4
        },
      },
      {
        dataValues: {
          goalsFavor: 2,
          goalsOwn: 0
        },
      }
    ],
    teamAway: [
      {
        dataValues: {
          goalsFavor: 1,
          goalsOwn: 3
        },
      },
      {
        dataValues: {
          goalsFavor: 0,
          goalsOwn: 1
        },
      }
    ]
  },
  {
    id: 4,
    teamName: "Corinthians",
    teamHome: [
      {
        dataValues: {
          goalsFavor: 3,
          goalsOwn: 1
        },
      },
      {
        dataValues: {
          goalsFavor: 3,
          goalsOwn: 0
        },
      },
    ],
    teamAway: [
      {
        dataValues: {
          goalsFavor: 1,
          goalsOwn: 2
        },
      },
      {
        dataValues: {
          goalsFavor: 1,
          goalsOwn: 0
        },
      },
      {
        dataValues: {
          goalsFavor: 4,
          goalsOwn: 0
        },
      }
    ]
  },
];

export default leaderboardTeamModelMock;