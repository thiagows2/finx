import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 100vh;
  margin: 0 80px;
`

export const LoginContainer = styled.div`
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

export const TitleContainer = styled.div`
  width: fit-content;
  height: 320px;
  margin-right: 10%;
`

export const Image = styled.img`
  margin-top: 10%;
  width: 300px;
`
