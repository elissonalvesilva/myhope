import { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md';
import Image from 'image-js';
import { AiFillAlert } from 'react-icons/ai';
import axios from 'axios';

import {
  Container,
  Nav,
  Navigation,
  Content,
  Photo,
  Body,
  ModalStyle,
} from './style';
import Input from '../../components/Input';
import { ModalContext } from '../../contexts/ModalContext';
import avatar from '../../assets/avatar.jpg';
import { Colors } from '../../styles/colors';
import EditPhoto from './EditPhoto';
import { UserContext } from '../../contexts/UserContext';
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import storage from '../../config/firebase';
import { configEnv } from '../../config';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';


export default function EditProfile() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const navigate = useNavigate();
  const [ isActive, setIsActive ] = useContext(ModalContext);
  const [user, setUser] = useContext(UserContext);
  const [token, setToken, logado, setLogado] = useContext(AuthenticationContext);
  const [image, setImage] = useState(user.image);
  const [name, setName] = useState(user.name);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);

  function createName(event) {
    const value = event.target.value;
    if(value) {
      setName(value)
    }
  }

  function createLastName(event) {
    const value = event.target.value;
    if(value) {
      setLastName(value)
    }
  }

  function createEmail(event) {
    const value = event.target.value;
    if(value) {
      setEmail(value)
    }
  }

  const takeImage = useCallback(async(img) => {
    const ext = img.split(';')[0].split('/');
    const blob = await fetch(img).then(r => r.blob());
    const buffer = await blob.arrayBuffer();
    const image = await Image.load(buffer);
    const resizedImage = image.resize({ width: 80, height: 80 });
    const base64 = resizedImage.toBase64();
    const imageDecodetoBase64DataURL = ext.join('/')+';base64,'+ base64;

    setImage(imageDecodetoBase64DataURL);
  })


  function editPhotoAction() {
    setIsActive(true);
  }

  function dismissModal() {
    setIsActive(false);
    setActiveModal(false);
  }

  function onClickPrevious() {
    navigate(-1);
  }

  const finish = useCallback(async () => {
    setIsLoading(true);
    const storageRef = ref(storage, `profile/${name.toLowerCase()}_${Date.now()}`);
    try {
      const snapshopt = await uploadString(storageRef, image, 'data_url');
      const imageURL = await getDownloadURL(snapshopt.ref);

      await axios.put(`${configEnv.MYHOPE_API}/user`, {
        params: {
          name,
          lastName,
          image: imageURL,
        }
      }, { headers: {
        Authorization: `Bearer ${token}`
      } });

      const { data } = await axios.get(`${configEnv.MYHOPE_API}/user/${user.id}`, { headers: {
        Authorization: `Bearer ${token}`
      }});

      setUser(data);
      setIsLoading(false);

    } catch (error) {
      setIsLoading(false);
      setActiveModal(true);

      setTimeout(() => {
        setActiveModal(false);
      }, 2000);
      console.log(error);
    }
  })

  const currentImage = image !== '' ? image : avatar;

  return(
    <>
      {
        isLoading && (
          <Loading isActive={isLoading} />
        )
      }
      <Modal isActive={activeModal} dismiss={dismissModal}>
        <ModalStyle>
          <AiFillAlert className='icon err' />
          <p>Erro ao atualizar as informações. Por favor fale com a Equipe do MyHope.</p>
        </ModalStyle>
      </Modal>
      <Container>
        <Nav>
          <Navigation>
            <div className='icon-previous' onClick={onClickPrevious}>
              <MdOutlineArrowBack className='icon' />
            </div>
            <h2 className='title'>Perfil</h2>
            <h2 className='finish-button' onClick={finish}>Finalizar</h2>
          </Navigation>
        </Nav>
        <Content>
          <Photo>
            <div className='profile'>
              <img src={currentImage} alt='avatar' id='profile'/>
              <p className='edit-link' onClick={editPhotoAction}>Editar Foto</p>
            </div>
          </Photo>
        </Content>
        <Body>
          <Input
            className='input'
            type='text'
            label='Nome'
            labelBackground={Colors.BackgroundColorPrimary}
            color={Colors.White}
            value={name}
            onChange={(e) => createName(e)}
          />
          <Input
            className='input'
            type='text'
            label='Sobrenome'
            labelBackground={Colors.BackgroundColorPrimary}
            color={Colors.White}
            value={lastName}
            onChange={(e) => createLastName(e)}
          />
          <Input
            className='input'
            type='email'
            label='Email'
            labelBackground={Colors.BackgroundColorPrimary}
            color={Colors.White}
            value={email}
            onChange={(e) => createEmail(e)}
          />
        </Body>
      </Container>
      {
        isActive ? (<EditPhoto isActive={isActive} dismiss={dismissModal} takeImage={takeImage} />) : null
      }
    </>
  )
}