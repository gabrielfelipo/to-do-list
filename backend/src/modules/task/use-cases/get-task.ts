import { Injectable } from '@nestjs/common'
import { AsyncEither, left, right } from 'src/common/logic/Either'
import { TaskRepository } from '../repositories/task.repository'

import { DomainError } from 'src/common/errors'
import { IUseCase, IUseCaseResponse } from 'src/common/types/use-case'
import { NoneElementError } from 'src/common/errors/none-element-error'
import { GetTaskDto } from '../dtos/get-task'

type GetTaskResponse = AsyncEither<DomainError, IUseCaseResponse>

@Injectable()
export class GetTaskUseCase implements IUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(payload: GetTaskDto): GetTaskResponse {
    const { id: taskId } = payload

    const task = await this.taskRepository.findById(taskId)
    if (!task) return left(new NoneElementError('Unfounded task'))

    return right({
      message: 'Task retrivied successfuly',
      response: { task: task._serialized },
    })
  }
}
