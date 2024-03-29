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
import { UserContext } from '../../contexts/UserContext';

export default function Login() {
  const navigate = useNavigate();
  const [token, setToken, logado, setLogado] = useContext(AuthenticationContext);
  const [user, storeUser] = useContext(UserContext);
  const [isActive, setIsActive ] = useContext(ModalContext);
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
        const resp = await axios.post(`${configEnv.MYHOPE_API}/login`, {
          email,
          password
        })

        const { token, userId } = resp.data;
        
        const { data } = await axios.get(
          `${configEnv.MYHOPE_API}/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        storeUser(data);
        setToken(token);
        setLogado(true);
        setIsLoading(false);
        
        if(data.firstAccess) {
          navigate('/intro');
        }else {
          navigate('/ranking');
        }

      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setActiveModal(true);
        if(error.response?.status === 401 || error.response?.status === 403) {
          setModalMessage('Usuário e Senha incorretos');
        }else {
          setModalMessage('Erro no sistema do MyHope. Contate a equipe');
        }
        setTimeout(() => {
          setActiveModal(false);
        }, 2000)
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
              value={email}
            />
            <Input
              type='password'
              className='input'
              label='Senha'
              onChange={(e) => createPassword(e)}
              id='password'
              color={Colors.White}
              labelBackground={Colors.BackgroundColorPrimary}
              value={password}
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