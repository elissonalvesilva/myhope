import { Link, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { AiFillAlert } from 'react-icons/ai';
import { ImHappy } from 'react-icons/im';
import * as yup from "yup"; 

import {
  Container,
  Header,
  Logo,
  Content,
  SignupForm,
  Button,
  SignupItem,
  ModalStyle,
} from './style';

import Input from '../../components/Input';
import { Colors } from '../../styles/colors';
import { configEnv } from '../../config/index'
import axios from 'axios';
import Modal from '../../components/Modal';

export default function Signup() {
  const navigate = useNavigate();
  const [canSubmit, setCanSubmit] = useState(true);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [activeModal, setActiveModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [inputErrorMessage, setInputErrorMessage] = useState('');
  const [inputWithError, setInputWithError] = useState({
    name: {
      hasError: false,
      message: ''
    },
    lastName: {
      hasError: false,
      message: ''
    },
    email: {
      hasError: false,
      message: ''
    },
    password: {
      hasError: false,
      message: ''
    },
    confirmPassword: {
      hasError: false,
      message: ''
    },
  })

  const schema = yup.object({
    name: yup
      .string()
      .min(3, 'Nome invalido.')
      .required('Nome precisa ser informado'),
    lastName: yup
      .string()
      .min(5, 'Necessário informar o sobrenome completo')
      .required('O sobrenome precisa ser informado'),
    email: yup
      .string()
      .email('Email precisa valido')
      .required('Email precisa ser requerido'),
    password: yup
      .string()
      .min(5, 'É necessário pelo menos ter 5 caracteres')
      .required('É necessário informar a sua senha'),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords não são iguais").required('É necessário informar a senha')
  });

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

  function dismissModal() {
    setActiveModal(false);
  }

  useEffect(() => {
    console.log(password, confirmPassword, canSubmit)
    if(password === confirmPassword) {
      setCanSubmit(true);
    }else {
      setCanSubmit(false);
    }
  }, [confirmPassword])


  const submit = useCallback(
    async (e) => {
      e.preventDefault();
      const isValid = await schema.isValid({
        name,
        lastName,
        email,
        password
      });

      if(isValid) {
        axios.post(`${configEnv.MYHOPE_API}/user`, {
          name,
          lastName,
          email,
          password
        }).then((resp) => {
          setActiveModal(true);
          setModalMessage('Sucesso ao se cadastrar. Seja muito bem vindo ao MyHope');
          setTimeout(() => {
            setIsError(false);
            setActiveModal(false);
            navigate('/');
          }, 2000);
        }).catch((err) => {
          setIsError(true);
          setActiveModal(true);
          if(err.response.status === 409) {
            setModalMessage('Você já possui cadastro no MyHope. Você pode recuperar sua conta no inicio. Basta clicar em esqueci minha senha.');
          }else{
            setModalMessage('Erro ao se cadastrar. Contate a equipe do MyHope');
          }
        })
      }else {
        schema.validate({
          name,
          lastName,
          email,
          password
          }, { abortEarly: false }).catch((err) => {
            const inputsWithError = err.inner.reduce((acc, err) => {
              const obj = {
                ...acc,
                [err.path]: {
                  hasError: true,
                  message: err.message,
                },
              }
              return obj;
            }, {});
            console.log(inputsWithError);
            setInputWithError({ ...inputWithError, ...inputsWithError })
          });
      }
    }
  );

  return (
    <>
      <Modal isActive={activeModal} dismiss={dismissModal}>
        <ModalStyle>
          { isError ? <AiFillAlert className='icon err' /> : <ImHappy className='icon success' /> }
          <p>{modalMessage}</p>
        </ModalStyle>
      </Modal>
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
              hasError={inputWithError.name.hasError}
              errorMessage={inputWithError.name.message}
            />
            <Input
              type='text'
              className='input'
              label='Sobrenome'
              onChange={(e) => createLastName(e)}
              id='lastname'
              color={Colors.White}
              labelBackground={Colors.PurpleDark}
              hasError={inputWithError.lastName.hasError}
              errorMessage={inputWithError.lastName.message}
            />
            <Input
              type='email'
              className='input'
              label='Email'
              onChange={(e) => createEmail(e)}
              id='email'
              color={Colors.White}
              labelBackground={Colors.PurpleDark}
              hasError={inputWithError.email.hasError}
              errorMessage={inputWithError.email.message}
            />
            <Input
              type='password'
              className='input'
              label='Senha'
              onChange={(e) => createPassword(e)}
              id='password'
              color={Colors.White}
              labelBackground={Colors.PurpleDark}
              hasError={inputWithError.password.hasError}
              errorMessage={inputWithError.password.message}
            />
            <Input
              type='password'
              className='input'
              label='Confirmar Senha'
              onChange={(e) => createConfirmPassword(e)}
              id='confirm-password'
              color={Colors.White}
              labelBackground={Colors.PurpleDark}
              hasError={inputWithError.confirmPassword.hasError}
              errorMessage={inputWithError.confirmPassword.message}
            />
            <Button type='submit'>CRIAR</Button>
          </SignupForm>
          <SignupItem>Já possui conta? <Link to='/'> Login </Link></SignupItem>
        </Content>
      </Container>
    </>
  )
}