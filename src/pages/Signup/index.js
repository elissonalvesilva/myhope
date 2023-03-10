import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  Logo,
  Content,
  SignupForm,
  Button,
  SignupItem,
} from './style';

import Input from '../../components/Input';
import { Colors } from '../../styles/colors';

export default function Signup() {
  return (
    <Container>
      <Header>
        <Logo>MYHOPE</Logo>
      </Header>
      <Content>
        <h1>Criar Conta</h1>
        <SignupForm>
          <Input
            type='text'
            className='input'
            label='Nome'
            onChange={() => {}}
            id='nome'
            color={Colors.White}
            labelBackground={Colors.PurpleDark}
          />
          <Input
            type='text'
            className='input'
            label='Último nome'
            onChange={() => {}}
            id='lastname'
            color={Colors.White}
            labelBackground={Colors.PurpleDark}
          />
          <Input
            type='email'
            className='input'
            label='Email'
            onChange={() => {}}
            id='email'
            color={Colors.White}
            labelBackground={Colors.PurpleDark}
          />
          <Input
            type='password'
            className='input'
            label='Senha'
            onChange={() => {}}
            id='password'
            color={Colors.White}
            labelBackground={Colors.PurpleDark}
          />
          <Input
            type='password'
            className='input'
            label='Confirmar Senha'
            onChange={() => {}}
            id='confirm-password'
            color={Colors.White}
            labelBackground={Colors.PurpleDark}
          />
          <Button>CRIAR</Button>
        </SignupForm>
        <SignupItem>Já possui conta? <Link to='/'> Login </Link></SignupItem>
      </Content>
    </Container>
  )
}