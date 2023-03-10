import styled from 'styled-components';

import { Colors } from '../../styles/colors';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.Purple};
`

const Nav = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  padding: 5px 24px;
  justify-content: space-between;
  align-items: center;
  .icon {
    margin-top: 8px;
    font-size: 22px;
    color: ${Colors.White};
  }
  
  &.first {
    justify-content: end;
  }
  .skip-intro {
    align-self: flex-end;
    padding: 10px 0;
    color: ${Colors.White};
    text-align: right;
  }
`

const Content = styled.div`
  height: 100%;
  display: flex;
  margin-top: 10px;
  align-items: center;
  flex-direction: column;
  img {
    width: 100%;
  }

  .print {
    width: 170px;
    height: 320px;
  }

  &.first {
    position: relative;
    top: 8%;
  }

  &.finish {
    margin-top: 10px;
    position: relative;
  }

  .first-step {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-family: MontserratAlt1Bold !important;
      font-size: 32px;
      font-weight: bold;
      color: ${Colors.White};
    }
  }

  p{
    width: 300px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 13px;
    color: rgba(255,255,255, .7);
    font-weight: 300;
    line-height: 16px;
  }

  .step {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      margin-top: 20px;
      font-size: 28px;
      font-weight: bold;
      color: ${Colors.White};
    }
  }
`

const Steps = styled.ul`
  width: 100%;
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Step = styled.li`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${Colors.White};
  margin-right: 10px;
  &.active {
    background-color: ${Colors.Yellow};
    width: 20px;
    border-radius: 10px;
  }
`

const Next = styled.button`
  margin-top: 30px;
  background-color: ${Colors.Green};
  color: ${Colors.White};
  font-weight: 500;
  width: 200px;
  height: 50px;
  border-radius: 15px;
  border: none;
  text-align: center;
  font-size: 16px;
`


export {
  Container,
  Nav,
  Content,
  Steps,
  Step,
  Next,
}