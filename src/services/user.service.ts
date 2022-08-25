import connection from '../models/connection';
import UserModel from '../models/user.model';
import AuthService from './auth.service';
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
    const authService = new AuthService(user);
    const token = await authService.makeToken();
    return { token };
  }
}