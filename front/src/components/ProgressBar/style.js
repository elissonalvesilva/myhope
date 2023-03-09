import styled from 'styled-components';
import { Colors } from '../../styles/colors';

const Container = styled.div`
  height: 15px;
  width: 100%;
  background-color: ${Colors.PurpleDark};
  border-radius: 50px;
  margin: 10px 0;
`

const Filler = styled.div`
  height: 100%;
  width: ${props => props.length}%;
  background-color: ${Colors.Green};
  border-radius: inherit;
  text-align: right;
`

export {
  Container,
  Filler,
}