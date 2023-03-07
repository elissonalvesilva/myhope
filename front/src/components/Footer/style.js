import styled from 'styled-components';
import { Colors } from '../../styles/colors';

const Content = styled.div`
  position: fixed;
  bottom: 0;
  background-color: ${Colors.BackgroundColorPrimary};
  -webkit-box-shadow: -1px -34px 54px 0px rgba(20, 6, 38, 09);
  -moz-box-shadow: -1px -34px 54px 0px rgba(20, 6, 38, 09);
  box-shadow: -1px -34px 54px 0px rgba(20, 6, 38, 09);
  height: 60px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-radius: 30px 30px 0 0;
`

const Menu = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuItem = styled.li`
  font-size: 28px;
  &.inactive {
    color: rgba(255, 255, 255, 0.4);
  }
  &.active {
    color: ${Colors.White};
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: -18px;
      left: 9px;
      display: inline-block;
      height: 0.5em;
      vertical-align: bottom;
      width: 10px;
      border-top: 2.5px solid ${Colors.Purple};
      border-radius: 1px;
    }
  }
`

export {
  Content,
  Menu,
  MenuItem,
}