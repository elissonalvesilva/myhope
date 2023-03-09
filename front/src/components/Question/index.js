import { useState } from 'react';
import Radio from './Radio';

import {
  Container,
  Header,
  Body,
  Answer,
} from './style';

export default function Question({
  question,
  selectedAnswers,
  onSelectAnswer,
  active = false,
}) {
  const [answer, setAnswer] = useState('');
  function onOptionChange(e, questionId, answer) {
    setAnswer(e.target.value);
    onSelectAnswer(questionId, answer);
  }

  if(active) {
    return (
      <Container>
        <Header>
          <small className='question-type'>{question.type}</small>
          <p className='question'>{question.question}</p>
        </Header>
        <Body>
          {
            question.answers.map((ans, index) => (
              <Answer key={index}>
                <Radio
                  onOptionChange={e => onOptionChange(e, question.id, ans)}
                  value={ans.text}
                  answer={answer}
                  text={ans.text}
                />
              </Answer>
            ))
          }
        </Body>
      </Container>
    )
  }
  return null;
}