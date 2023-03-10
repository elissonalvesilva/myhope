import styled from 'styled-components';
import { Colors } from '../../styles/colors';

const Container = styled.div`
  background-color: ${Colors.BackgroundColorPrimary};
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
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
  .finish-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${Colors.BlueLink};
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

export {
  Container,
  Nav,
  Navigation,
}