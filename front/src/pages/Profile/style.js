import styled from 'styled-components';
import { Colors } from '../../styles/colors';

const Container = styled.div`
  width: 100vw;
`

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
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
  .edit-button {
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
      color: ${Colors.White};
    }
  }
`

const Header = styled.div`
  height: 250px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 65px 24px 0 24px;
  position: absolute;
  top: 0;
  background: rgb(152,88,241);
  background: linear-gradient(164deg, rgba(152,88,241,1) 0%, rgba(139,65,242,1) 43%, rgba(91,38,166,1) 99%);
  z-index: -1;
  h1 {
    padding: 20px 0;
    color: ${Colors.White};
    line-height: 25px;
    font-size: 22px;
  }
  .name {
    display: block;
    font-weight: bold;
  }
  img {
    position: relative;
    top: 20px;
    width: 80px;
    height: 80px;
    border: 2px solid #fff;
    border-radius: 50%;
    object-fit: cover;
  }
`

const ProfileContent = styled.div`
  margin-top: 150px;
  border-radius: 20px 20px 0 0 ;
  z-index: 999;
  background-color: ${Colors.BackgroundColorPrimary};
  height: 50vh;
  padding: 40px 24px;
`

const ProfileItem = styled.div`
  color: ${Colors.White};
  display: flex;
  flex-direction: column;

  .coin {
    background-color: rgba(242, 227, 7, 0.2);
    padding: 10px;
    border-radius: 15px;
    margin-right: 20px;
  }
  img {
    width: 50px;
    height: 50px;
  }

  h1 {
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 100;
  }

  .data {
    display: flex;
    align-items: center;
    ${Colors.PrimaryGradient}
    padding: 20px 20px;
    border-radius: 30px;
  }

  .value {
    font-size: 42px;
    font-weight: bold;
  }
`

const Wallet = styled.div`
  margin-bottom: 30px;
`

const Position = styled.div`
  .coin {
    .icon {
      position: relative;
      top: 2px;
      font-size: 42px;
    }
  }
`

export {
  Container,
  Nav,
  Navigation,
  Header,
  ProfileContent,
  ProfileItem,
  Wallet,
  Position,
}