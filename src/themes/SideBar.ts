import styled from 'styled-components'

import { colors } from '@/themes/Patterns'

export const SideBarContainer = styled.div`
  background: ${colors.PRIMARY_WHITE};
  min-width: 200px;
  height: 100vh;
  padding: 40px 56px;
`

export const SideBarHeader = styled.div`
  margin-bottom: 70px;
`

export const SideBarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
`

export const SideBarMenuItem = styled.li`
  margin-bottom: 10px;

  p:hover {
    color: ${colors.PURPLE} !important;
    cursor: pointer;
  }
`
