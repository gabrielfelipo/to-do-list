import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'

import { createTaskSchema } from './dtos/create-task'
import { ZodValidationPipe } from 'src/utils/validation-pipe'
import { CreateTaskDto } from './dtos/create-task'
import { RegisterTaskUseCase } from './use-cases/register-task'
import { UpdateTaskDto, updateTaskSchema } from './dtos/update-task'
import { UpdateTaskUseCase } from './use-cases/update-task'
import { GetTaskDto, getTaskSchema } from './dtos/get-task'
import { GetTaskUseCase } from './use-cases/get-task'
import { DeleteTaskDto, deleteTaskSchema } from './dtos/delete-task'
import { MemberTasksUseCase } from './use-cases/member-tasks'
import { FinalizeTaskDto, finalizeTaskSchema } from './dtos/finalize-task'
import { FinalizeTaskUseCase } from './use-cases/finalize-task'
import { DeleteTaskUseCase } from './use-cases/delete-task'
import { AllTasksUseCase } from './use-cases/all-tasks'

@Controller('tasks')
export class TaskController {
  constructor(
    private registerTaskUseCase: RegisterTaskUseCase, 
    private updateTaskUseCase: UpdateTaskUseCase,
    private getTaskUseCase: GetTaskUseCase,
    private memberTasksUseCase: MemberTasksUseCase,
    private deleteTaskUseCase: DeleteTaskUseCase,
    private finalizeTaskUseCase: FinalizeTaskUseCase,
    private allTasks: AllTasksUseCase
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

  @Patch('/finalize')
  async finalizeTask(
    @Body(new ZodValidationPipe(finalizeTaskSchema))
    finalizeTaskDto: FinalizeTaskDto
  ) {
    return await this.finalizeTaskUseCase.execute(finalizeTaskDto)
  }

  @Get()
  async getTask(
    @Body(new ZodValidationPipe(getTaskSchema))
    getTaskDto: GetTaskDto
  ) {
    return await this.getTaskUseCase.execute(getTaskDto)
  }

  @Get("/all")
  async getTasks() {
    return await this.allTasks.execute()
  }

  @Get("/member")
  async memberTasks(
    _memberTasksDto: unknown
  ) {
    return await this.memberTasksUseCase.execute(_memberTasksDto, '5728be95-81cb-47cc-b829-e9d77a833ebd')
  }

  @Delete()
  async deleteTask(
    @Param(new ZodValidationPipe(deleteTaskSchema))
    deleteTaskDto: DeleteTaskDto
  ) {
    return await this.deleteTaskUseCase.execute(deleteTaskDto)
  }

}
