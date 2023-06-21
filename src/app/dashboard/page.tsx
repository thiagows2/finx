'use client'

import useAxios, { configure } from 'axios-hooks'
import { Chart } from 'react-google-charts'
import {
  PageContainer,
  DashboardContainer,
  TitleContainer,
  SummaryContainer,
  SummaryItem,
  ChartsContainer,
  PieChartContainer,
  IconContainer,
  Divider
} from './styles'

import { Text } from '@/components/Text'
import { colors } from '@/themes/Patterns'
import { Flex } from '@/components/FlexBox'
import { SideBar } from '@/components/SideBar'
import { AiOutlineRise, AiOutlineFall } from 'react-icons/ai'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { MdRocket } from 'react-icons/md'
import { api } from '@/services/api'
import { SpinnerContainer } from '@/themes/Spinner'
import { CircularProgress } from '@mui/material'
import { useMemo } from 'react'
import { formatCurrency } from '@/helpers/formatCurrency'

type Expense = {
  type: number
  description: string
  percentage: number
}

type Category = {
  type: number
  percentage: number
}

export default function Dashboard() {
  configure({ axios: api })

  const [{ data: expenseTypes = [] }] = useAxios('/Expense/expense-types')
  const [{ data: balance = {}, loading }] = useAxios('/Balance')
  const {
    salary,
    expensesTotal,
    remaining,
    expensesMonthly = [],
    expensesByType = []
  } = balance

  const billsCount = useMemo(() => {
    return expensesMonthly.reduce((acc: number, expense: Expense) => {
      const expenseType = expenseTypes[expense.type]
      if (expenseType !== 'Boleto') return acc

      return acc + 1
    }, 0)
  }, [expenseTypes, expensesMonthly])

  const expenseData = useMemo(() => {
    return expensesMonthly.map((expense: Expense, index: number) => {
      if (index === 0) {
        return ['Despezas', 'Porcentagem']
      }

      return [expense.description, expense.percentage]
    })
  }, [expensesMonthly])

  const categoryData = useMemo(() => {
    return expensesByType.map((expense: Category, index: number) => {
      if (index === 0) {
        return ['Categoria das despezas', 'Porcentagem']
      }

      return [expenseTypes[expense.type], expense.percentage]
    })
  }, [expenseTypes, expensesByType])

  const baseOptions = {
    legend: 'none',
    pieSliceText: 'none',
    pieHole: 0.75
  }
  const expenseChart = {
    data: expenseData,
    options: {
      ...baseOptions,
      slices: {
        0: { color: '382A89' },
        1: { color: '3D0E62' },
        2: { color: '735D97' },
        3: { color: 'A66BBE' },
        4: { color: 'C89EC4' },
        5: { color: 'E7C8D9' },
        6: { color: 'F6E4EC' }
      }
    }
  }
  const categoryChart = {
    data: categoryData,
    options: {
      ...baseOptions,
      slices: {
        0: { color: '03206B' },
        1: { color: '1F43A0' },
        2: { color: '3D6AF2' },
        3: { color: '6D9BF0' },
        4: { color: 'A6C1F0' },
        5: { color: 'D9E4F6' },
        6: { color: 'EAF0F9' }
      }
    }
  }

  return (
    <PageContainer>
      <SideBar />
      <DashboardContainer>
        <TitleContainer>
          <Text.Title>Dashboard</Text.Title>
          <Text.Small>Informações gerais sobre sua saúde financeira</Text.Small>
        </TitleContainer>
        {loading ? (
          <SpinnerContainer>
            <CircularProgress />
          </SpinnerContainer>
        ) : (
          <>
            <SummaryContainer>
              <SummaryItem>
                <IconContainer color={colors.PRIMARY_BLUE}>
                  <HiOutlineDocumentText />
                </IconContainer>
                <Flex flexDirection={'column'}>
                  <Text.Small margin="4px 0">Boletos</Text.Small>
                  <Text.Number>{billsCount}</Text.Number>
                </Flex>
              </SummaryItem>
              <Divider />
              <SummaryItem>
                <IconContainer color={colors.SUCCESS_GREEN}>
                  <AiOutlineRise />
                </IconContainer>
                <Flex flexDirection={'column'}>
                  <Text.Small margin="4px 0">Entradas</Text.Small>
                  <Text.Number>{formatCurrency(salary)}</Text.Number>
                </Flex>
              </SummaryItem>
              <Divider />
              <SummaryItem>
                <IconContainer color={colors.ERROR_RED}>
                  <AiOutlineFall />
                </IconContainer>
                <Flex flexDirection={'column'}>
                  <Text.Small margin="4px 0">Saídas</Text.Small>
                  <Text.Number>{formatCurrency(expensesTotal)}</Text.Number>
                </Flex>
              </SummaryItem>
              <Divider />
              <SummaryItem>
                <IconContainer color={colors.VIOLET}>
                  <MdRocket />
                </IconContainer>
                <Flex flexDirection={'column'}>
                  <Text.Small margin="4px 0">Saldo</Text.Small>
                  <Text.Number>{formatCurrency(remaining)}</Text.Number>
                </Flex>
              </SummaryItem>
            </SummaryContainer>
            <ChartsContainer>
              <PieChartContainer>
                <Flex flexDirection={'column'}>
                  <Text.Medium
                    margin="6px 0"
                    fontWeight={600}
                    color={colors.PRIMARY_BLACK}
                  >
                    Despezas
                  </Text.Medium>
                  <Text.Small margin="0">
                    Destacando os maiores percentuais
                  </Text.Small>
                </Flex>
                <Chart
                  width={'240px'}
                  height={'240px'}
                  chartType="PieChart"
                  data={expenseChart.data}
                  options={expenseChart.options}
                  style={{
                    position: 'absolute',
                    bottom: 2.5,
                    right: 2.5
                  }}
                />
              </PieChartContainer>
              <PieChartContainer>
                <Flex flexDirection={'column'}>
                  <Text.Medium
                    margin="6px 0"
                    fontWeight={600}
                    color={colors.PRIMARY_BLACK}
                  >
                    Por categoria
                  </Text.Medium>
                  <Text.Small margin="0">
                    Destacando os maiores percentuais de categoria de gastos
                  </Text.Small>
                </Flex>
                <Chart
                  width={'240px'}
                  height={'240px'}
                  chartType="PieChart"
                  data={categoryChart.data}
                  options={categoryChart.options}
                  style={{
                    position: 'absolute',
                    bottom: 2.5,
                    right: 2.5
                  }}
                />
              </PieChartContainer>
            </ChartsContainer>
          </>
        )}
      </DashboardContainer>
    </PageContainer>
  )
}
