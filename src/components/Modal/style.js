import styled from 'styled-components';
import { Colors } from '../../styles/colors';

const ModalOverlay = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, .7);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 2;
`

const ModalBottom = styled.div`
  position: fixed;
  bottom: 0;
  background-color: ${Colors.White};
  min-height: 50px;
  min-width: 100vw;
  border-radius: 20px 20px 0px 0px;
  padding: 40px 20px 10px 20px;
  z-index: 999;
  align-self: end;
`

const ModalTop = styled.div`
  position: fixed;
  top: 0;
  background-color: ${Colors.White};
  min-height: 200px;
  min-width: 100vw;
  border-radius: 0px 0px 20px 20px;
  z-index: 999;
`

const ModalCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 48%;
  transform: translate(-50%, -50%);
  background-color: ${Colors.White};
  min-height: 200px;
  min-width: 80vw;
  border-radius: 20px;
  margin: 0 10px;
  z-index: 999;
`

export {
  ModalOverlay,
  ModalBottom,
  ModalTop,
  ModalCenter,
}



