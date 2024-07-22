import { Priority } from '@prisma/client';
import { Entity } from 'src/common/entities/entity';
import { Member } from 'src/modules/member/entities/Member';

type TaskProps = {
  name: string;
  description?: string;
  priority: Priority;
  finalized: boolean;
  endDate?: Date;
  memberId: string;
  member?: Member; 
}

export class Task extends Entity<TaskProps> {
  declare props: TaskProps;

  get name(): string {
    return this.props.name;
  }

  get description(): string | undefined {
    return this.props.description;
  }

  get priority(): Priority {
    return this.props.priority;
  }

  get finalized(): boolean {
    return this.props.finalized;
  }

  get endDate(): Date | undefined {
    return this.props.endDate;
  }

  get memberId(): string {
    return this.props.memberId;
  }

  get member(): Member | undefined {
    return this.props.member;
  }

  get _serialized() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      priority: this.priority,
      finalized: this.finalized,
      endDate: this.endDate,
      memberId: this.memberId,
      member: this.member ? this.member._serialized : undefined,
    };
  }

  static create(props: TaskProps, id?: string) {
    const task = new Task(props, id);

    return task;
  }
}
