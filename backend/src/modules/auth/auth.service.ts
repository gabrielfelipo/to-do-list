import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { MemberRepository } from '../member/repositories/member.repository'
import { MemberToken } from './models/member-token'
import { MemberPayload } from './models/member-payload'
import { UnauthorizedError } from 'src/common/errors/unauthoraized-error'
import { Member, MemberEntity } from '../member/entities/Member'
import { AsyncEither, right } from 'src/common/logic/Either'
import { DomainError } from 'src/common/errors'
import { IUseCaseResponse } from 'src/common/types/use-case'

type LoginMemberResponse = AsyncEither<DomainError, IUseCaseResponse>

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly membersRepository: MemberRepository
  ) {}

  async login(member: Member): LoginMemberResponse {
    const payload: MemberPayload = {
      sub: member.id,
      email: member.email,
      name: member.name,
    }

    return right({
      message: 'Logged successfully',
      response: {
        access_token: this.jwtService.sign(payload),
      },
    })
  }

  async validateMember(email: string, password: string): Promise<MemberEntity> {
    const member = await this.membersRepository.findByEmail(email)

    if (member) {
      const isPasswordValid = await bcrypt.compare(password, member.password)

      if (isPasswordValid) {
        return {
          ...member._serialized,
          password: undefined as unknown as string,
        }
      }
    }

    throw new UnauthorizedError(
      'Email address or password provided is incorrect.'
    )
  }
}
