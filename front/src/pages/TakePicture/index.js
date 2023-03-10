import { MdOutlineArrowBack } from 'react-icons/md';

import Photo from "../../components/Camera";
import {
  Container,
  Navigation,
  Nav,
} from './style';

export default function TakePicture({ open = false, closeCamera, setImage }) {
  if(open) {
    return(
      <Container>
        <Nav>
          <Navigation>
            <div className='icon-previous' onClick={closeCamera}>
              <MdOutlineArrowBack className='icon' />
            </div>
            <h2 className='title'>Tirar Foto</h2>
          </Navigation>
        </Nav>
        <Photo setImage={setImage} close={closeCamera}/>
      </Container>
    )
  }
  return null;
}