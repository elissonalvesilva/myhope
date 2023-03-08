import styled from 'styled-components';
import { Colors } from '../../styles/colors';

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, .4);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 99;
`

const ModalBottom = styled.div`
  position: fixed;
  bottom: 0;
  background-color: ${Colors.White};
  min-height: 200px;
  min-width: 100vw;
  border-radius: 20px 20px 0px 0px;
`

const ModalTop = styled.div`
  position: fixed;
  Top: 0;
  background-color: ${Colors.White};
  min-height: 200px;
  min-width: 100vw;
  border-radius: 0px 0px 20px 20px;
`

const ModalCenter = styled.div`
  position: fixed;
  top: 50%;
  left: 48%;
  transform: translate(-50%, -50%);
  background-color: ${Colors.White};
  min-height: 200px;
  min-width: 80vw;
  border-radius: 20px;
  margin: 0 10px;
`

export {
  ModalContainer,
  ModalBottom,
  ModalTop,
  ModalCenter,
}



