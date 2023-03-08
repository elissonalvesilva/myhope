import { MdOutlineSportsScore } from 'react-icons/md';
import Container from "../../components/Container";
import user from '../../assets/user.jpg';
import coinIcon from '../../assets/gold-coin.svg'

import {
  Header,
  ProfileContent,
  ProfileItem,
  Wallet,
  Position,
} from './style';
import { Colors } from "../../styles/colors";

export default function Profile() {
  return (
    <Container canGoBack arrowColor={Colors.White}>
      <Header>
        <h1>Seja Bem-Vindo, <span className='name'>Elisson!</span></h1>
        <img src={user} alt='photo user' />
      </Header>
      <ProfileContent>
        <ProfileItem>
          <Wallet>
            <h1 className='name-coin'>Dyos Coins</h1>
            <div className='data'>
              <div className='coin'>
                <img src={coinIcon} alt='coin' />
              </div>
              <h2 className='value'>1,200</h2>
            </div>
          </Wallet>
          <Position>
            <h1 className='name-coin'>Posição</h1>
            <div className='data'>
              <div className='coin'>
                <MdOutlineSportsScore className='icon' />
              </div>
              <h2 className='value'> 1 Lugar</h2>
            </div>
          </Position>
        </ProfileItem>
      </ProfileContent>
    </Container>
  )
}