import styled from 'styled-components';
import { Colors } from '../../styles/colors';

const List = styled.ul`
  margin-top: 20px;
  padding-bottom: 70px;
`
const ListItem = styled.li`
  margin-bottom: 15px;
  padding: 0px 20px 0px 5px;
  display: flex;
  align-items: center;
  .avatar {
    width: 45px;
    height: 45px;
    img{
      width: 45px;
      height: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .name,
  .position{
    font-size: 14px;
    color: ${Colors.White};
    font-weight: 500;
    letter-spacing: .5px;
  }
  .name {
    flex-grow: 2;
    margin-left: 20px;
  }
`

export {
  List,
  ListItem,
}