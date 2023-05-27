import styled from 'styled-components'

import { colors } from '@/themes/Patterns'

export const SideBarContainer = styled.div`
  background: ${colors.PRIMARY_WHITE};
  min-width: 200px;
  padding: 32px 56px;
`

export const SideBarHeader = styled.div`
  margin-bottom: 70px;
  display: flex;
  align-items: center;
  gap: 16px;
`

export const SideBarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0 0 0 8px;
  margin: 0;
  gap: 24px;
`

export const SideBarMenuItem = styled.li`
  margin-bottom: 10px;

  p:hover {
    color: ${colors.VIOLET};
    cursor: pointer;
  }
`

export const Logo = styled.img`
  width: 60px;
  height: 60px;
`
