import { Injectable } from '@nestjs/common'
import { AsyncEither, left, right } from 'src/common/logic/Either'
import { TaskRepository } from '../repositories/task.repository'

import { DomainError } from 'src/common/errors'
import { IUseCase, IUseCaseResponse } from 'src/common/types/use-case'
import { NoneElementError } from 'src/common/errors/none-element-error'
import { DeleteTaskDto } from '../dtos/delete-task'

type DeleteTaskResponse = AsyncEither<DomainError, IUseCaseResponse>

@Injectable()
export class DeleteTaskUseCase implements IUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(payload: DeleteTaskDto): DeleteTaskResponse {
    const { id } = payload

    const task = await this.taskRepository.findById(id)
    if (!task) return left(new NoneElementError('Unfounded task'))

    await this.taskRepository.delete(id)

    return right({
      message: 'Task deleted successfuly',
      response: {},
    })
  }
}
