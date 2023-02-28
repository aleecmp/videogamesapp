import { NextFunction, Request, Response } from 'express';
import { IError } from '../types';
import { handleErrorUtil } from '../utils';

export default (
  err: IError | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if ([err.status, err.service, err.type].includes(undefined))
    err = handleErrorUtil(err, 500, 'Express');
  console.error(err);
  const { error, service, type, status, message } = err;
  res.status(status).send({ error, message, service, type });
};
