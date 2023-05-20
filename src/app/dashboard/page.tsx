'use client'

import {
  PageContainer,
  DashboardContainer,
  TitleContainer,
  SummaryContainer,
  SummaryItem,
  GraphContainer,
  Graph
} from './styles'

import { SideBar } from '@/components/SideBar'
import { Text } from '@/components/Text'
import { colors } from '@/themes/Patterns'

export default function Dashboard() {
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
            <Text.Small color={colors.GRAY}>Boletos</Text.Small>
          </SummaryItem>
          <SummaryItem>
            <Text.Small color={colors.GRAY}>Entradas</Text.Small>
          </SummaryItem>
          <SummaryItem>
            <Text.Small color={colors.GRAY}>Saídas</Text.Small>
          </SummaryItem>
          <SummaryItem>
            <Text.Small color={colors.GRAY}>Saldo</Text.Small>
          </SummaryItem>
        </SummaryContainer>
        <GraphContainer>
          <Graph />
          <Graph />
        </GraphContainer>
      </DashboardContainer>
    </PageContainer>
  )
}
