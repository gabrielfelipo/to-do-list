import { Injectable } from '@nestjs/common'
import { DomainError } from 'src/common/errors'
import { AsyncEither, left, right } from 'src/common/logic/Either'
import { Member } from '../entities/Member'
import { IUseCase, IUseCaseResponse } from 'src/common/types/use-case'
import { MemberRepository } from '../repositories/member.repository'
import * as bcrypt from 'bcrypt'
import { UnauthorizedError } from 'src/common/errors/unauthoraized-error'

type GetMemberResponse = AsyncEither<DomainError, IUseCaseResponse>

@Injectable()
export class GetMemberUseCase implements IUseCase {
  constructor(private memberRepository: MemberRepository) {}

  async execute(_payload: unknown, memberId: string): GetMemberResponse {

    const member = await this.memberRepository.findById(memberId)
    if (!member) throw left(new UnauthorizedError())

    return right({
      message: 'Member retrivied successfuly',
      response: { member: { id: member.id, name: member.name }},
    })
  }
}
