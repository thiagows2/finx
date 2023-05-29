'use client'

import { ThemeProvider } from '@mui/material/styles'

import { Button } from '@mui/material'
import { OutlinedInput } from '@/components/Input'
import { PageContainer, LoginContainer, TitleContainer, Image } from './styles'
import { colors, theme } from '@/themes/Patterns'
import { Text } from '@/components/Text'

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
        <TitleContainer>
          <Text.Title color={colors.PRIMARY_BLACK}>
            Rumo à <br />
            independência financeira
          </Text.Title>
          <Text.Medium>
            Ainda não possui uma conta? <br />
            Se <a href="#">Cadastre aqui</a>
          </Text.Medium>
        </TitleContainer>
      </PageContainer>
    </ThemeProvider>
  )
}
