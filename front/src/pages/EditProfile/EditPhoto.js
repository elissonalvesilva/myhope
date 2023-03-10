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

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    takeImage(base64);
    dismiss();
  };

  return(
    <>
      <TakePicture open={openCamera} closeCamera={dismiss} setImage={takeImage} />
      <Modal type='bottom' isActive={isActive} dismiss={dismiss}>
        <List>
          <ListItem>
            <label className='input'>
              <input type="file" accept="image/x-png,image/jpeg,image/gif" onChange={handleFileUpload} />
              <HiOutlinePhoto className='icon' />
              Escolha da biblioteca de foto
            </label>
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