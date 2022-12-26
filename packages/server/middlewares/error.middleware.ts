import type { NextFunction, Request, Response } from 'express'

import type HttpException from '../exceptions/HttpException'

function errorMiddleware(
  error: HttpException,
  _: Request,
  response: Response,
  __: NextFunction
) {
  const status = error.status || 500
  const message = error.message || 'Something went wrong'
  response.status(status).send({
    status,
    message,
  })
}

export default errorMiddleware
