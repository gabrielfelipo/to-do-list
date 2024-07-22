import { Prisma } from '@prisma/client'
import { Task } from 'src/modules/task/entities/Task'
import { nullsToUndefined } from 'src/utils/nulls-to-undefined'
import { SetOptional } from 'type-fest'
import { MemberMapper } from './member.mapper'

export class TaskMapper {
  static toDomain(
    raw_: SetOptional<
      Prisma.TaskGetPayload<{ include: { member: true } }>,
      'member'
    >
  ): Task {
    const raw = nullsToUndefined(raw_)

    return Task.create({
        name: raw.name,
        description: raw.description || '',
        priority: raw.priority,
        memberId: raw.memberId,
        member: raw.member ? MemberMapper.toDomain(raw.member) : undefined,
        finalized: false
    }, 
    raw.id)
  }

  static toPersistence(task: Task): Prisma.TaskUncheckedCreateInput {
    return {
      id: task.id,
      name: task.name,
      description: task.description,
      priority: task.priority,
      memberId: task.memberId 
    }
  }
}
