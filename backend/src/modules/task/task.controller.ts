import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common'

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
import { CurrentUser } from '../auth/decorators/current-user.decorator'
import { Member } from '../member/entities/Member'

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
    createTaskDto: CreateTaskDto,
    @CurrentUser() currentUser: Member
  ) {
    return await this.registerTaskUseCase.execute(createTaskDto, currentUser.id)
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
  async getTasks(
  @CurrentUser() currentUser: Member
  ){
    return await this.allTasks.execute()
  }

  @Get("/member")
  async memberTasks(
    _memberTasksDto: unknown,
    @CurrentUser() currentUser: Member
  ) {
    return await this.memberTasksUseCase.execute(_memberTasksDto, currentUser)
  }

  @Delete()
  async deleteTask(
    @Body(new ZodValidationPipe(deleteTaskSchema))
    deleteTaskDto: DeleteTaskDto
  ) {
    return await this.deleteTaskUseCase.execute(deleteTaskDto)
  }

}
