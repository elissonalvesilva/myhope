import styled from "styled-components";
import { Colors } from "../../styles/colors";

const Container = styled.div`
  height: 100%;
  width: 100vw;
  background-color: ${Colors.Purple};
`

const Header = styled.div`
  padding: 15px 20px;
  height: 40vh;
  background-color: ${Colors.BackgroundColorPrimary};
  border-radius: 0 0 0% 50%;
  position: relative;
`

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${Colors.White};
`

const Arrow = styled.div`
  background-color: rgba(255, 255, 255, .2);
  padding: 8px 10px;
  border-radius: 10px;
  .icon {
    font-size: 22px;
  }
`
const LengthQuestions = styled.div`
  flex-grow: 2;
  text-align: center;
`
const Clock = styled.div`
  display: flex;
  align-items: center;
  background-color: ${Colors.Purple};
  padding: 5px 10px;
  border-radius: 20px;
  .icon {
    margin-right: 5px;
    font-size: 18px;
  }
`

const Progress = styled.div`
  position: relative;
  top: 15%;
`

const Content = styled.form`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -120px;
`

const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Button = styled.button`
  background-color: ${Colors.Green};
  padding: 15px 28px;
  border: none;
  border-radius: 10px;
  color: ${Colors.White};
  font-size: 16px;
  margin-top: 20px;
  border-bottom: 8px solid #3bad88;
  border-right: 3px solid #3bad88;
  margin: 20px;
`

export {
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
}