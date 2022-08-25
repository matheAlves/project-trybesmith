// retrabalhado do projeto Blogs API
import jwt = require('jsonwebtoken');
import { User } from '../interfaces';

export default class AuthService {
  private user: User;

  private secret: string;

  constructor(user: User) {
    this.user = user;
    this.secret = 'bigboobz';
    // https://www.youtube.com/watch?v=8GxqvnQyaxs
  }

  async makeToken() {
    const token = jwt.sign(this.user, this.secret);
    return token;
  }

  // async readToken(token) {
  //   const { data } = jwt.verify(token, secret);
  //   return data;
  // },

  // async verifyToken(token) {
  //   const { data } = jwt.verify(token, secret);
  //   return data;
  // },
}