'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputAdornment from '@mui/material/InputAdornment'
import { OnboardingContainer, PageContainer, SalaryContainer } from './styles'
import { SideBar } from '@/components/SideBar'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '@/themes/Patterns'
import { Input, InputLabel } from '@mui/material'
import { ContainedButton } from '@/components/Button'
import { EnhancedTable, HeadCell, Data } from '@/components/Table'

export default function Onboarding() {
  const [stage, setStage] = useState(0)
  const { register } = useForm()

  function createData(
    description: string,
    value: number,
    category: string,
    note: string = ''
  ): Data {
    return {
      description,
      value,
      category,
      note
    }
  }

  const rows = [
    createData('Aluguel', 700, 'Moradia', 'Aluguel do apartamento'),
    createData('Internet', 105, 'Moradia'),
    createData('Luz', 120, 'Moradia')
  ]

  const headCells: readonly HeadCell[] = [
    {
      id: 'description',
      numeric: false,
      disablePadding: true,
      label: 'Descrição'
    },
    {
      id: 'value',
      numeric: true,
      disablePadding: false,
      label: 'Valor'
    },
    {
      id: 'category',
      numeric: false,
      disablePadding: false,
      label: 'Categoria'
    },
    {
      id: 'note',
      numeric: false,
      disablePadding: false,
      label: 'Comentários'
    }
  ]

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <SideBar />
        <OnboardingContainer>
          {stage === 0 && (
            <SalaryContainer>
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
              <ContainedButton onClick={() => setStage(1)}>
                Continuar
              </ContainedButton>
            </SalaryContainer>
          )}
          {stage === 1 && <EnhancedTable rows={rows} headCells={headCells} />}
        </OnboardingContainer>
      </PageContainer>
    </ThemeProvider>
  )
}
