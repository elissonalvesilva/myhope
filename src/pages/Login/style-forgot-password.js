import styled from 'styled-components';
import { Colors } from '../../styles/colors';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .head-itens {
    margin-bottom: 30px;
    font-size: 22px;
    display: flex;
    .text {
      text-align: center;
      color: ${Colors.BackgroundColorPrimary};
      font-weight: 600;
      flex-grow: 2;
      margin-left: -10px;
    }
  }
  .head{
    .icon {
      float: right;
    }
    &.previous {
      .icon {
        float: left !important;
      }
    }
  }
  

  p {
    color: #B8B8B8;
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 40px;
    line-height: 16px;
  }
`

const Body = styled.div`
  margin-bottom: 30px;
`

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  background-color: ${Colors.Purple};
  color: ${Colors.White};
  width: 100%;
  padding: 15px;
  border-radius: 15px;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  outline: none;
  border: none;
`

const FourDigits = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Digit = styled.input`
  margin-right: 20px;
  height: 50px;
  width: 40px;
  text-align: center;
  font-size: 18px;
  &:last-of-type{
    margin-right: 0;
  }

  border: 1px solid ${Colors.Gray};
  border-radius: 10px;
  padding: 5px;
`

const Form = styled.form`
  .input {
    margin-bottom: 30px;
    &:nth-child(2) {
      margin-bottom: 10px;
    }
  }
`

const Errors = styled.div`
  margin-top: 20px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
`

const Error = styled.small`
  &:first-of-type{
    margin-top: 0;
  }
  margin-top: 10px;
  color: ${Colors.Red};
  font-size: 12px;

  .icon {
    position: relative;
    top: 1px;
    margin-right: 5px;
  }
`

export {
  Header,
  Body,
  Footer,
  Button,
  FourDigits,
  Digit,
  Form,
  Errors,
  Error,
}