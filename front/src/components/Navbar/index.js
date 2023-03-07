import {
  Nav,
  Logo,
  Coin,
} from './style';
import Profile from '../Profile';
import coinIcon from '../../assets/gold-coin.svg'

export default function Navbar() {
  return (
    <Nav>
      <Profile/>
      <Logo>
        <span className="my">MY</span>
        <span className="hope">HOPE</span>
      </Logo>
      <Coin>
        <img src={coinIcon} alt="coin"/>
        <span className="total">120</span>
      </Coin>
    </Nav>
  )
}