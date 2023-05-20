import styled from 'styled-components'

import { colors } from '@/themes/Patterns'

export const PageContainer = styled.div`
  display: flex;
  background: ${colors.SECONDARY_WHITE};
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 48px;
  margin: 32px;
  @media (min-width: 768px) {
    margin: 32px 48px;
  }
`

export const TitleContainer = styled.div`
  line-height: 0.8;
`

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 650px;
  background: ${colors.PRIMARY_WHITE};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  padding: 28px;
`

export const SummaryItem = styled.div``

export const GraphContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`

export const Graph = styled.div`
  width: 100%;
  max-width: 340px;
  height: 310px;
  background: ${colors.PRIMARY_WHITE};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 18px;
`
