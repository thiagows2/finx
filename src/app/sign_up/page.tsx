'use client'

import useAxios from 'axios-hooks'

import { useForm } from 'react-hook-form'

import { ThemeProvider } from '@mui/material/styles'
import { ContainedButton } from '@/components/Button'
import { OutlinedInput } from '@/components/Input'
import { PageContainer, SignUpForm } from './styles'
import { theme } from '@/themes/Patterns'

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [{ loading }, createUser] = useAxios(
    {
      url: `${process.env.API_BASE_URL}/Auth/register`,
      method: 'POST'
    },
    { manual: true }
  )

  async function onSubmit(data: object) {
    const response = await createUser({ data })
    console.log(response)
  }

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <SignUpForm onSubmit={handleSubmit(onSubmit)}>
          <OutlinedInput
            label="Nome"
            error={!!errors.name}
            {...register('name', { required: true })}
          />
          <OutlinedInput
            label="E-mail"
            error={!!errors.email}
            {...register('email', { required: true })}
          />
          <OutlinedInput
            label="Senha"
            error={!!errors.password}
            {...register('password', { required: true })}
          />
          <OutlinedInput
            label="Confirmação de senha"
            error={!!errors.passwordConfirmation}
            {...register('passwordConfirmation', { required: true })}
          />
          <ContainedButton type="submit" loading={loading}>
            Cadastrar
          </ContainedButton>
        </SignUpForm>
      </PageContainer>
    </ThemeProvider>
  )
}
