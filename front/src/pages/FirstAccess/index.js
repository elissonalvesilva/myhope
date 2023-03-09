import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md';

import {
  Container,
  Nav,
  Content,
  Steps,
  Step,
  Next,
} from './style';

import welcome from '../../assets/welcome.png';
import quiz from '../../assets/quiz.png';
import ranking from '../../assets/ranking.png';
import wallet from '../../assets/wallet.png';

function FourthStep({ goTo }) {
  return(
    <>
      <Content className='finish'>
        <img src={wallet} alt='quiz' className='print' />
        <div className='step'>
          <h2>Seu Dinheiro !</h2>
          <p>Colete moedas e ganhe recompensas exclusivas! Use suas moedas para o nosso leilão e
            para disputar com seus amigos. Comece a coletar agora!</p>
        </div>
        <Steps>
          <Step/>
          <Step/>
          <Step/>
          <Step className='active'/>
        </Steps>
        <Next onClick={goTo}>Finalizar</Next>
      </Content>
    </>
  )
}

function ThirdStep({ nextStep, prevStep, goTo }) {
  return(
    <>
      <Nav>
        <MdOutlineArrowBack className='icon' onClick={prevStep}/>
        <div className='skip-intro' onClick={goTo}>
          <span>Pular</span>
        </div>
      </Nav>
      <Content className='step'>
        <img src={ranking} alt='quiz' className='print' />
        <div className='step'>
          <h2>Ranking !</h2>
          <p>Descubra quem está no topo com nosso ranking! Veja quem está liderando e desafie-se a subir na lista. Confira agora!</p>
        </div>
        <Steps>
          <Step/>
          <Step/>
          <Step className='active'/>
          <Step/>
        </Steps>
        <Next onClick={nextStep}>Próximo</Next>
      </Content>
    </>
  )
}

function SecondStep({ nextStep, prevStep, goTo }) {
  return(
    <>
      <Nav>
        <MdOutlineArrowBack className='icon' onClick={prevStep}/>
        <div className='skip-intro' onClick={goTo}>
          <span>Pular</span>
        </div>
      </Nav>
      <Content className='step'>
        <img src={quiz} alt='quiz' className='print' />
        <div className='step'>
          <h2>Quizes variados !</h2>
          <p>Teste seus conhecimentos com nosso quiz! Diversão e aprendizado garantidos!</p>
        </div>
        <Steps>
          <Step/>
          <Step className='active'/>
          <Step/>
          <Step/>
        </Steps>
        <Next onClick={nextStep}>Próximo</Next>
      </Content>
    </>
  )
}

function FirstStep({ nextStep, goTo }) {
  return(
    <>
      <Nav className='first'>
        <div className='skip-intro' onClick={goTo}>
          <span>Pular</span>
        </div>
      </Nav>
      <Content className='first'>
        <img src={welcome} alt='welcome' />
        <div className='first-step'>
          <h1>Bem-Vindo !</h1>
          <p>Tenho dito estas palavras para que a minha alegria esteja em vocês e a alegria de vocês seja completa. João 15:11</p>
        </div>
        <Next onClick={nextStep}>Próximo</Next>
      </Content>
    </>
  )
}

export default function FirstAcess() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  function nextStep() {
    setCurrentStep(currentStep+1);
  }

  function prevStep() {
    setCurrentStep(currentStep-1);
  }

  function goTo() {
    navigate('/perfil/photo');
  }

  const steps = {
    1: FirstStep({ nextStep, goTo }),
    2: SecondStep({ nextStep, prevStep, goTo }),
    3: ThirdStep({ nextStep, prevStep, goTo }),
    4: FourthStep({ prevStep, goTo })
  }

  return(
    <>
      <Container>
        {steps[currentStep]}
      </Container>
    </>
  )
}
/*
Bem-vindo ao nosso aplicativo! Estamos aqui para tornar sua vida mais fácil e agradável. Nossa equipe trabalhou duro para tornar a interface fácil de usar. Se precisar de ajuda, entre em contato conosco pelo suporte ao cliente. Obrigado por escolher nosso aplicativo e aproveite!
*/