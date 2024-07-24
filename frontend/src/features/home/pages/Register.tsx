import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import validator from 'validator'
import { z } from 'zod'

import { useRegisterMember } from '../api/registerMember'
import { PageLayout } from '~/components/PageLayout'
import { useDialog } from '~/components/Dialog'
import { Button } from '~/components/Button'
import { ZodForm } from '~/components/forms'

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(5, { message: 'Nome muito curto' })
    .refine(value => validator.isAlpha(value, 'pt-BR', { ignore: ' ' }), {
      message: 'Nome inválido',
    }),
  email: z
    .string()
    .trim()
    .min(6, { message: 'Email muito curto' })
    .refine(value => validator.isEmail(value), {
      message: 'Email inválido',
    }),
  password: z.string().trim().min(3, { message: 'senha muito curta' }),
})

export const Register = () => {
  const navigate = useNavigate()
  const dialog = useDialog()
  const registerMember = useRegisterMember()

  const handleSubmit = async (data: z.infer<typeof schema>) => {
    try {
      await registerMember.mutateAsync(data)

      dialog.show({
        title: 'Membro registrado com sucesso!',
        subtitle: 'O membro foi registrado com sucesso, basta fazer login!',
        type: 'success',
        firstButton: {
          label: 'Entendi',
          onClick: () => {
            dialog.hide(), navigate('/login')
          },
        },
      })
    } catch (error) {
      toast.error('Erro no registro de membro', {
        theme: 'colored',
      })
    }
  }

  return (
    <PageLayout className="w-full h-full items-center justify-center bg-slate-50">
      <ZodForm onSubmit={handleSubmit} schema={schema}>
        {({ Input }) => {
          return (
            <div className="w-80 space-y-4 p-4 rounded-3xl bg-white drop-shadow-2xl">
              <div className="flex flex-col">
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                  Registrar-se
                </h1>
                <p className="text-xs">
                  Crie sua conta de membro agora e registre suas tasks
                </p>
              </div>
              <Input
                name="name"
                label="Nome completo"
                placeholder="Insira seu nome"
                className="flex"
                maxLength={24}
              />
              <Input
                name="email"
                label="Email"
                placeholder="Insira seu email"
                className="flex"
                maxLength={34}
              />
              <Input
                name="password"
                type="password"
                label="Senha"
                className="flex"
                placeholder="Insira sua senha"
                maxLength={24}
              />
              <Button className="w-full" type="submit">
                Registrar-se
              </Button>
            </div>
          )
        }}
      </ZodForm>
    </PageLayout>
  )
}
