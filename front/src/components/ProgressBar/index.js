import {
  Container,
  Filler,
} from './style';

export default function ProgressBar({ length = 0 }) {
  return (
    <Container>
      <Filler length={length}/>
    </Container>
  )
}