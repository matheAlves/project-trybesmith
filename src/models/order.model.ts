import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Order } from '../interfaces';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async list(): Promise<Order[]> {
    // source: https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html#function_json-arrayagg
    const sql = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.Orders AS o
      INNER JOIN Trybesmith.Products AS p
      ON o.id = p.orderId
      GROUP BY o.id
      ORDER BY o.userId`;
    const [result] = await this.connection.execute(sql);
    return result as Order[];
  }

  public async newOrder(userId: number) {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
    return insertId;
  }
}
