import jwt = require('jsonwebtoken');
import { User, Token, Login } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import validate from '../utils/joi-validators';

export default class LoginService {
  public model: UserModel;

  private secret: string;

  constructor() {
    this.model = new UserModel(connection);
    // https://www.youtube.com/watch?v=8GxqvnQyaxs
    this.secret = 'bigboobz';
  }

  async makeToken(user: User | Login): Promise<Token> {
    const token = jwt.sign(JSON.stringify(user), this.secret);
    return { token } as Token;
  }

  async login(login: Login): Promise<Token> {
    await validate.login(login);
    const validLogin = await this.model.validateLogin(login);
    if (!validLogin) {
      const e = new Error('Username or password invalid');
      e.name = 'InvalidCredentials';
      throw e;
    } else {
      const result = await this.makeToken(login);
      return result;
    }
  }

  async readToken(payload: Token) {
    try {
      const data = jwt.verify(payload.token, this.secret);
      return data;
    } catch (_err) {
      const e = new Error('Invalid token');
      e.name = 'InvalidCredentials';
      throw e;
    }
  }
}