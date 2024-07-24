import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from '~/components/Modal'
import { useCreateTask } from '../../api/createTask'
import { Button } from '~/components/Button'
import { ZodForm } from '~/components/forms'
import { toast } from 'react-toastify'
import validator from 'validator'
import { Task } from '~/types'
import { z } from 'zod'
import { useListTasks } from '../../api/listTasks'
import { useUpdateTask } from '../../api/updateTask'
import { useFinalizeTask } from '../../api/finalizeTask'

type TaskModalProps = {
  task?: Task
  isOpen: boolean
  onClose: () => void
}

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(5, { message: 'Nome muito curto' })
    .refine(value => validator.isAlpha(value, 'pt-BR', { ignore: ' ' }), {
      message: 'Nome inválido',
    }),
  description: z.string().optional(),
  priority: z.string().trim(),
  finalized: z.string().optional(),
})

export const TaskModal = ({ task, onClose, isOpen }: TaskModalProps) => {
  const { refetch } = useListTasks()
  const createTask = useCreateTask()
  const updateTask = useUpdateTask()
  const finalizeTask = useFinalizeTask()

  const handleSubmit = async (data: z.infer<typeof schema>) => {
    const { name, description, priority, finalized } = data
    try {
      if (task) {
        const updateData = {
            id: task.id,
            name,
            description,
            priority,
            finalized: Boolean(finalized),
          }

        await updateTask.mutateAsync(updateData)

        if (task.finalized == false && finalized == '1'){
            await finalizeTask.mutateAsync({id: task.id, finalized: true})
        }
        if (task.finalized == true && finalized == '0'){
            await finalizeTask.mutateAsync({id: task.id, finalized: false})
        }

      } else {
        const createData = {
          name,
          description,
          priority,
        }
        await createTask.mutateAsync(createData)
      }
      onClose()
      refetch()
    } catch (error) {
      toast.error('Houve um erro', {
        theme: 'colored',
      })
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>{task ? 'Atualizar' : 'Nova'} Task</ModalHeader>
        <ModalBody>
          <ZodForm onSubmit={handleSubmit} schema={schema} defaultValues={task}>
            {({ Input, Select, TextInput }) => {
              return (
                <div className="w-80 space-y-4 p-4 rounded-3xl bg-white drop-shadow-2xl">
                  <Input
                    name="name"
                    label="Nome da task"
                    placeholder="Insira o nome"
                    className="flex"
                    maxLength={24}
                  />
                  <TextInput
                    name="description"
                    label="Descrição da task"
                    placeholder="Preencha uma descrição"
                    className="flex"
                  />
                  <Select
                    name="priority"
                    label="Prioridade"
                    className="flex"
                    placeholder="Selecione a prioridade"
                    options={[
                      { label: 'Baixa', value: 'Baixa' },
                      { label: 'Media', value: 'Media' },
                      { label: 'Alta', value: 'Alta' },
                    ]}
                  />
                  {task && (
                    <Select
                      name="finalized"
                      label="Status"
                      className="flex"
                      placeholder="Selecione o status"
                      options={[
                        { label: 'Finalizada', value: 1 },
                        { label: 'Não finalizada', value: 0 },
                      ]}
                    />
                  )}

                  <Button className="w-full" type="submit">
                    {task ? 'Atualizar ' : 'Registrar '}
                  </Button>
                </div>
              )
            }}
          </ZodForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
