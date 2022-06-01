import jwt = require('jsonwebtoken');

class tokenGenerator {
  private static secret: string = process.env.SECRET || 'super_senha';

  static create(user: object) {
    return jwt.sign(user, this.secret, { expiresIn: '7d' });
  }

  static decode(token: string) {
    return jwt.verify(token, this.secret);
  }
}

export default tokenGenerator;
