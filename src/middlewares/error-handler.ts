// baseado em exemplo da aula ao vivo 26.3
import { NextFunction, Request, Response } from 'express';

const errors: Record<string, number> = {
  ValidationError: 400,
  InvalidCredentials: 401,
};

const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const status = errors[err.name];
  if (!status) return res.sendStatus(500);
  res.status(status).json({ message: err.message });
};

export default errorHandler;