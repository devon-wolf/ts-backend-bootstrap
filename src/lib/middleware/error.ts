import { NextFunction, Request, Response } from 'express';
import { ExpressError } from '../../../types'; 

// eslint-disable-next-line no-unused-vars
export default (err : ExpressError, req : Request, res : Response, next : NextFunction) => {
  let status = err.status || 500;

  res.status(status);

  console.log(err);

  res.send({
    status,
    message: err.message
  });
};
