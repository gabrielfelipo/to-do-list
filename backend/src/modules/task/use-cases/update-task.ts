import { Injectable } from '@nestjs/common'
import { AsyncEither, left, right } from 'src/common/logic/Either'
import { TaskRepository } from '../repositories/task.repository'
import { DomainError } from 'src/common/errors'
import { IUseCase, IUseCaseResponse } from 'src/common/types/use-case'
import { NoneElementError } from 'src/common/errors/none-element-error'
import { UpdateTaskDto } from '../dtos/update-task'

type UpdateTaskResponse = AsyncEither<DomainError, IUseCaseResponse>

@Injectable()
export class UpdateTaskUseCase implements IUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(payload: UpdateTaskDto): UpdateTaskResponse {
    const task = await this.taskRepository.findById(payload.id)
    if (!task) return left(new NoneElementError('Unfounded task'))

    const updatedTask = await this.taskRepository.update({
      ...payload,
      id: task.id,
    })

    return right({
      message: 'Updated Task successfuly',
      response: { task: updatedTask._serialized },
    })
  }
}
