import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/login.service';

const service = new LoginService();

async function validateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;
  if (!token) {
    const err = new Error('Token not found');
    err.name = 'InvalidCredentials';
    throw err;
  }
  const user = await service.readToken({ token });
  // source: http://expressjs.com/en/api.html#res.locals
  res.locals.user = user;
  next();
}

export default validateToken;