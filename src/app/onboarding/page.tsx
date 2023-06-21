'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import uniqid from 'uniqid'

import InputAdornment from '@mui/material/InputAdornment'
import {
  OnboardingContainer,
  PageContainer,
  TableContainer,
  SalaryContainer
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
import { showError, showSuccess } from '@/components/Toast'

export default function Onboarding() {
  configure({ axios: api })

  const router = useRouter()
  const { watch, register } = useForm()
  const [loading, setLoading] = useState(false)
  const [loadingDelete, setLoadingDelete] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [currentStage, setStage] = useState(0)

  const [{ data: stageData = {}, loading: loadingStage }, getStage] = useAxios({
    url: '/Onboarding/onboarding-state'
  })
  const [, updateSalary] = useAxios(
    {
      url: '/Balance',
      method: 'PUT'
    },
    { manual: true }
  )
  const [{ loading: loadingUpdate }, updateStage] = useAxios(
    {
      url: `/Onboarding/update-onboarding/${currentStage + 1}`,
      method: 'PUT'
    },
    { manual: true }
  )
  const [, finishOnboarding] = useAxios(
    {
      url: 'Onboarding/finish-onboarding',
      method: 'PUT'
    },
    { manual: true }
  )
  const [{ data: expenseTypes = [] }] = useAxios('/Expense/expense-types')
  const [{ data: expenses }, getExpenses] = useAxios('/Expense/expenses')
  const [, updateExpenses] = useAxios(
    {
      url: '/Expense/expenses',
      method: 'PUT'
    },
    { manual: true }
  )

  function createData(description: string, cost: number, type: number): Data {
    return {
      id: '',
      description,
      cost,
      type
    }
  }

  const initialRows = useMemo(
    () => [
      createData('Aluguel', 700, 3),
      createData('Internet', 105, 2),
      createData('Luz', 120, 2),
      createData('Mercado', 500, 5)
    ],
    []
  )

  const bodyRows = useMemo(() => {
    const data = expenses ?? initialRows

    return data.map((expense: Data) => {
      expense.id = uniqid(`${expense.description}-`)
      return expense
    })
  }, [expenses, initialRows])

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

  useEffect(() => {
    const { onboarding } = stageData

    if (onboarding) {
      setStage(onboarding)
    } else if (onboarding === null) {
      router.push('/dashboard')
    }
  }, [router, stageData])

  const onAddExpense = useCallback(
    async (data: Data) => {
      const newExpenses = [...bodyRows, data]
      await updateExpenses({ data: newExpenses })
      await getExpenses()
    },
    [getExpenses, bodyRows, updateExpenses]
  )

  async function onConfirmSalary() {
    const salary = watch('monthly_salary')
    if (!salary) return showError('Salário é obrigatório')

    await updateSalary({ data: { salary } })
    await updateStage({ data: { onboarding: 2 } })
    await getStage()
  }

  async function onFinish() {
    setLoading(true)

    await updateExpenses({ data: bodyRows })
    await finishOnboarding()
    await router.push('/dashboard')
  }

  const onDelete = useCallback(
    async (selectedIds: string[]) => {
      setLoadingDelete(true)
      const newExpenses = bodyRows.filter(
        (row: any) => !selectedIds.includes(row.id)
      )
      await updateExpenses({ data: newExpenses })
      await getExpenses()
      setLoadingDelete(false)
      showSuccess('Despesa(s) excluída(s) com sucesso!')
    },
    [bodyRows, getExpenses, updateExpenses]
  )

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <SideBar />
        <OnboardingContainer>
          {(loadingDelete || loadingStage) && !loadingUpdate ? (
            <SpinnerContainer>
              <CircularProgress />
            </SpinnerContainer>
          ) : (
            <>
              {currentStage === 1 && (
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
                    {...register('monthly_salary', { valueAsNumber: true })}
                  />
                  <ContainedButton
                    loading={loadingUpdate}
                    onClick={() => onConfirmSalary()}
                    onKeyPress={() => onConfirmSalary()}
                  >
                    Continuar
                  </ContainedButton>
                </SalaryContainer>
              )}
              {currentStage === 2 && (
                <TableContainer>
                  <ContainedButton
                    style={{ width: '160px', alignSelf: 'flex-end' }}
                    onClick={() => setShowModal(true)}
                  >
                    Nova despesa
                  </ContainedButton>
                  <EnhancedTable
                    rows={bodyRows}
                    headCells={headCells}
                    categories={expenseTypes}
                    onDelete={onDelete}
                  />
                  <ContainedButton
                    style={{ width: '320px', alignSelf: 'center' }}
                    onClick={() => onFinish()}
                    onKeyPress={() => onFinish()}
                    loading={loading}
                  >
                    Confirmar
                  </ContainedButton>
                </TableContainer>
              )}
            </>
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
