import validator from 'validator'
import { z } from 'zod'

import { useZodForm, ZodForm } from '~/components/forms'
import { PageLayout } from '~/components/PageLayout'
import { SmoothDiv } from '~/components/SmoothDiv'
import { Button } from '~/components/Button'
import { useLogin } from '../api/login'

const schema = z.object({
  email: z
    .string()
    .trim()
    .min(6, { message: 'Email muito curto' })
    .refine(value => validator.isEmail(value), {
      message: 'Email inválido',
    }),
  password: z.string().trim().min(3, { message: 'senha muito curta' }),
})

export const Login = () => {
  const form = useZodForm({
    schema,
  })
  const login = useLogin()

  const handleSubmit = async (data: z.infer<typeof schema>) => {
    try {
      await login.mutateAsync(data)
    } catch (e) {
      form.setError('root', { message: 'Email ou senha inválidos' })
    }
  }

  return (
    <PageLayout className="w-full h-full items-center justify-center bg-slate-50">
      <ZodForm onSubmit={handleSubmit} form={form}>
        {({ form, Input }) => {
          return (
            <div className="w-80 space-y-4 p-4 rounded-3xl bg-white drop-shadow-2xl">
              <div className="flex flex-col">
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                  Login
                </h1>
              </div>
              <SmoothDiv className="text-center text-lg text-danger">
                {form.formState.errors?.root?.message ?? 'ㅤ'}
              </SmoothDiv>
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
                Login
              </Button>
            </div>
          )
        }}
      </ZodForm>
    </PageLayout>
  )
}
