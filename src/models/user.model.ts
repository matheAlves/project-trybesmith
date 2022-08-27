import { Pool, RowDataPacket } from 'mysql2/promise';
import { User, Login } from '../interfaces';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async add(user: User) {
    const { username, classe, level, password } = user;
    await this.connection.execute(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
  }

  public async validateLogin(login: Login): Promise<User> {
    const { username, password } = login;
    const [[result]] = await this.connection.execute<RowDataPacket[]>(
      `SELECT * FROM Trybesmith.Users
    WHERE username = ? AND password = ?`,
      [username, password],
    );
    return result as User;
  }

  public async findIdOf(username: string) {
    const [[{ id }]] = await this.connection.execute<RowDataPacket[]>(
      'SELECT id FROM Trybesmith.Users WHERE username = ?',
      [username],
    );
    return id;
  }
}
