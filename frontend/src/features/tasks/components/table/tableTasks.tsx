import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  ChipProps,
  Button as NUIButton,
  useDisclosure,
} from '@nextui-org/react'
import { useDeleteTasks } from '../../api/deleteTask'
import { VerticalDotsIcon } from './verticalDotsIcon'
import { TaskModal } from '../modal-task/TaskModal'
import { useListTasks } from '../../api/listTasks'
import { Priority, Task, Member } from '~/types'
import { useMember } from '~/hooks/useMember'
import { Button } from '~/components/Button'
import React, { useState } from 'react'
import dayjs from 'dayjs'

const priorityColorMap: Record<Priority, ChipProps['color']> = {
  Alta: 'danger',
  Media: 'warning',
  Baixa: 'success',
}

type TableTaskProps = {
  tasks: Task[]
}

const COLUMNS = [
  { name: 'name', uid: 'name' },
  { name: 'priority', uid: 'priority' },
  { name: 'finalized', uid: 'finalized' },
  { name: 'actions', uid: 'actions' },
]

function isMember(value: any): value is Member {
  return value && value.kind === 'Member'
}

export default function TableTask({ tasks }: TableTaskProps) {
  const { data: member } = useMember()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [currTask, setCurrTask] = useState<Task | undefined>()
  const { refetch } = useListTasks()
  const { mutate: deleteTask } = useDeleteTasks()

  const handleUpdate = (task: Task) => {
    setCurrTask(task)
    onOpen()
  }

  const handleCreate = () => {
    setCurrTask(undefined)
    onOpen()
  }

  const handleDelete = (id: string) => {
    deleteTask(
      { id },
      {
        onSuccess: () => {
          refetch()
        },
      }
    )
  }

  const renderCell = React.useCallback(
    (task: Task, columnKey: string) => {
      const cellValue = task[columnKey as keyof Task]

      switch (columnKey) {
        case 'name':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-tiny capitalize text-default-400">
                {task.name}
              </p>
            </div>
          )
        case 'priority':
          return (
            <Chip
              className="capitalize"
              color={priorityColorMap[task.priority]}
              size="sm"
              variant="flat"
            >
              {task.priority}
            </Chip>
          )
        case 'finalized':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-md capitalize text-default-400">
                {task.finalized.toString()}
              </p>
            </div>
          )
        case 'actions':
          return (
            <div className="relative flex justify-end items-center gap-2">
              {member?.id === task.memberId && (
                <Dropdown>
                  <DropdownTrigger>
                    <NUIButton isIconOnly size="sm" variant="light">
                      <VerticalDotsIcon className="text-default-300" />
                    </NUIButton>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem>Descricao</DropdownItem>
                    <DropdownItem onClick={() => handleUpdate(task)}>
                      Edit
                    </DropdownItem>
                    <DropdownItem onClick={() => handleDelete(task.id)}>
                      Delete
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              )}
            </div>
          )
        default:
          if (cellValue instanceof Date) {
            return dayjs(cellValue).format('DD/MM/YYYY')
          }
          if (isMember(cellValue)) {
            return JSON.stringify(cellValue)
          }
          return cellValue
      }
    },
    [handleDelete, member?.id]
  )

  return (
    <div className="space-y-4">
      <Button onClick={handleCreate}>Criar task</Button>
      <Table
        aria-label="Example table with custom cells, pagination and sorting"
        isHeaderSticky
        classNames={{
          wrapper: 'max-h-[382px]',
        }}
      >
        <TableHeader columns={COLUMNS}>
          {column => (
            <TableColumn
              key={column.uid}
              align={column.uid === 'actions' ? 'center' : 'start'}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={'No tasks found'} items={tasks}>
          {item => (
            <TableRow key={item.id} className="hover:bg-slate-50">
              {columnKey => (
                <TableCell>{renderCell(item, columnKey as string)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TaskModal task={currTask} isOpen={isOpen} onClose={onClose} />
    </div>
  )
}
