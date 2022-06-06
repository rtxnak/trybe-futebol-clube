import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/Matches';

import matchModelMock from './mocks/MatchModel.mock';
import MatchCreateResultMock from './mocks/MatchCreateResult.mock';
import MatchUpdateGoalsResultMock from './mocks/MatchUpdateGoalsResultMock.mock'

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;
describe('Match API test', () => {

  describe('GET /matches SUCESSO', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      sinon.stub(Match, 'findAll').resolves(matchModelMock as Match[]);

      chaiHttpResponse = await chai
        .request(app)
        .get('/matches')
    })

    after(() => {
      (Match.findAll as sinon.SinonStub).restore();
    })

    it('retorna status code "200"', () => {
      expect(chaiHttpResponse).to.have.status(200);
    });
    it('retorna um array com todas as partidas', () => {
      expect(chaiHttpResponse.body).to.be.deep.eq(matchModelMock);
    });
  });

  describe('POST /matches FALHA, Away team e Home team com o mesmo ID ', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/matches')
        .send({
          homeTeam: 8,
          homeTeamGoals: 2,
          awayTeam: 8,
          awayTeamGoals: 2,
          inProgress: false
        })
    })

    it('retorna status code "401"', () => {
      expect(chaiHttpResponse).to.have.status(401);
    });
    it('retorna a mensagem: It is not possible to create a match with two equal teams', () => {
      const { message } = chaiHttpResponse.body
      expect(message).to.be.equal('It is not possible to create a match with two equal teams');
    });
  });

  describe('POST /matches FALHA, Away team ou Home team com ID não existente na tabela Teams ', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/matches')
        .send({
          homeTeam: 99,
          homeTeamGoals: 2,
          awayTeam: 88,
          awayTeamGoals: 2,
          inProgress: false
        })
    })

    it('retorna status code "404"', () => {
      expect(chaiHttpResponse).to.have.status(404);
    });
    it('retorna a mensagem: There is no team with such id!', () => {
      const { message } = chaiHttpResponse.body
      expect(message).to.be.equal('There is no team with such id!');
    });
  });

  describe('POST /matches SUCESSO', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      sinon.stub(Match, 'create').resolves(MatchCreateResultMock as Match);

      chaiHttpResponse = await chai
        .request(app)
        .post('/matches')
        .send({
          homeTeam: 16,
          homeTeamGoals: 2,
          awayTeam: 8,
          awayTeamGoals: 2,
          inProgress: false
        })
    })

    after(() => {
      (Match.create as sinon.SinonStub).restore();
    })

    it('retorna status code "201"', () => {
      expect(chaiHttpResponse).to.have.status(201);
    });
    it('retorna a partida criada com ID e inProgress true', () => {
      expect(chaiHttpResponse.body).to.be.deep.eq(MatchCreateResultMock);
    });
  });

  describe('PATCH /matches/:id/finish FALHA, id com partida ja finalizada', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      sinon.stub(Match, 'update').resolves([0] as unknown as [number, Match[]]);

      chaiHttpResponse = await chai
        .request(app)
        .patch('/matches/48')
    })

    after(() => {
      (Match.update as sinon.SinonStub).restore();
    })

    it('retorna status code "400"', () => {
      expect(chaiHttpResponse).to.have.status(400);
    });
    it('retorna a mensagem: Already finished', () => {
      const { message } = chaiHttpResponse.body
      expect(message).to.be.equal('Already finished');
    });
  });

  describe('PATCH /matches/:id/finish SUCESSO, finalizado uma partida', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      sinon.stub(Match, 'update').resolves([1] as unknown as [number, Match[]]);

      chaiHttpResponse = await chai
        .request(app)
        .patch('/matches/48')
    })

    after(() => {
      (Match.update as sinon.SinonStub).restore();
    })

    it('retorna status code "200"', () => {
      expect(chaiHttpResponse).to.have.status(200);
    });
    it('retorna a mensagem: Finished', () => {
      const { message } = chaiHttpResponse.body
      expect(message).to.be.equal('Finished');
    });
  });

  describe('PATCH /matches/:id FALHA, id no banco com a mesma informacao do dado enviado, sem alteracao de gols', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      sinon.stub(Match, 'update').resolves([0] as unknown as [number, Match[]]);

      chaiHttpResponse = await chai
        .request(app)
        .patch('/matches/47')
        .send({
          homeTeamGoals: 1,
          awayTeamGoals: 2,
        })
    })

    after(() => {
      (Match.update as sinon.SinonStub).restore();
    })

    it('retorna status code "400"', () => {
      expect(chaiHttpResponse).to.have.status(400);
    });
    it('retorna a mensagem: Goals have not been updated', () => {
      const { message } = chaiHttpResponse.body
      expect(message).to.be.equal('Goals have not been updated');
    });
  });

  describe('PATCH /matches/:id SUCESSO, alterando valores de homeTeamGoals e awayTeamGoals', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      sinon.stub(Match, 'update').resolves([1] as unknown as [number, Match[]]);

      chaiHttpResponse = await chai
        .request(app)
        .patch('/matches/48')
        .send({
          homeTeamGoals: 99,
          awayTeamGoals: 99,
        })
    })

    after(() => {
      (Match.update as sinon.SinonStub).restore();
    })

    it('retorna status code "200"', () => {
      expect(chaiHttpResponse).to.have.status(200);
    });
    it('retorna os gols atualizados e a mensagem: Goals Updated', () => {
      expect(chaiHttpResponse.body).to.be.deep.eq(MatchUpdateGoalsResultMock.result);
    });
  });
});