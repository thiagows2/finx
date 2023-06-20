'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
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
import { CircularProgress, Input, InputLabel } from '@mui/material'
import { ContainedButton } from '@/components/Button'
import { EnhancedTable, HeadCell, Data } from '@/components/Table'
import { AddExpenseModal } from '@/components/Modal'
import useAxios, { configure } from 'axios-hooks'
import { api } from '@/services/api'
import { SpinnerContainer } from '@/themes/Spinner'
import { useRouter } from 'next/navigation'

export default function Onboarding() {
  configure({ axios: api })

  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [stage, setStage] = useState<number | null>(null)
  const { register } = useForm()

  const [{ loading: loadingStage }, getStage] = useAxios(
    {
      url: '/Onboarding/onboarding-state'
    },
    { manual: true }
  )
  const [, updateStage] = useAxios(
    {
      url: `/Onboarding/update-onboarding/${stage}`,
      method: 'PUT'
    },
    { manual: true }
  )
  const [{ data: expenseTypes = [] }] = useAxios({
    url: '/Expense/expense-types'
  })
  const [{ data: expenses }, getExpenses] = useAxios({
    url: '/Expense/expenses'
  })
  const [, updateExpenses] = useAxios(
    {
      url: '/Expense/expenses',
      method: 'PUT'
    },
    { manual: true }
  )

  function createData(description: string, cost: number, type: number): Data {
    return {
      description,
      cost,
      type
    }
  }

  const initialRows = useMemo(
    () => [
      createData('Aluguel', 700, 0),
      createData('Internet', 105, 0),
      createData('Luz', 120, 0),
      createData('Mercado', 500, 0)
    ],
    []
  )

  const bodyRows = useMemo(
    () => expenses ?? initialRows,
    [expenses, initialRows]
  )

  const headCells: readonly HeadCell[] = [
    {
      id: 'description',
      numeric: false,
      disablePadding: true,
      label: 'Descrição'
    },
    {
      id: 'type',
      numeric: false,
      disablePadding: false,
      label: 'Categoria'
    },
    {
      id: 'cost',
      numeric: false,
      disablePadding: false,
      label: 'Valor'
    }
  ]

  async function handleSetStage() {
    const response = await getStage()
    const { onboarding } = response.data

    if (onboarding) {
      setStage(onboarding)
    } else {
      router.push('/dashboard')
    }
  }

  useEffect(() => {
    if (stage === null) {
      handleSetStage()
    } else {
      updateStage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, updateStage])

  const onAddExpense = useCallback(
    async (data: Data) => {
      const newExpenses = [...bodyRows, data]
      await updateExpenses({ data: newExpenses })
      await getExpenses()
    },
    [getExpenses, bodyRows, updateExpenses]
  )

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <SideBar />
        <OnboardingContainer>
          {loadingStage && (
            <SpinnerContainer>
              <CircularProgress />
            </SpinnerContainer>
          )}
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
              <EnhancedTable
                rows={bodyRows}
                headCells={headCells}
                categories={expenseTypes}
              />
              <ContainedButton style={{ width: '320px', alignSelf: 'center' }}>
                Confirmar
              </ContainedButton>
            </TableContainer>
          )}
          <AddExpenseModal
            show={showModal}
            setShow={setShowModal}
            categories={Object.values(expenseTypes)}
            onAdd={onAddExpense}
          />
        </OnboardingContainer>
      </PageContainer>
    </ThemeProvider>
  )
}
