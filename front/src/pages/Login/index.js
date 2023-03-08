import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  Logo,
  HeaderContent,
  Content,
  LoginForm,
  Button,
  ForgotPassword,
  SignupItem,
} from './style';

import Input from '../../components/Input';
import ForgotPasswordSteps from './ForgotPassword';
import { Colors } from '../../styles/colors';
import icon from '../../assets/login-icon.gif';
import { ModalContext } from '../../contexts/ModalContext';

export default function Login() {
  const [ isActive, setIsActive ] = useContext(ModalContext);

  function ForgotPasswordAction() {
    setIsActive(true);
  }

  function dismissModal() {
    setIsActive(false);
  }

  return (
    <>
      <Container>
        <Header>
          <Logo>MYHOPE</Logo>
          <HeaderContent>
            <img src={icon} alt='icon'/>
          </HeaderContent>
        </Header>
        <Content>
          <h1>Login</h1>
          <LoginForm>
            <Input
              type='email'
              className='input'
              label='Email'
              onChange={() => {}}
              id='email'
              color={Colors.White}
              labelBackground={Colors.BackgroundColorPrimary}
            />
            <Input
              type='password'
              className='input'
              label='Senha'
              onChange={() => {}}
              id='password'
              color={Colors.White}
              labelBackground={Colors.BackgroundColorPrimary}
            />

            <ForgotPassword onClick={ForgotPasswordAction}>
              Esqueceu sua senha ?
            </ForgotPassword>
            <Button>ENTRAR</Button>
          </LoginForm>
          <SignupItem>Não possui conta? <Link to='/signup'> Criar Agora </Link></SignupItem>
        </Content>
      </Container>
      {
        isActive ? (<ForgotPasswordSteps isActive={isActive} dismiss={dismissModal} />) : null
      }
    </>
  )
}