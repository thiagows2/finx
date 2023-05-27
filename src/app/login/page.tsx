'use client'

import { ContainedButton } from '@/components/Button'
import { OutlinedInput } from '@/components/Input'
import { PageContainer, LoginContainer, Image } from './styles'

export default function Login() {
  return (
    <PageContainer>
      <LoginContainer>
        <OutlinedInput label="E-mail" />
        <OutlinedInput label="Senha" />
        <ContainedButton>Entrar</ContainedButton>
      </LoginContainer>

      <Image src="/rocket_human.png" alt="login" />
    </PageContainer>
  )
}
