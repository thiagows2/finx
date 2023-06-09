import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 100vh;
  margin: 0 80px;
  overflow: hidden;
  gap: 32px;

  @media (max-width: 1400px) {
    margin: 0 60px;
  }

  @media (max-width: 768px) {
    justify-content: start;
    margin: 0 24px;
  }
`

export const LoginForm = styled.form`
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
    padding: 40px;
  }
`

export const TitleContainer = styled.div`
  width: fit-content;
  height: 320px;
`

export const Image = styled.img`
  margin-top: 12%;
  width: 280px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Doodle = styled.img`
  position: absolute;
  margin: 100px 0 0 -10px;
  width: 308px;
  transform: rotate(3deg);

  @media (max-width: 768px) {
    display: none;
  }
`
