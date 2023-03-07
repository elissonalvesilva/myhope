import styled from 'styled-components';

import { Colors } from '../../styles/colors';
 
const Container = styled.div`
  width: 100vw;
  height: 100%;
  overflow: hidden;
  background-color: ${Colors.BackgroundColorPrimary};
`;

const Header = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const Logo = styled.h1`
  color: ${Colors.White};
  font-family: MontserratAlt1Bold !important;
  font-size: 32px;

  overflow: hidden;
  border-right: .15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation: typewriter 1s steps(44) 1s 1 normal both, blinkTextCursor 500ms steps(44) infinite normal;
  overflow: hidden;

  @keyframes typewriter{
    from{width: 0;}
    to{width: 45%;}
  }
  @keyframes blinkTextCursor{
    from{border-right-color: rgba(255,255,255,.75);}
    to{border-right-color: transparent;}
  }
`

const Content = styled.div`
  height: 100vh;
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
    height: 100vh;
    width: 200vw;
    border-radius: 50% 50% 0 0;
    top: 0;
    left: -50%;
    right: 0;
    position: absolute;
    background-color: ${Colors.PurpleDark};
  }
  position: relative;
`;

const SignupForm = styled.form`
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
    color: ${Colors.Yellow};
    cursor: pointer;
  }
`

export {
  Container,
  Header,
  Logo,
  Content,
  SignupForm,
  Button,
  SignupItem,
}