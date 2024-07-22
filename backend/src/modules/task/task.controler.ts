import { Body, Controller, Patch, Post } from '@nestjs/common'

import { createTaskSchema } from './dtos/create-task'
import { ZodValidationPipe } from 'src/utils/validation-pipe'
import { CreateTaskDto } from './dtos/create-task'
import { RegisterTaskUseCase } from './use-cases/register-task'
import { UpdateTaskDto, updateTaskSchema } from './dtos/update-task'
import { UpdateTaskUseCase } from './use-cases/update-task'

@Controller('tasks')
export class TaskController {
  constructor(
    private registerTaskUseCase: RegisterTaskUseCase, 
    private updateTaskUseCase: UpdateTaskUseCase
  ) {}

  @Post()
  async createTask(
    @Body(new ZodValidationPipe(createTaskSchema))
    createTaskDto: CreateTaskDto
  ) {
    return await this.registerTaskUseCase.execute(createTaskDto, '5728be95-81cb-47cc-b829-e9d77a833ebd')
  }

  @Patch()
  async updateTask(
    @Body(new ZodValidationPipe(updateTaskSchema))
    updateTaskDto: UpdateTaskDto
  ) {
    return await this.updateTaskUseCase.execute(updateTaskDto)
  }
}
