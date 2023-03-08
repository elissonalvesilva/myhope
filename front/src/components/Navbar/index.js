import { useNavigate } from 'react-router-dom';
import {
  Nav,
  Logo,
  Coin,
} from './style';
import Profile from '../Profile';
import coinIcon from '../../assets/gold-coin.svg'

export default function Navbar() {
  const navigate = useNavigate();

  function onClick() {
    navigate('/ranking');
  }
  return (
    <Nav>
      <Profile/>
      <Logo>
        <span className="my">MY</span>
        <span className="hope">HOPE</span>
      </Logo>
      <Coin onClick={onClick}>
        <img src={coinIcon} alt="coin"/>
        <span className="total">120</span>
      </Coin>
    </Nav>
  )
}