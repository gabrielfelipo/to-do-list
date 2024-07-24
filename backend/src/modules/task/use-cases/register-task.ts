import { Injectable } from '@nestjs/common'
import { AsyncEither, left, right } from 'src/common/logic/Either'
import { TaskRepository } from '../repositories/task.repository'
import { MemberRepository } from 'src/modules/member/repositories/member.repository'
import { DomainError } from 'src/common/errors'
import { IUseCase, IUseCaseResponse } from 'src/common/types/use-case'
import { CreateTaskDto } from '../dtos/create-task'
import { Task } from '../entities/Task'
import { UnauthorizedError } from 'src/common/errors/unauthoraized-error'

type RegisterTaskResponse = AsyncEither<DomainError, IUseCaseResponse>

@Injectable()
export class RegisterTaskUseCase implements IUseCase {
  constructor(
    private readonly taskRepository: TaskRepository,
    private memberRepository: MemberRepository
  ) {}

  async execute(
    payload: CreateTaskDto,
    memberId: string
  ): RegisterTaskResponse {
    const member = await this.memberRepository.findById(memberId)

    if (!member) return left(new UnauthorizedError('Unauthorized member'))

    const rawTask = Task.create({
      ...payload,
      memberId: member.id,
      finalized: false,
    })

    const task = await this.taskRepository.create(rawTask)

    return right({
      message: 'Created Task successfuly',
      response: { task: task._serialized },
    })
  }
}
