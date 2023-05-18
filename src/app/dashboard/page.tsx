'use client'

import { Container, SideBar, TitleContainer } from './styles'

export default function Dashboard() {
  return (
    <Container>
      <SideBar />
      <TitleContainer>
        <h1>Dashboard</h1>
        <p>Informações gerais sobre sua saúde financeira</p>
      </TitleContainer>
    </Container>
  )
}
