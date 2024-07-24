import { Injectable } from '@nestjs/common'
import { AsyncEither, left, right } from 'src/common/logic/Either'
import { TaskRepository } from '../repositories/task.repository'

import { DomainError } from 'src/common/errors'
import { IUseCase, IUseCaseResponse } from 'src/common/types/use-case'
import { NoneElementError } from 'src/common/errors/none-element-error'
import { GetTaskDto } from '../dtos/get-task'
import { MemberRepository } from 'src/modules/member/repositories/member.repository'
import { UnauthorizedError } from 'src/common/errors/unauthoraized-error'
import { MemberFromJwt } from 'src/modules/auth/models/member-from-jwt'

type MemberTasksResponse = AsyncEither<DomainError, IUseCaseResponse>

@Injectable()
export class MemberTasksUseCase implements IUseCase {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly memberRepository: MemberRepository
  ) {}

  async execute(_payload: unknown, { id }: MemberFromJwt): MemberTasksResponse {
    const member = await this.memberRepository.findById(id)
    if (!member) return left(new UnauthorizedError())

    const tasks = await this.taskRepository.findAllByMemberId(id)
    if (!tasks) return left(new NoneElementError('Unfounded task'))

    return right({
      message: 'Task retrivied successfuly',
      response: { tasks: tasks.map((task) => task._serialized) },
    })
  }
}
