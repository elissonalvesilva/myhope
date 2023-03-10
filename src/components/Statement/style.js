import styled from 'styled-components';

import { Colors } from '../../styles/colors';

const List = styled.ul`
`

const ListItem = styled.li`
  margin-bottom: 20px;
  background-color: ${Colors.White};
  padding: 10px 15px;
  display: flex;
  border-radius: 30px;
  height: 60px;
  box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.2);
  align-items: center;
  .icon {
    background-color: #B47059;
    padding: 10px 12px;
    border-radius: 50%;
    color: ${Colors.White};
    font-size: 18px;
  }

  .type-data {
    flex-grow: 3;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .type {
      color: ${Colors.BackgroundColorPrimary};
      font-weight: bold;
      font-size: 12px;
      margin-bottom: 5px;
    }
    .description {
      text-transform: uppercase;
      color: ${Colors.Gray};
      font-size: 10px;
    }
  }

  .data{
    display: flex;
    align-items: center;
    height: 35px;
    padding: 5px 15px;
    border-radius: 30px;
    background-color: rgba(242, 227, 7, .3);
    img {
      width: 15px;
      margin-right: 10px;
    }
    .value {
      color: #e8bb40;
      font-weight: bold;
    }
  }
`

export {
  List,
  ListItem,
}