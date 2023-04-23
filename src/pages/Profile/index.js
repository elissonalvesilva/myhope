import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { MdOutlineSportsScore } from 'react-icons/md';
import { MdOutlineArrowBack } from 'react-icons/md';
import Footer from "../../components/Footer";
import avatar from '../../assets/avatar.jpg';
import coinIcon from '../../assets/gold-coin.svg'

import {
  Container,
  Navigation,
  Nav,
  Header,
  ProfileContent,
  ProfileItem,
  Wallet,
  Position,
} from './style';
import { UserContext } from '../../contexts/UserContext';

export default function Profile() {
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  function editProfile() {
    navigate('/profile/edit');
  }

  function onClickPrevious() {
    navigate(-1);
  }

  const profileAvatar = user.image === '' ? avatar : user.image;

  return (
    <Container>
      <Nav>
        <Navigation>
          <div className='icon-previous' onClick={onClickPrevious}>
            <MdOutlineArrowBack className='icon' />
          </div>
          <h2 className='title'>Perfil</h2>
          <h2 className='edit-button' onClick={editProfile}>Editar</h2>
        </Navigation>
      </Nav>
      <Header>
        <h1>Seja Bem-Vindo, <span className='name'>{user.name}!</span></h1>
        <img src={profileAvatar} alt='photo user' />
      </Header>
      <ProfileContent>
        <ProfileItem>
          <Wallet>
            <h1 className='name-coin'>Dyos Coins</h1>
            <div className='data'>
              <div className='coin'>
                <img src={coinIcon} alt='coin' />
              </div>
              <h2 className='value'>{user.account.balance}</h2>
            </div>
          </Wallet>
          <Position>
            <h1 className='name-coin'>Posição</h1>
            <div className='data'>
              <div className='coin'>
                <MdOutlineSportsScore className='icon' />
              </div>
              <h2 className='value'>{user.position}</h2>
            </div>
          </Position>
        </ProfileItem>
      </ProfileContent>
      <Footer/>
    </Container>
  )
}