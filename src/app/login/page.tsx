'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { ThemeProvider } from '@mui/material/styles'

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

export default function Login() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  function onSubmit(data: object) {
    console.log(data)
    router.push('/dashboard')
  }

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
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
          <ContainedButton type="submit">Entrar</ContainedButton>
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
    </ThemeProvider>
  )
}
