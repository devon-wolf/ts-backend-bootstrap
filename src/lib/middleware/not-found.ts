import { Request, Response, NextFunction } from 'express';
import { ExpressError } from '../../../types';

export default (req : Request, res : Response, next : NextFunction) => {
  const err = new ExpressError('Not Found');
  err.status = 404;
  next(err);
};
