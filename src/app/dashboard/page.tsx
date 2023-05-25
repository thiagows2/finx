'use client'

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
import { Flex } from '@/themes/FlexBox'
import { SideBar } from '@/components/SideBar'
import { AiOutlineRise, AiOutlineFall } from 'react-icons/ai'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { MdRocket } from 'react-icons/md'

export default function Dashboard() {
  const chart = {
    data: [
      ['Language', 'Speakers (in millions)'],
      ['Aluguel', 40],
      ['Mercado', 30],
      ['Cartão', 20]
    ],
    options: {
      legend: 'none',
      pieSliceText: 'none',
      pieHole: 0.8,
      slices: {
        0: { offset: 0.02, color: '382A89' },
        1: { offset: 0.04, color: '3D0E62' },
        2: { offset: 0.02, color: '735D97' }
      }
    }
  }

  function formatCurrency(valor: number): string {
    const format = {
      style: 'currency',
      currency: 'BRL'
    }

    return new Intl.NumberFormat('pt-BR', format).format(valor)
  }

  return (
    <PageContainer>
      <SideBar />
      <DashboardContainer>
        <TitleContainer>
          <Text.Title>Dashboard</Text.Title>
          <Text.Small color={colors.GRAY}>
            Informações gerais sobre sua saúde financeira
          </Text.Small>
        </TitleContainer>
        <SummaryContainer>
          <SummaryItem>
            <IconContainer color={colors.BLUE}>
              <HiOutlineDocumentText />
            </IconContainer>
            <Flex flexDirection={'column'}>
              <Text.Small color={colors.GRAY} margin="4px 0">
                Boletos
              </Text.Small>
              <Text.Number>{4}</Text.Number>
            </Flex>
          </SummaryItem>
          <Divider />
          <SummaryItem>
            <IconContainer color={colors.GREEN}>
              <AiOutlineRise />
            </IconContainer>
            <Flex flexDirection={'column'}>
              <Text.Small color={colors.GRAY} margin="4px 0">
                Entradas
              </Text.Small>
              <Text.Number>{formatCurrency(4212)}</Text.Number>
            </Flex>
          </SummaryItem>
          <Divider />
          <SummaryItem>
            <IconContainer color={colors.RED}>
              <AiOutlineFall />
            </IconContainer>
            <Flex flexDirection={'column'}>
              <Text.Small color={colors.GRAY} margin="4px 0">
                Saídas
              </Text.Small>
              <Text.Number>{formatCurrency(3125)}</Text.Number>
            </Flex>
          </SummaryItem>
          <Divider />
          <SummaryItem>
            <IconContainer color={colors.PURPLE}>
              <MdRocket />
            </IconContainer>
            <Flex flexDirection={'column'}>
              <Text.Small color={colors.GRAY} margin="4px 0">
                Saldo
              </Text.Small>
              <Text.Number>{formatCurrency(1087)}</Text.Number>
            </Flex>
          </SummaryItem>
        </SummaryContainer>
        <ChartsContainer>
          <PieChartContainer>
            <Flex flexDirection={'column'}>
              <Text.Medium margin="6px 0" fontWeight={600}>
                Despezas
              </Text.Medium>
              <Text.Small color={colors.GRAY} margin="0">
                Maiores percentuais de gastos mensais
              </Text.Small>
            </Flex>
            <Chart
              width={'240px'}
              height={'240px'}
              chartType="PieChart"
              data={chart.data}
              options={chart.options}
              style={{
                position: 'absolute',
                bottom: 2.5,
                right: 2.5
              }}
            />
          </PieChartContainer>
          <PieChartContainer>
            <Flex flexDirection={'column'}>
              <Text.Medium margin="6px 0" fontWeight={600}>
                Por categoria
              </Text.Medium>
              <Text.Small color={colors.GRAY} margin="0">
                Maiores percentuais de gastos mensais por categoria
              </Text.Small>
            </Flex>
            <Chart
              width={'240px'}
              height={'240px'}
              chartType="PieChart"
              data={chart.data}
              options={chart.options}
              style={{
                position: 'absolute',
                bottom: 2.5,
                right: 2.5
              }}
            />
          </PieChartContainer>
        </ChartsContainer>
      </DashboardContainer>
    </PageContainer>
  )
}
