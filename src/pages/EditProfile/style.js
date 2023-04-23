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
    margin-left: 40px;
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

const Content = styled.div`
`

const Photo = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  width: 100%;
  border-bottom: .1px solid rgba(255, 255, 255, .1);

  .profile {
    height: 200px;
    width: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 60px;
      height: 120px;
      border-radius: 50%;
      width: 100%;
      object-fit: cover;
    }

    .edit-link {
      font-size: 14px;
      margin-top: 15px;
      color: ${Colors.BlueLink};
    }
  }
`

const Body = styled.form`
  width: 100%;
  padding: 28px 24px;

  .input {
    margin-top: 25px;
  }
`


const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
  line-height: 23px;
  .icon {
    &.err {
      color: red;
    }
    &.success {
      color: green;
    }
    font-size: 40px;
    margin-bottom: 30px;
  }
`;


export {
  Container,
  Nav,
  Navigation,
  Content,
  Photo,
  Body,
  ModalStyle
}