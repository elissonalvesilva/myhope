import { useState } from 'react';
import { HiOutlinePhoto } from 'react-icons/hi2';
import { IoCameraOutline } from 'react-icons/io5';
import Modal from '../../components/Modal';
import TakePicture from '../TakePicture';

import {
  List,
  ListItem
} from './edit-photo-style';

export default function EditPhoto({ isActive, dismiss, takeImage }) {
  const [openCamera, setOpenCamera] = useState(false);

  return(
    <>
      <TakePicture open={openCamera} closeCamera={dismiss} setImage={takeImage} />
      <Modal type='bottom' isActive={isActive} dismiss={dismiss}>
        <List>
          <ListItem>
            <HiOutlinePhoto className='icon' />
            Escolha da biblioteca de foto
          </ListItem>
          <ListItem onClick={() => {setOpenCamera(true)}}>
            <IoCameraOutline className='icon' />
            Tire uma foto
          </ListItem>
        </List>
      </Modal>
    </>
  )
}