import connection from '../models/connection';
import UserModel from '../models/user.model';
import LoginService from './login.service';
import { User, Token } from '../interfaces';
import validate from '../utils/joi-validators';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async add(user: User): Promise<Token> {
    await validate.user(user);
    await this.model.add(user);
    const loginService = new LoginService();
    const token = await loginService.makeToken(user);
    return token;
  }
}