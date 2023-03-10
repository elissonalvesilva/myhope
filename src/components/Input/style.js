import styled from 'styled-components';


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
`;

export {
  InputGroup
}