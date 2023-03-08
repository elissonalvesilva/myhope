import { useNavigate } from 'react-router-dom';
import {
  Nav,
  Logo,
  Coin,
} from './style';
import Profile from '../Profile';
import coinIcon from '../../assets/gold-coin.svg'

export default function Navbar({ totalCoins = 0 }) {
  const SUFFIXES = 'KMBT'
  function getSuffixedNumber(num) {
      if(num == 0) {
        return num;
      }
      var power = Math.floor(Math.log10(num));
      var index = Math.floor(power / 3);
      num = Math.round(num / Math.pow(10, (index * 3)));
      return num + (SUFFIXES[index - 1] || 0);
  }
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
        <span className="total">{getSuffixedNumber(totalCoins)}</span>
      </Coin>
    </Nav>
  )
}