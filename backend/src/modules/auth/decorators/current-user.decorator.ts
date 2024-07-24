import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { Member } from 'src/modules/member/entities/Member'
import { AuthRequest } from '../models/auth-request'

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): Member => {
    const request = context.switchToHttp().getRequest<AuthRequest>()

    return request.user
  }
)
