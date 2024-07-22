import { Injectable } from '@nestjs/common'
import dayjs from 'dayjs'
import { CreateMemberDto } from '../dtos/create-member'
import { DomainError } from 'src/common/errors'
import { AsyncEither, right } from 'src/common/logic/Either'
import { Member } from '../entities/Member'
import { IUseCase, IUseCaseResponse } from 'src/common/types/use-case'
import { MemberRepository } from '../repositories/member.repository'
import * as bcrypt from 'bcrypt'

type CreateMemberResponse = AsyncEither<DomainError, IUseCaseResponse>

@Injectable()
export class CreateMemberUseCase implements IUseCase {
  constructor(private memberRepository: MemberRepository) {}

  async execute(payload: CreateMemberDto): CreateMemberResponse {

    const member = Member.create({
      name: payload.name,
      email: payload.email,
      password: await bcrypt.hash(payload.password, 10),
    })

    await this.memberRepository.create(member)


    return right({
      message: 'Member created successfuly',
      response: { member },
    })
  }
}
