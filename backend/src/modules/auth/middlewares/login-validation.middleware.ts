import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

import { validate } from 'class-validator'
import { LoginRequestBody } from '../models/login-request-body'

@Injectable()
export class LoginValidationMiddleware implements NestMiddleware {
  async use(req: Request, _res: Response, next: NextFunction) {
    const body = req.body

    const loginRequestBody = new LoginRequestBody()
    loginRequestBody.email = body.email
    loginRequestBody.password = body.password

    const validations = await validate(loginRequestBody)

    if (validations.length) {
      throw new BadRequestException(
        validations.reduce((acc, curr) => {
          if (curr.constraints) {
            return [...acc, ...Object.values(curr.constraints)]
          }
          return acc
        }, [] as string[])
      )
    }

    next()
  }
}
