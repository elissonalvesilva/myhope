import styled from 'styled-components';
import { Colors } from '../../styles/colors';

const Container = styled.div`
  background-color: ${Colors.White};
  min-height: 40vh;
  width: 80vw;
  border-radius: 20px;
  padding: 20px 20px;
`

const Header = styled.div`
  margin-bottom: 30px;
  .question-type {
    color: ${Colors.Gray};
    font-size: 12px;
  }
  .question {
    margin-top: 10px;
    color: ${Colors.BackgroundColorPrimary};
    font-weight: bold;
    line-height: 20px;
  }
`

const Body = styled.ul`

`

const Answer = styled.li`
  position: relative;
  flex-basis: calc(70% / 3);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  .select-radio{
    appearance:none;
    display:none;
  }
  
  .select-label {
    position: relative;
    height: 80%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    padding: 20px 20px;
    transition-duration: .5s;
    transition-property: transform, color, box-shadow;
    transform: none;
    border: 1px solid ${Colors.Gray};
  }
  
  .select-radio:checked + .select-label{
    border-radius: 20px;
    border: 1px solid ${Colors.Green};
    background-color: rgba(100, 203, 169, 0.3);
    transform:translateY(-2px);
    font-weight: bold;
  }

  .icon {
    color: ${Colors.Green}
  }
`

export {
  Container,
  Header,
  Body,
  Answer,
}