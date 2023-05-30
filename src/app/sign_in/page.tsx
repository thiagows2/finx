'use client'

import { ThemeProvider } from '@mui/material/styles'

import { Button } from '@mui/material'
import { OutlinedInput } from '@/components/Input'
import { PageContainer, LoginContainer, TitleContainer, Image } from './styles'
import { colors, theme } from '@/themes/Patterns'
import { Text } from '@/components/Text'

export default function SignIn() {
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
          <Text.Title
            color={colors.PRIMARY_BLACK}
            fontSize={32}
            fontWeight={600}
          >
            Rumo à <br />
            independência financeira
          </Text.Title>
          <Text.Medium fontSize={16}>
            Ainda não possui uma conta? <br />
            <Text.Link href="/sign_up">Cadastre-se aqui</Text.Link>
          </Text.Medium>
        </TitleContainer>
      </PageContainer>
    </ThemeProvider>
  )
}
