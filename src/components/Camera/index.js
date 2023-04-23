import React, { useEffect, useRef, useState } from 'react';
import { Camera } from 'react-camera-pro';

import {
  Container,
  CameraContainer,
  CameraContent,
  CameraControl,
  TakePhotoButton,
} from './style';

export default function Photo({ setImage, close = () => {} }) {
  const camera = useRef(null);
  const [activeDeviceId, setActiveDeviceId] = useState(undefined);


  return (
    <Container>
      <CameraContainer>
        <CameraContent>
          <Camera
            ref={camera}
            aspectRatio="cover"
            videoSourceDeviceId={activeDeviceId}
            errorMessages={{
              noCameraAccessible: 'No camera device accessible. Please connect your camera or try a different browser.',
              permissionDenied: 'Permission denied. Please refresh and give camera permission.',
              switchCamera:
                'It is not possible to switch camera to different one because there is only one video device accessible.',
              canvas: 'Canvas is not supported.',
            }}
          />
          <CameraControl>
            <TakePhotoButton
              onClick={() => {
                if (camera.current) {
                  const photo = camera.current.takePhoto();
                  setImage(photo);
                  close();
                }
              }}
            >
              <div className='button-internal'/>
            </TakePhotoButton>
          </CameraControl>
        </CameraContent>
      </CameraContainer>
    </Container>
  );
};

