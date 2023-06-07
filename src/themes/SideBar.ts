import styled from 'styled-components'

import { colors } from '@/themes/Patterns'

export const SideBarContainer = styled.div`
  background: ${colors.PRIMARY_WHITE};
  min-width: 200px;
  padding: 32px 30px 32px 80px;

  @media (max-width: 768px) {
    display: none;
  }
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

export const SideBarMenuItem = styled.li<{
  disabled?: boolean
  selected?: boolean
}>`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  ${({ disabled }) =>
    disabled &&
    `
    cursor: not-allowed;
  `}

  ${({ disabled, selected }) =>
    !disabled &&
    !selected &&
    `
    &:hover {
      cursor: pointer;

      p {
        color: ${colors.VIOLET};
        font-weight: 600;
      }
      
      svg {
        color: ${colors.VIOLET} !important;
      }
    }
  `}
  
  ${({ selected }) =>
    selected &&
    `
     div {
      position: absolute;
      width: 130px;
      height: 52px;
      background-color: blueviolet;
      border-radius: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 50px;
      opacity: 0.06;
      margin: 0 0 0 -40px;
    }
    
    p {
      color: ${colors.VIOLET};
      font-weight: 600;
    }
  `}
`

export const Logo = styled.img`
  width: 60px;
  height: 60px;
`

export const Divider = styled.hr`
  width: 180px;
  border: 0.8px solid #ececee;
  margin: 0 0 0 -40px;
`
