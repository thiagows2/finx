'use client'

import { ThemeProvider } from '@mui/material/styles'

import { Button } from '@mui/material'
import { OutlinedInput } from '@/components/Input'
import { PageContainer, LoginContainer, Image } from './styles'
import { theme } from '@/themes/Patterns'

export default function Login() {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <LoginContainer>
          <OutlinedInput label="E-mail" />
          <OutlinedInput label="Senha" />
          <Button>Entrar</Button>
        </LoginContainer>

        <Image src="/rocket_human.png" alt="login" />
      </PageContainer>
    </ThemeProvider>
  )
}
