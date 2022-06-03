import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/Teams';

import teamModelMock from './mocks/TeamModel.mock';
import teamIDResult from './mocks/teamIDResult.mock'

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;
describe('Team API test', () => {

  describe('GET /teams SUCESSO', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      sinon.stub(Team, 'findAll').resolves(teamModelMock as Team[]);

      chaiHttpResponse = await chai
        .request(app)
        .get('/teams')
    })

    after(() => {
      (Team.findAll as sinon.SinonStub).restore();
    })

    it('retorna status code "200"', () => {
      expect(chaiHttpResponse).to.have.status(200);
    });
    it('retorna um array com todos os times', () => {
      expect(chaiHttpResponse.body).to.be.deep.eq(teamModelMock);
    });
  });

  describe('GET /teams/:id FALHA , id não existente', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      sinon.stub(Team, 'findOne').resolves(null);

      chaiHttpResponse = await chai
        .request(app)
        .get('/teams/99')
    })

    after(() => {
      (Team.findOne as sinon.SinonStub).restore();
    })

    it('retorna status code "400"', () => {
      expect(chaiHttpResponse).to.have.status(400);
    });
    it('retorna message "not found"', () => {
      const { message } = chaiHttpResponse.body
      expect(message).to.be.string;
      expect(message).to.be.equal('not found');
    });
  });
});

describe('GET /teams/:id SUCESSO', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(Team, 'findOne').resolves(teamIDResult as Team);

    chaiHttpResponse = await chai
      .request(app)
      .get('/teams/5')
  })

  after(() => {
    (Team.findOne as sinon.SinonStub).restore();
  })

  it('retorna status code "200"', () => {
    expect(chaiHttpResponse).to.have.status(200);
  });
  it('retorna um objeto refente ao id especifico', () => {
    expect(chaiHttpResponse.body).to.be.deep.eq(teamIDResult);
  });
});
