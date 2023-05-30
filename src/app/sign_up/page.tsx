'use client'

import { ThemeProvider } from '@mui/material/styles'

import { Button } from '@mui/material'
import { OutlinedInput } from '@/components/Input'
import { PageContainer, SignUpContainer } from './styles'
import { theme } from '@/themes/Patterns'

export default function SignIn() {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <SignUpContainer>
          <OutlinedInput label="Nome" />
          <OutlinedInput label="E-mail" />
          <OutlinedInput label="Senha" />
          <OutlinedInput label="Confirmação de senha" />
          <Button>Cadastrar</Button>
        </SignUpContainer>
      </PageContainer>
    </ThemeProvider>
  )
}
