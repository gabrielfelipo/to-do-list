import { Injectable } from '@nestjs/common'
import { AsyncEither, left, right } from 'src/common/logic/Either'
import { TaskRepository } from '../repositories/task.repository'

import { DomainError } from 'src/common/errors'
import { IUseCase, IUseCaseResponse } from 'src/common/types/use-case'
import { NoneElementError } from 'src/common/errors/none-element-error'
import { GetTaskDto } from '../dtos/get-task'
import { FinalizeTaskDto } from '../dtos/finalize-task'
import dayjs from 'dayjs'

type FinalizeTaskResponse = AsyncEither<DomainError, IUseCaseResponse>

@Injectable()
export class FinalizeTaskUseCase implements IUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(payload: FinalizeTaskDto): FinalizeTaskResponse {
    const { id: taskId } = payload

    const task = await this.taskRepository.findById(taskId)
    if (!task) return left(new NoneElementError('Unfounded task'))

    const finalizedTask = await this.taskRepository.update({
        id: task.id,
        finalized: true,
        endDate: dayjs().toDate()
    })

    return right({
      message: 'Task finalized successfuly',
      response: { task: finalizedTask._serialized },
    })
  }
}
