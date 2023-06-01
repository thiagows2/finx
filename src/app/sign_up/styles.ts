import styled from 'styled-components'

export const PageContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  padding: 60px;
  align-self: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  margin: 6% 0;

  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`
