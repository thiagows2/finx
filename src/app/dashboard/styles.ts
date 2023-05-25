import styled from 'styled-components'

import { colors } from '@/themes/Patterns'

export const PageContainer = styled.div`
  display: flex;
  background: ${colors.SECONDARY_WHITE};
  height: 100vh;
  overflow: hidden;
`

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 48px;
  margin: 32px 48px;
`

export const TitleContainer = styled.div`
  line-height: 0.8;
`

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 700px;
  background: ${colors.PRIMARY_WHITE};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  padding: 28px;
`

export const SummaryItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`

export const ChartsContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`

export const PieChartContainer = styled.div`
  width: 100%;
  height: 272px;
  padding: 30px 20px;
  max-width: 328px;
  background: ${colors.PRIMARY_WHITE};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 18px;
  display: flex;
  position: relative;
`

export const IconContainer = styled.div`
  display: grid;
  place-items: center;
  font-size: 24px;
  width: 44px;
  height: 44px;
  background: ${colors.SECONDARY_GRAY};
  opacity: 0.65;
  border-radius: 12px;
  color: ${({ color }) => color};
`

export const Divider = styled.div`
  border-left: 1px solid ${colors.SECONDARY_GRAY};
  height: 100%;
`
