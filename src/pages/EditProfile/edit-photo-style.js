import styled from 'styled-components';

import { Colors } from '../../styles/colors';


const List = styled.ul`

`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  font-size: 18px;
  padding: 0 10px;
  .input {
    display: flex;
    align-items: center;
  }
  .icon {
    font-size: 22px;
    margin-right: 20px;
  }
  &:last-of-type {
    margin-bottom: 20px;
  }

  input[type='file'] {
    display: none;
  }
`


export {
  List,
  ListItem,
}