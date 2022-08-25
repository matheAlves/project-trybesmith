import { Pool } from 'mysql2/promise';
import { User } from '../interfaces';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  // public async list(): Promise<Product[]> {
  //   const [result] = await this.connection.execute(
  //     'SELECT * FROM Trybesmith.Products',
  //   );
  //   return result as Product[];
  // }

  public async add(user: User) {
    const { username, classe, level, password } = user;
    await this.connection.execute(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
  }
}
