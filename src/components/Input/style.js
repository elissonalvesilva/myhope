import styled from 'styled-components';
import { Colors } from '../../styles/colors';


const InputGroup = styled.div`
  position: relative;
  & > label {
    position: absolute;
    top: -18px;
    left: 20px;
    background-color: ${props => props.labelBackground};
    color: ${props => props.color};
    padding: 10px;
    font-size: 16px;
  }
  input {
    height: 50px;
    width: 100%;
    background: transparent;
    border-radius: 15px;
    border: 1px solid ${props => props.color};
    color: ${props => props.color};
    padding: 20px;
    font-size: 16px;
  }

  .error {
    color: ${Colors.Yellow};
    padding: 5px 5px;
    font-weight: 100;
  }
`;

export {
  InputGroup
}