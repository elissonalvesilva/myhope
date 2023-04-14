import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
import config, { configEnv } from '../../config/index'
import axios from 'axios';

export default function Signup() {
  const [canSubmit, setCanSubmit] = useState(true);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirPassword, setConfirmPassword] = useState('');

  function createName(event) {
    const value = event.target.value;
    if(value) {
      setName(value)
    }
  }

  function createLastName(event) {
    const value = event.target.value;
    if(value) {
      setLastName(value)
    }
  }

  function createEmail(event) {
    const value = event.target.value;
    if(value) {
      setEmail(value)
    }
  }

  function createPassword(event) {
    const value = event.target.value;
    if(value) {
      setPassword(value)
    }
  }

  function createConfirmPassword(event) {
    const value = event.target.value;
    if(value) {
      setConfirmPassword(value)
    }
  }

  useEffect(() => {
    console.log(password, confirPassword, canSubmit)
    if(password === confirPassword) {
      setCanSubmit(true);
    }else {
      setCanSubmit(false);
    }
  }, [confirPassword])

  function submit(e) {
    e.preventDefault();
    axios.post(`${configEnv.MYHOPE_API}/user`, {
      name,
      lastName,
      email,
      password
    }).then((resp) => {
      console.log(resp)
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <Container>
      <Header>
        <Logo>MYHOPE</Logo>
      </Header>
      <Content>
        <h1>Criar Conta</h1>
        <SignupForm onSubmit={submit}>
          <Input
            type='text'
            className='input'
            label='Nome'
            onChange={(e) => createName(e)}
            id='nome'
            color={Colors.White}
            labelBackground={Colors.PurpleDark}
          />
          <Input
            type='text'
            className='input'
            label='Sobrenome'
            onChange={(e) => createLastName(e)}
            id='lastname'
            color={Colors.White}
            labelBackground={Colors.PurpleDark}
          />
          <Input
            type='email'
            className='input'
            label='Email'
            onChange={(e) => createEmail(e)}
            id='email'
            color={Colors.White}
            labelBackground={Colors.PurpleDark}
          />
          <Input
            type='password'
            className='input'
            label='Senha'
            onChange={(e) => createPassword(e)}
            id='password'
            color={Colors.White}
            labelBackground={Colors.PurpleDark}
          />
          <Input
            type='password'
            className='input'
            label='Confirmar Senha'
            onChange={(e) => createConfirmPassword(e)}
            id='confirm-password'
            color={Colors.White}
            labelBackground={Colors.PurpleDark}
          />
          <Button type='submit'>CRIAR</Button>
        </SignupForm>
        <SignupItem>Já possui conta? <Link to='/'> Login </Link></SignupItem>
      </Content>
    </Container>
  )
}