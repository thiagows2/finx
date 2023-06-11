'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputAdornment from '@mui/material/InputAdornment'
import { OnboardingContainer, PageContainer } from './styles'
import { SideBar } from '@/components/SideBar'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '@/themes/Patterns'
import { Input, InputLabel } from '@mui/material'
import { ContainedButton } from '@/components/Button'
import { Flex } from '@/components/FlexBox'

export default function Onboarding() {
  const { register } = useForm()

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <SideBar />
        <OnboardingContainer>
          <Flex flexDirection="column" gap="20px" width="300px">
            <InputLabel htmlFor="monthly_salary">
              Qual é o seu salário mensal?
            </InputLabel>
            <Input
              id="monthly_salary"
              sx={{ marginBottom: '20px' }}
              startAdornment={
                <InputAdornment position="start">R$</InputAdornment>
              }
              {...register('monthly_salary')}
            />
            <ContainedButton type="submit">Continuar</ContainedButton>
          </Flex>
        </OnboardingContainer>
      </PageContainer>
    </ThemeProvider>
  )
}
