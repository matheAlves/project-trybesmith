import connection from '../models/connection';
import OrderModel from '../models/order.model';

export default class OderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async list() {
    const result = await this.model.list();
    return result;
  }

  // public async add(user: User): Promise<Token> {
  //   await this.model.add(user);
  //   const authService = new AuthService(user);
  //   const token = await authService.makeToken();
  //   return { token };
  // }
}