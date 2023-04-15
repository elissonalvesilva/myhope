import { useCallback, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillAlert } from 'react-icons/ai';

import axios from 'axios';

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
  ModalStyle,
} from './style';

import Input from '../../components/Input';
import ForgotPasswordSteps from './ForgotPassword';
import { Colors } from '../../styles/colors';
import icon from '../../assets/login-icon.gif';
import { ModalContext } from '../../contexts/ModalContext';

import Loading from '../../components/Loading';
import Modal from '../../components/Modal';
import { configEnv } from '../../config';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

export default function Login() {
  const navigate = useNavigate();
  const [token, setToken, logado, setLogado] = useContext(AuthenticationContext);
  const [ isActive, setIsActive ] = useContext(ModalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeModal, setActiveModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

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

  function ForgotPasswordAction() {
    setIsActive(true);
  }

  function dismissModal() {
    setIsActive(false);
  }

  const submit = useCallback(
    async(e) => {
      e.preventDefault();
      setIsLoading(true);
      try {
        setIsLoading(false);
        const resp = await axios.post(`${configEnv.MYHOPE_API}/login`, {
          email,
          password
        })

        const { token } = resp.data;
        setToken(token);
        setLogado(true);
        navigate('/ranking');
      } catch (error) {
        setIsLoading(false);
        setActiveModal(true);
        if(error.response.status === 401 || error.response.status === 403) {
          setModalMessage('Usuário e Senha incorretos');
          setTimeout(() => {
            setActiveModal(false);
          }, 2000)
        }else {
          setModalMessage('Erro no sistema do MyHope. Contate a equipe');
        }
      }
    }
  );

  return (
    <>
      {
        isLoading && (
          <Loading isActive={isLoading} />
        )
      }
      <Modal isActive={activeModal} dismiss={dismissModal}>
        <ModalStyle>
          <AiFillAlert className='icon err' />
          <p>{modalMessage}</p>
        </ModalStyle>
      </Modal>
      <Container>
        <Header>
          <Logo>MYHOPE</Logo>
          <HeaderContent>
            <img src={icon} alt='icon'/>
          </HeaderContent>
        </Header>
        <Content>
          <h1>Login</h1>
          <LoginForm onSubmit={submit}>
            <Input
              type='email'
              className='input'
              label='Email'
              onChange={(e) => createEmail(e)}
              id='email'
              color={Colors.White}
              labelBackground={Colors.BackgroundColorPrimary}
            />
            <Input
              type='password'
              className='input'
              label='Senha'
              onChange={(e) => createPassword(e)}
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