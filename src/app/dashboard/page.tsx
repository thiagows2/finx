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

import { SideBar } from '@/components/SideBar'
import { Text } from '@/components/Text'
import { colors } from '@/themes/Patterns'
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
            <Text.Small color={colors.GRAY} margin="4px 0">
              Boletos
            </Text.Small>
          </SummaryItem>
          <Divider />
          <SummaryItem>
            <IconContainer color={colors.GREEN}>
              <AiOutlineRise />
            </IconContainer>
            <Text.Small color={colors.GRAY} margin="4px 0">
              Entradas
            </Text.Small>
          </SummaryItem>
          <Divider />
          <SummaryItem>
            <IconContainer color={colors.RED}>
              <AiOutlineFall />
            </IconContainer>
            <Text.Small color={colors.GRAY} margin="4px 0">
              Saídas
            </Text.Small>
          </SummaryItem>
          <Divider />
          <SummaryItem>
            <IconContainer color={colors.PURPLE}>
              <MdRocket />
            </IconContainer>
            <Text.Small color={colors.GRAY} margin="4px 0">
              Saldo
            </Text.Small>
          </SummaryItem>
        </SummaryContainer>
        <ChartsContainer>
          <PieChartContainer>
            <Chart
              width={'220px'}
              height={'220px'}
              chartType="PieChart"
              data={chart.data}
              options={chart.options}
            />
          </PieChartContainer>
          <PieChartContainer>
            <Chart
              width={'220px'}
              height={'220px'}
              chartType="PieChart"
              data={chart.data}
              options={chart.options}
            />
          </PieChartContainer>
        </ChartsContainer>
      </DashboardContainer>
    </PageContainer>
  )
}
