import styled from 'styled-components'
import { colors } from '@/themes/Patterns'

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  max-height: 330px;
  width: 100%;
  height: 100%;
  background-color: ${colors.PRIMARY_WHITE};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 16px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.75);
  padding: 16px 60px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  width: 100%;
`

export const CloseIcon = styled.div`
  cursor: pointer;
  position: absolute;
  right: 24px;
  top: 24px;
`
