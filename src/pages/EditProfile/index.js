import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md';
import {
  Container,
  Nav,
  Navigation,
  Content,
  Photo,
  Body,
} from './style';
import Input from '../../components/Input';
import { ModalContext } from '../../contexts/ModalContext';
import avatar from '../../assets/avatar.jpg';
import { Colors } from '../../styles/colors';
import EditPhoto from './EditPhoto';

export default function EditProfile() {
  const [ isActive, setIsActive ] = useContext(ModalContext);
  const [image, setImage] = useState('');


  function takeImage(img) {
    setImage(img)
  }

  const navigate = useNavigate();

  function editPhotoAction() {
    setIsActive(true);
  }

  function dismissModal() {
    setIsActive(false);
  }

  function onClickPrevious() {
    navigate(-1);
  }

  const currentImage = image !== '' ? image : avatar;

  return(
    <>
      <Container>
        <Nav>
          <Navigation>
            <div className='icon-previous' onClick={onClickPrevious}>
              <MdOutlineArrowBack className='icon' />
            </div>
            <h2 className='title'>Perfil</h2>
            <h2 className='finish-button'>Finalizar</h2>
          </Navigation>
        </Nav>
        <Content>
          <Photo>
            <div className='profile'>
              <img src={currentImage} alt='avatar'/>
              <p className='edit-link' onClick={editPhotoAction}>Editar Foto</p>
            </div>
          </Photo>
        </Content>
        <Body>
          <Input className='input' type='text' label='Nome' labelBackground={Colors.BackgroundColorPrimary} color={Colors.White} />
          <Input className='input' type='text' label='Sobrenome' labelBackground={Colors.BackgroundColorPrimary} color={Colors.White} />
          <Input className='input' type='email' label='Email' labelBackground={Colors.BackgroundColorPrimary} color={Colors.White} />
        </Body>
      </Container>
      {
        isActive ? (<EditPhoto isActive={isActive} dismiss={dismissModal} takeImage={takeImage} />) : null
      }
    </>
  )
}