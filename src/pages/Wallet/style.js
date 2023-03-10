import styled from 'styled-components';
import { Colors } from '../../styles/colors';


const Header = styled.div`
  width: 100vw;
  padding: 20px 25px 20px 25px;
  .data {
    padding: 40px 20px 20px 0px;
    display: flex;
    align-items: center;
  }
  .name-coin {
    color: ${Colors.White};
    font-weight: bold;
    font-size: 28px;
    font-weight: 400;
  }
  .coin {
    width: 60px;
    height: 60px;
    padding: 10px;
    background-color: rgba(91, 38, 166, .15);
    border-radius: 10px;
  }

  img {
    width: 100%;
  }

  .value {
    color: ${Colors.White};
    font-weight: bold;
    font-size: 36px;
    margin-left: 30px;
  }
`;

const Tabs = styled.ul`
  width: 100%;
  margin-top: 20px;
`
const Tab = styled.li`
  display: inline-block;
  margin-right: 20px;
  font-weight: 300;
  &.inactive {
    color: rgba(255, 255, 255, 0.4);
  }
  &.active {
    position: relative;
    color: ${Colors.White};
    padding: 10px 15px;
    border-radius: 30px;
    background-color: rgba(91, 38, 166, .25);
  }
`

const Content = styled.div`
  width: 100vw;
  min-height: 400px;
  max-height: 100vh;
  border-radius: 20px 20px 0 0;
  ${Colors.PrimaryGradient}
  padding: 30px 25px 80px 25px;
`

export {
  Header,
  Content,
  Tabs,
  Tab
}