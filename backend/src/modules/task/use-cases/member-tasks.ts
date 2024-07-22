import { Injectable } from '@nestjs/common'
import { AsyncEither, left, right } from 'src/common/logic/Either'
import { TaskRepository } from '../repositories/task.repository'

import { DomainError } from 'src/common/errors'
import { IUseCase, IUseCaseResponse } from 'src/common/types/use-case'
import { NoneElementError } from 'src/common/errors/none-element-error'
import { GetTaskDto } from '../dtos/get-task'

type MemberTasksResponse = AsyncEither<DomainError, IUseCaseResponse>

@Injectable()
export class MemberTasksUseCase implements IUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(_payload: unknown, memberId: string): MemberTasksResponse {
    const tasks = await this.taskRepository.findAllByMemberId(memberId)
    if (!tasks) return left(new NoneElementError('Unfounded task'))

    return right({
      message: 'Task retrivied successfuly',
      response: { tasks: tasks.map((task) => task._serialized) },
    })
  }
}
