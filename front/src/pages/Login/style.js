import styled from 'styled-components';

import { Colors } from '../../styles/colors';
 
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${Colors.Purple};
`;

const Header = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.h1`
  color: ${Colors.White};
  position: absolute;
  top: 20px;
  right: 30px;
  font-family: 'Montserratalt1' !important;
  font-size: 18px;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    width: 200px;
  }
`

const Content = styled.div`
  height: 70vh;
  padding: 60px 40px;
  h1 {
    text-align: center;
    color: ${Colors.White};
    position: relative;
    font-size: 42px;
    font-weight: 700;
  }
  &::before {
    content: '';
    height: 70vh;
    width: 200vw;
    border-radius: 50% 50% 0 0;
    top: 0;
    left: -50%;
    right: 0;
    position: absolute;
    background-color: ${Colors.BackgroundColorPrimary};
  }
  position: relative;
`;

const LoginForm = styled.form`
  margin-top: 50px;
  position: relative;
  .input {
    margin-top: 30px;
  }
`

const Button = styled.button`
  background-color: ${Colors.White};
  color: ${Colors.Purple};
  width: 100%;
  padding: 15px;
  border-radius: 15px;
  font-size: 16px;
  margin-top: 30px;
`

const SignupItem = styled.p`
  text-align: center;
  color: ${Colors.White};
  position: relative;
  margin-top: 50px;
  a {
    text-decoration: none;
    font-weight: bold;
    color: ${Colors.Yellow}
  }
`

export {
  Container,
  Header,
  Logo,
  HeaderContent,
  Content,
  LoginForm,
  Button,
  SignupItem,
}