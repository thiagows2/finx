'use client'

import { PageContainer, DashboardContainer, TitleContainer } from './styles'

import { SideBar } from '@/components/SideBar'
import { Text } from '@/components/Text'

export default function Dashboard() {
  return (
    <PageContainer>
      <SideBar />
      <DashboardContainer>
        <TitleContainer>
          <Text.Title>Dashboard</Text.Title>
          <Text.Small>Informações gerais sobre sua saúde financeira</Text.Small>
        </TitleContainer>
      </DashboardContainer>
    </PageContainer>
  )
}
