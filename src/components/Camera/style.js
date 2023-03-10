import styled from 'styled-components';

import { Colors } from '../../styles/colors';


const Container = styled.div`
  height: 100vh;
  width: 100vw;
`

const CameraContainer = styled.div`
  height: 70vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CameraContent = styled.div`
  position: fixed;
  top: 10%;
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  
  video {
    border-radius: 50%;
  }
`


const CameraControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100px;
  position: relative;
  top: 170px;
`

const TakePhotoButton = styled.div`
  padding: 3px;
  width: 50px;
  height: 50px;
  border: solid 4px ${Colors.White};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  .button-internal {
    background-color: ${Colors.White};
    width: 100%;
    height: 100%;
    border-radius: 50%;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const Actions = styled.div`

`

const Button = styled.button`

`


export {
  Container,
  CameraContainer,
  CameraContent,
  Actions,
  Button,
  TakePhotoButton,
  CameraControl,
}