'use client'

import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ThemeProvider } from '@mui/material/styles'
import { showError } from '@/components/Toast'

import { ToastContainer } from 'react-toastify'
import { ContainedButton } from '@/components/Button'
import { OutlinedInput } from '@/components/Input'
import {
  PageContainer,
  LoginForm,
  TitleContainer,
  Image,
  Doodle
} from './styles'
import { colors, theme } from '@/themes/Patterns'
import { Text } from '@/components/Text'
import { AuthContext } from '@/contexts/AuthContext'

type SignInData = {
  email: string
  password: string
}

export default function Login() {
  const { signIn } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  async function onSubmit(data: object) {
    try {
      setLoading(true)
      await signIn(data as SignInData)
    } catch (error: any) {
      showError(error.response.data)
      setLoading(false)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <OutlinedInput
            label="E-mail"
            type="email"
            autoComplete="on"
            helperText={<>{errors.email && 'Informe um e-mail'}</>}
            {...register('email', { required: true })}
          />
          <OutlinedInput
            label="Senha"
            type="password"
            autoComplete="on"
            helperText={<>{errors.password && 'Informe uma senha'}</>}
            {...register('password', { required: true })}
          />
          <ContainedButton type="submit" loading={loading}>
            Entrar
          </ContainedButton>
        </LoginForm>

        <Image src="/rocket_human.png" alt="login" />
        <TitleContainer>
          <Doodle src="/doodle.png" />
          <Text.Title
            color={colors.PRIMARY_BLACK}
            fontSize={32}
            fontWeight={600}
            style={{ marginBottom: 40 }}
          >
            Rumo à <br />
            independência financeira
          </Text.Title>
          <Text.Medium fontSize={16}>
            Ainda não possui uma conta? <br />
            <Text.Link href="/register">Cadastre-se aqui</Text.Link>
          </Text.Medium>
        </TitleContainer>
      </PageContainer>
      <ToastContainer />
    </ThemeProvider>
  )
}
