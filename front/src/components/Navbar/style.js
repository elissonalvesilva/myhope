import styled from 'styled-components';

import { Colors } from '../../styles/colors';

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
`

const Logo = styled.div`
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  margin-left: 20px;
  span {
    font-family: MontserratAlt1Bold !important;
    letter-spacing: 5px;
  }
  .my {
    color: ${Colors.Purple};
  }
  .hope {
    color: ${Colors.Yellow};
  }
`

const Coin = styled.div`
  background-color: ${Colors.PurpleDark};
  padding: 5px 10px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  max-width: 90px;
  img {
    width: 20px;
  }
  .total {
    padding: 0;
    margin-left: 10px;

    color: ${Colors.White};
    font-weight: 500;
  }
`

const Navigation = styled.div`
  display: flex;
  width: 100%;
  .title {
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${Colors.White};
  }
  .icon-previous {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${Colors.Purple};
    font-size: 23px;

    .icon {
      margin-top: 5px;
    }
  }
`

export {
  Nav,
  Logo,
  Coin,
  Navigation,
}