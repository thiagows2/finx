'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import InputAdornment from '@mui/material/InputAdornment'
import {
  OnboardingContainer,
  PageContainer,
  SalaryContainer,
  TableContainer
} from './styles'
import { SideBar } from '@/components/SideBar'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '@/themes/Patterns'
import { Input, InputLabel } from '@mui/material'
import { ContainedButton } from '@/components/Button'
import { EnhancedTable, HeadCell, Data } from '@/components/Table'
import { AddExpenseModal } from '@/components/Modal'

export default function Onboarding() {
  const [showModal, setShowModal] = useState(false)
  const [stage, setStage] = useState(0)
  const { register } = useForm()

  function createData(
    description: string,
    value: number,
    category: string
  ): Data {
    return {
      description,
      value,
      category
    }
  }

  const rows = [
    createData('Aluguel', 700, 'Moradia'),
    createData('Internet', 105, 'Moradia'),
    createData('Luz', 120, 'Moradia'),
    createData('Mercado', 500, 'Alimentação')
  ]

  const headCells: readonly HeadCell[] = [
    {
      id: 'description',
      numeric: false,
      disablePadding: true,
      label: 'Descrição'
    },
    {
      id: 'category',
      numeric: false,
      disablePadding: false,
      label: 'Categoria'
    },
    {
      id: 'value',
      numeric: false,
      disablePadding: false,
      label: 'Valor'
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
          {stage === 1 && (
            <TableContainer>
              <ContainedButton
                style={{ width: '200px', alignSelf: 'flex-end' }}
                onClick={() => setShowModal(true)}
              >
                Nova despesa
              </ContainedButton>
              <EnhancedTable rows={rows} headCells={headCells} />
              <ContainedButton style={{ width: '320px', alignSelf: 'center' }}>
                Confirmar
              </ContainedButton>
            </TableContainer>
          )}
          <AddExpenseModal
            show={showModal}
            onClose={() => setShowModal(false)}
          />
        </OnboardingContainer>
      </PageContainer>
    </ThemeProvider>
  )
}
