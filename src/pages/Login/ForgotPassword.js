import { useRef, useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { GrFormPrevious } from 'react-icons/gr';
import { TbMoodConfuzed } from 'react-icons/tb';

import Input from '../../components/Input';
import Modal from '../../components/Modal';
import { Colors } from '../../styles/colors';

import {
  Header,
  Body,
  Footer,
  Button,
  FourDigits,
  Digit,
  Form,
  Errors,
  Error,
} from './style-forgot-password';

import {
  ErrorsMessage
} from './errors';

function StepResetPassword({ resetPasswordSubmit, previousStep, onChangePassword, onChangeConfirmPassword, errors = [], newPassword, confirmNewPassword }) {
  return (
    <>
      <Header>
        <div className='head previous'>
          <div className='head-itens'>
            <GrFormPrevious className='icon' onClick={previousStep} />
            <span className='text'>Redefinir Senha</span>
          </div>
        </div>
        <p>Digite a nova senha da sua conta e então você poderá fazer o login normalmente.</p>
      </Header>
      <Body>
        <Form onSubmit={resetPasswordSubmit}>
          <Input
            className='input'
            type="password"
            label='Nova Senha'
            labelBackground={Colors.White}
            onChange={e => onChangePassword(e.target.value)}
            value={newPassword}
          />
          <Input
            className='input'
            type="password"
            label='Confirmar Senha'
            labelBackground={Colors.White}
            onChange={e => onChangeConfirmPassword(e.target.value)}
            value={confirmNewPassword}
          />
          {
            errors.length > 0 ? (
              <Errors>
              {
                errors.map((error, index) => (
                  <Error key={index}><TbMoodConfuzed className='icon'/>{error.message}</Error>
                ))
              }
              </Errors>
            ) : null
          }
          <Button>Redefinir Senha</Button>
        </Form>
      </Body>
    </>
  )
}

function StepCode({ nextStep, previousStep, onChangeDigits, maxDigitsInput = 4, errors = [], digits }) {
  const digitsRef = useRef([]);

  function onChange(e) {
    const [, codeFieldIndex] = e.target.name.split("-");
    let fieldIntIndex = parseInt(codeFieldIndex, 10);
    onChangeDigits(e.target.value);
    
    if(e.target.value.length > 0 && fieldIntIndex < 3) {
      digitsRef.current[fieldIntIndex + 1].focus();
    }else {
      const field = document.querySelector(`Input[name=code-${fieldIntIndex}]`);
      field.blur();
    }
  }

  const DigitInputFields = new Array(maxDigitsInput)
    .fill(0)
    .map((item, index) => (
      <Digit
        ref={(ref) => digitsRef.current.push(ref)}
        name={`code-${index}`}
        key={index}
        pattern="[0-9]*"
        type="text"
        maxLength={1}
        className='input-number'
        onChange={e => onChange(e)}
        value={digits}
      />
    ))

  return (
    <>
      <Header>
        <div className='head previous'>
          <div className='head-itens'>
            <GrFormPrevious className='icon' onClick={previousStep} />
            <span className='text'>Código de 4 dígitos</span>
          </div>
        </div>
        <p>Digite o código de 4 dígitos enviado para seu email para recuperação de sua conta.</p>
      </Header>
      <Body>
        <FourDigits>
          {DigitInputFields}
        </FourDigits>
        {
          errors.length > 0 ? (
            <Errors>
            {
              errors.map((error, index) => (
                <Error key={index}><TbMoodConfuzed className='icon'/>{error.message}</Error>
              ))
            }
            </Errors>
          ) : null
        }
      </Body>
      <Footer>
        <Button onClick={nextStep}>Continuar</Button>
      </Footer>
    </>
  )
}

function StepEmail({ nextStep, dismiss, errors = [], email }) {
  return (
    <>
      <Header>
        <div className='head'>
          <div className='head-itens'>
            <span className='text'>Esqueceu sua Senha ?</span>
            <IoClose className='icon' onClick={dismiss} />
          </div>
        </div>
        <p>Entre com seu email cadastrado e nós enviaremos um email contendo um código de 4 dígitos</p>
      </Header>
      <Body>
        <Input type='text' label='E-mail' labelBackground={Colors.White} value={email}/>
        {
          errors.length > 0 ? (
            <Errors>
            {
              errors.map((error, index) => (
                <Error key={index}><TbMoodConfuzed className='icon'/>{error.message}</Error>
              ))
            }
            </Errors>
          ) : null
        }
      </Body>
      <Footer>
        <Button onClick={nextStep}>Continuar</Button>
      </Footer>
    </>
  )
}

export default function ForgotPasswordSteps({ isActive = false, dismiss = () => {} }) {
  const [currentStep, setCurrent] = useState(1);
  const [digits, setDigits] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errors, setErrors] = useState([]);

  function nextStep() {
    setCurrent(currentStep+1);
    setErrors([]);
  }

  function previousStep() {
    setCurrent(currentStep-1);
    setErrors([]);
  }

  function onChangeDigits(digit) {
    setDigits((prevState) => prevState + digit);
  }

  function onChangeEmailUser(value) {
    if(value !== ''){
      setEmail(value)
    }
  }

  function onChangePassword(value) {
    if(value !== ''){
      setNewPassword(value)
    }
  }

  function onChangeConfirmPassword(value) {
    if(value !== ''){
      setConfirmNewPassword(value);
    }
  }

  useEffect(() => {
    if(newPassword !== confirmNewPassword) {
      const exists = errors.some((error) => error.code == ErrorsMessage.NotMatchPasswords.code);
      if(!exists) {
        errors.push(ErrorsMessage.NotMatchPasswords);
        setErrors(errors, ...errors);
      }
    } else {
      setErrors([]);
    }
  }, [newPassword, confirmNewPassword]);

  function resetPasswordSubmit() {

  }
  
  const steps = {
    1: StepEmail({ nextStep, dismiss, onChangeEmailUser, errors, email }),
    2: StepCode({ nextStep, previousStep, onChangeDigits, errors, digits }),
    3: StepResetPassword({ resetPasswordSubmit, previousStep, onChangePassword, onChangeConfirmPassword, errors, newPassword, confirmNewPassword }),
  }

  return (
    <Modal type='bottom' isActive={isActive} dismiss={dismiss}>
      { steps[currentStep] }
    </Modal>
  )
}