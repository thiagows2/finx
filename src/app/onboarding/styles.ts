import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  height: 100vh;
`

export const OnboardingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px;

  @media (max-width: 1300px) {
    padding: 0 20px;
  }
`

export const SalaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 350px;
  width: 100%;
`

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 95%;
  width: 100%;
`
