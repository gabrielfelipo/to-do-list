import { Injectable } from '@nestjs/common';

import { Task } from '../entities/Task';
import { Except, SetRequired } from 'type-fest';


@Injectable()
export abstract class TaskRepository {
  abstract create(data: Task): Promise<Task> 

  abstract findAll(skip?: number, take?: number): Promise<Task[]>

  abstract findById(id: string): Promise<Task | null>

  abstract findAllByMemberId(memberId: string): Promise<Task[]>

  abstract update(task: SetRequired<Except<Partial<Task>, 'member'>, 'id'>): Promise<Task>

  abstract delete(id: string): Promise<Task>
}
