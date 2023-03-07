import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  Logo,
  HeaderContent,
  Content,
  LoginForm,
  Button,
  SignupItem,
} from './style';

import Input from '../../components/Input';
import { Colors } from '../../styles/colors';

import icon from '../../assets/login-icon.gif';

export default function Login() {
  return (
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
          <Button>ENTRAR</Button>
        </LoginForm>
        <SignupItem>Não possui conta? <Link to='/signup'> Criar Agora </Link></SignupItem>
      </Content>
    </Container>
  )
}