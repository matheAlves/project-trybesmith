import connection from '../models/connection';
import UserModel from '../models/user.model';
import LoginService from './login.service';
import { User, Token } from '../interfaces';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  // public async list() {
  //   const result = await this.model.list();
  //   return result;
  // }

  public async add(user: User): Promise<Token> {
    await this.model.add(user);
    const loginService = new LoginService();
    const token = await loginService.makeToken(user);
    return token;
  }
}