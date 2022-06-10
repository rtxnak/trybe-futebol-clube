import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/Teams';

import leaderboardTeamModelMock from './mocks/LeaderboardTeamModel.mock';
import leaderboardHomeResultMock from './mocks/LeaderboardHomeResult.mock';
import leaderboardAwayResultMock from './mocks/LeaderboardAwayResult.mock';
import leaderboardOverallResultMock from './mocks/LeaderboardOverallResult.mock'

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;
describe('Leaderboard API test', () => {

  describe('GET /leaderboard/home SUCESSO', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      sinon.stub(Team, 'findAll').resolves(leaderboardTeamModelMock as unknown as Team[]);

      chaiHttpResponse = await chai
        .request(app)
        .get('/leaderboard/home')
    })

    after(() => {
      (Team.findAll as sinon.SinonStub).restore();
    })

    it('retorna status code "200"', () => {
      expect(chaiHttpResponse).to.have.status(200);
    });
    it('retorna um array do leaderboard conforme a ordem definida', () => {
      expect(chaiHttpResponse.body).to.be.deep.eq(leaderboardHomeResultMock);
    });
  });

  describe('GET /leaderboard/away SUCESSO', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      sinon.stub(Team, 'findAll').resolves(leaderboardTeamModelMock as unknown as Team[]);

      chaiHttpResponse = await chai
        .request(app)
        .get('/leaderboard/away')
    })

    after(() => {
      (Team.findAll as sinon.SinonStub).restore();
    })

    it('retorna status code "200"', () => {
      expect(chaiHttpResponse).to.have.status(200);
    });
    it('retorna um array do leaderboard conforme a ordem definida', () => {
      expect(chaiHttpResponse.body).to.be.deep.eq(leaderboardAwayResultMock);
    });
  });

  describe('GET /leaderboard/ SUCESSO', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      sinon.stub(Team, 'findAll').resolves(leaderboardTeamModelMock as unknown as Team[]);

      chaiHttpResponse = await chai
        .request(app)
        .get('/leaderboard')
    })

    after(() => {
      (Team.findAll as sinon.SinonStub).restore();
    })

    it('retorna status code "200"', () => {
      expect(chaiHttpResponse).to.have.status(200);
    });
    it('retorna um array do leaderboard conforme a ordem definida', () => {
      expect(chaiHttpResponse.body).to.be.deep.eq(leaderboardOverallResultMock);
    });
  });
});