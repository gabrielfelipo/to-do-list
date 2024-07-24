import { Entity } from 'src/common/entities/entity'

type MemberProps = {
  name: string
  email: string
  password: string
}

export class MemberEntity {
  id?: string
  name: string
  email: string
  password: string
}

export class Member extends Entity<MemberProps> {
  declare props: MemberProps

  get name(): string {
    return this.props.name
  }

  get email(): string {
    return this.props.email
  }

  get password(): string {
    return this.props.password
  }

  // get tasks(): Task[] | [] {
  //   return this.props.tasks
  // }

  get _serialized() {
    const serializedTasks = []
    // for (var task of this.tasks) serializedTasks.push(task._serialized)
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      // tasks: serializedTasks,
    }
  }

  static create(props: MemberProps, id?: string) {
    const member = new Member(props, id)

    return member
  }
}
