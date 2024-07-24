import { Injectable } from '@nestjs/common'
import { AsyncEither, left, right } from 'src/common/logic/Either'
import { TaskRepository } from '../repositories/task.repository'

import { DomainError } from 'src/common/errors'
import { IUseCase, IUseCaseResponse } from 'src/common/types/use-case'
import { NoneElementError } from 'src/common/errors/none-element-error'
import { GetTaskDto } from '../dtos/get-task'

type AllTasksResponse = AsyncEither<DomainError, IUseCaseResponse>

@Injectable()
export class AllTasksUseCase implements IUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(): AllTasksResponse {
    const tasks = await this.taskRepository.findAll()
    if (!tasks) return left(new NoneElementError('Unfounded task'))

    return right({
      message: 'Task retrivied successfuly',
      response: { tasks: tasks.map((task) => task._serialized) },
    })
  }
}
