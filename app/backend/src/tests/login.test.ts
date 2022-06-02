import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/Users';

import userModelMock from './mocks/UserModel.mock';
import loginResultMock from './mocks/loginResult.mock';
import token from './mocks/token.mock';

// import tokenGenerator from '../utils/tokenGenerator';


import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;
describe('User API test', () => {

  describe('POST /login FALHA email ou password nulo', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      // sinon.stub(User, 'findOne').resolves({ ...userModelMock[0] } as User);

      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'admin@admin.com' });
    })

    // after(() => {
    //   (User.findOne as sinon.SinonStub).restore();
    // })

    it('retorna status code "400"', () => {
      expect(chaiHttpResponse).to.have.status(400);
    });

    it('retorna message "All fields must be filled"', () => {
      const { message } = chaiHttpResponse.body
      expect(message).to.be.string;
      expect(message).to.be.equal('All fields must be filled');
    });
  });

  describe('POST /login FALHA email ou password nao encontrado', () => {

    let chaiHttpResponse: Response;

    before(async () => {
      // sinon.stub(User, 'findOne').resolves({ ...userModelMock[0] } as User);

      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'hacker@hacker.com', password: 'secret_hacker' });
    })

    // after(() => {
    //   (User.findOne as sinon.SinonStub).restore();
    // })

    it('retorna status code "401"', () => {
      expect(chaiHttpResponse).to.have.status(401);
    });

    it('retorna message "Incorrect email or password"', () => {
      const { message } = chaiHttpResponse.body
      expect(message).to.be.string;
      expect(message).to.be.equal('Incorrect email or password');
    });
  });

  describe('POST /login SUCESSO', () => {

    let chaiHttpResponse: Response;

    before(async () => {
      sinon.stub(User, 'findOne').resolves({ ...userModelMock[0] } as User);
      // sinon.stub(tokenGenerator, 'create').resolves(token);

      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'admin@admin.com', password: 'secret_admin' });
    })

    after(() => {
      (User.findOne as sinon.SinonStub).restore();
      // (tokenGenerator.create as sinon.SinonStub).restore();
    })

    it('retorna status code "200"', () => {
      expect(chaiHttpResponse).to.have.status(200);
    });
    it('retorna um objeto user conforme os valores esperados', () => {
      const { user } = chaiHttpResponse.body
      expect(user).to.be.deep.eq(loginResultMock.user);
    });
    it('retorna um token em formato de string', () => {
      const { token } = chaiHttpResponse.body
      expect(token).to.be.string;
    });

  });

  describe('POST /login/validate FALHA token invalido', async () => {

    let chaiHttpResponse: Response;

    before(async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/login/validate').
        set('Authorization', 'wrong-token')
    })

    it('retorna status code "401"', () => {
      expect(chaiHttpResponse).to.have.status(401);
    });

    it('retorna message "token invalid"', () => {
      const { message } = chaiHttpResponse.body
      expect(message).to.be.string;
      expect(message).to.be.equal('token invalid');
    });
  });

  describe('POST /login/validate SUCESSO', () => {
    let chaiHttpResponse: Response;

    before(async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/login/validate').
        set('Authorization', token)
    })

    it('retorna status code "200"', () => {
      expect(chaiHttpResponse).to.have.status(200);
    });

    it('retorna a role do usuário', () => {
      expect(chaiHttpResponse.body).to.be.equal('admin');
    });
  });
});
