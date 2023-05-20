'use client'

import {
  PageContainer,
  DashboardContainer,
  TitleContainer,
  SummaryContainer,
  SummaryItem,
  GraphContainer,
  Graph,
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
        <GraphContainer>
          <Graph />
          <Graph />
        </GraphContainer>
      </DashboardContainer>
    </PageContainer>
  )
}
