import { HiOutlineInformationCircle } from 'react-icons/hi';
import Container from "../../components/Container";
import {
  Content,
  Header,
  Info,
  Champions,
  Champion,
  CurrentRank,
} from "./style";

import crown from '../../assets/crown.gif';
import user from '../../assets/user.jpg';
import UserList from '../../components/UserList';

export default function Ranking() {
  return(
    <Container>
      <Content>
        <Header>
          <h1>Ranking</h1>
          <Info>
            <span>Como funciona ?</span>
            <HiOutlineInformationCircle className='icon'/>
          </Info>
        </Header>
        <Champions>
          <Champion className='second'>
            <img src={user} className='user-avatar' alt='user avatar' />
            <span className='place'>2</span>
            <span className='name'>Eduarda Alves</span>
          </Champion>
          <Champion className='first'>
            <div className='crown'>
              <img src={crown} className='crown-winner' alt='crown' />
            </div>
            <img src={user} className='user-avatar' alt='user avatar' />
            <span className='place'>1</span>
            <span className='name'>Elisson Silva</span>
          </Champion>
          <Champion className='third'>
            <img src={user} className='user-avatar' alt='user avatar' />
            <span className='place'>3</span>
            <span className='name'>Elizabeth Silva</span>
          </Champion>
        </Champions>
        <CurrentRank>
          <h2>Sua posição atual</h2>
          <span className='position'>1</span>
        </CurrentRank>
        <UserList />
      </Content>
    </Container>
  )
}