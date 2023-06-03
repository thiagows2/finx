'use client'

import useAxios from 'axios-hooks'

import { useRouter } from 'next/navigation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { ThemeProvider } from '@mui/material/styles'
import { formSchema } from '@/app/register/formSchema'
import { ContainedButton } from '@/components/Button'
import { OutlinedInput } from '@/components/Input'
import { PageContainer, RegisterForm } from './styles'
import { theme } from '@/themes/Patterns'

type userData = {
  name?: string
  email?: string
  password?: string
  confirmPwd?: string
}

export default function Register() {
  const { push } = useRouter()
  const formOptions = { resolver: yupResolver(formSchema) }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm(formOptions)

  const [{ loading }, createUser] = useAxios(
    {
      url: `${process.env.API_BASE_URL}/Auth/register`,
      method: 'POST'
    },
    { manual: true }
  )

  async function onSubmit(data: userData) {
    const response = await createUser({
      data: {
        username: data.name,
        email: data.email,
        password: data.password
      }
    })
    if (response.status === 200) {
      setTimeout(() => {
        push('/login')
      }, 2000)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <RegisterForm onSubmit={handleSubmit(onSubmit)}>
          <OutlinedInput
            label="Nome"
            helperText={<>{errors.name && errors.name.message}</>}
            {...register('name')}
          />
          <OutlinedInput
            type="e-mail"
            label="E-mail"
            helperText={<>{errors.email && errors.email.message}</>}
            {...register('email')}
          />
          <OutlinedInput
            type="password"
            label="Senha"
            helperText={<>{errors.password && errors.password.message}</>}
            {...register('password')}
          />
          <OutlinedInput
            type="password"
            label="Confirmação de senha"
            helperText={<>{errors.confirmPwd && errors.confirmPwd.message}</>}
            {...register('confirmPwd')}
          />
          <ContainedButton type="submit" loading={loading}>
            Cadastrar
          </ContainedButton>
        </RegisterForm>
      </PageContainer>
    </ThemeProvider>
  )
}
