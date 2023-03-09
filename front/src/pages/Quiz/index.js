import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md';
import { FcAlarmClock } from 'react-icons/fc';

import {
  Container,
  Content,
  Header,
  Nav,
  Arrow,
  LengthQuestions,
  Clock,
  Progress,
  Actions,
  Button,
} from './style';
import ProgressBar from '../../components/ProgressBar';
import Question from '../../components/Question';

export default function Quiz() {
  let { quizId } = useParams();
  const navigate = useNavigate() 
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [progress, setProgress] = useState(0);


  function nextQuestion() {
    setCurrentQuestion(currentQuestion+1);
  }

  function prevQuestion() {
    setCurrentQuestion(currentQuestion-1);
  }

  function finalizarQuiz() {

  }

  function onSelectAnswer(questionId, answer) {
    const answers = {
      questionId: questionId,
      answer,
    };
    const index = selectedAnswers.findIndex((ans) => ans.questionId === questionId);
    if (index === -1) {
      selectedAnswers.push(answers);
      setSelectedAnswers(selectedAnswers, ...selectedAnswers);
    }else {
      selectedAnswers.splice(index, 1);
      selectedAnswers.push(answers);
      setSelectedAnswers(selectedAnswers, ...selectedAnswers);
    }
  }

  function RenderActions() {
    if(currentQuestion === 1) {
      return (
        <>
          <Button onClick={nextQuestion}>Próxima</Button>
        </>
      )
    }else if(currentQuestion > 1 && currentQuestion === quiz.questions.length) {
      return (
        <>
          <Button onClick={prevQuestion}>Voltar</Button>
          <Button type='submit'>Finalizar</Button>
        </>
      )
    }else if(currentQuestion > 1) {
      return (
        <>
          <Button onClick={prevQuestion}>Voltar</Button>
          <Button onClick={nextQuestion}>Próxima</Button>
        </>
      )
    }
  }

  const quiz = {
    questions: [
      {
        id: 1,
        type: 'Simple question',
        question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry ?',
        answers: [
          {
            id: 1,
            text: 'France',
            correct: true,
          },
          {
            id: 2,
            text: 'Alemanha',
            correct: false,
          },
          {
            id: 3,
            text: 'Brasil',
            correct: false,
          },
          {
            id: 4,
            text: 'USA',
            correct: false,
          }
        ]
      },
      {
        id: 2,
        type: 'Compost question',
        question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry ?',
        answers: [
          {
            id: 1,
            text: 'Eduarda',
            correct: true,
          },
          {
            id: 2,
            text: 'Elisson',
            correct: false,
          },
          {
            id: 3,
            text: 'Danilo',
            correct: false,
          },
          {
            id: 4,
            text: 'USA',
            correct: false,
          }
        ]
      },
      {
        id: 3,
        type: 'Compost question',
        question: 'Lorem Ipsum ?',
        answers: [
          {
            id: 1,
            text: 'Eduardass',
            correct: true,
          },
          {
            id: 2,
            text: 'Elissonzz',
            correct: false,
          },
          {
            id: 3,
            text: 'Daniloxx',
            correct: false,
          },
          {
            id: 4,
            text: 'USAAA',
            correct: false,
          }
        ]
      }
    ]
  }

  useEffect(() => {
    let progressBar = 0;

    if(selectedAnswers.length === 1) {
      progressBar = (100 / quiz.questions.length);
    }else if(selectedAnswers.length > 1) {
      progressBar = (100 / quiz.questions.length) * selectedAnswers.length;
    }
    setProgress(progressBar);
  })

  return (
    <Container>
      <Header>
        <Nav>
          <Arrow onClick={() => navigate(-1)}>
            <MdOutlineArrowBack className='icon' />
          </Arrow>
          <LengthQuestions>{currentQuestion} de {quiz.questions.length}</LengthQuestions>
          <Clock>
            <FcAlarmClock className='icon' />
            <span className='time'>03:58</span>
          </Clock>
        </Nav>
        <Progress>
          <ProgressBar length={progress}/>
        </Progress>
      </Header>
      <Content onSubmit={finalizarQuiz}>
        {
          quiz.questions.map((q, index) => (
            <Question
              key={index}
              question={q}
              selectedAnswers={selectedAnswers}
              onSelectAnswer={onSelectAnswer}
              active={currentQuestion === q.id}
            />
          ))
        }
        <Actions>
          <RenderActions/>
        </Actions>
      </Content>
    </Container>
  )
}