import { Task } from "src/modules/task/entities/Task";
import { PrismaService } from "../prisma.service";

import { TaskRepository } from "src/modules/task/repositories/task.repository";
import { TaskMapper } from "../mappers/task.mapper";
import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "src/modules/task/dtos/create-task";
import { Except, SetRequired } from "type-fest";

@Injectable()
export class PrismaTaskRepository extends TaskRepository{
  constructor(private readonly prisma: PrismaService) {
      super();
  }

  async create(task: Task): Promise<Task> {
    const newTask = await this.prisma.task.create({
      data: TaskMapper.toPersistence(task)
    })

    return TaskMapper.toDomain(newTask)
  }

  async findAll(skip?: number, take?: number): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany({
      skip: skip,
      take: take
    })

    return tasks.map(TaskMapper.toDomain)
  }

  async findById(id: string): Promise<Task | null> {
    const task = await this.prisma.task.findUnique({
        where: { id },
      })
  
    if (!task) return null
  
    return TaskMapper.toDomain(task)
  }

  async update(task: SetRequired<Except<Partial<Task>, 'member'>, 'id' | 'memberId'>): Promise<Task> {
    const newTask = await this.prisma.task.update({
        where: { id: task.id },
        data: {...task}
    })
    
    return TaskMapper.toDomain(newTask)
  }

  async delete(id: string): Promise<Task> {
    const task = await this.prisma.task.delete({
        where: { id }
    })

    return TaskMapper.toDomain(task)
  }

  async findAllByMemberId(memberId: string): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany({
      where: { memberId }
    })

    return tasks.map(TaskMapper.toDomain)
  }
}
