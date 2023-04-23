import { useContext } from "react";

import Container from "../../components/Container";

import {
  Header,
  Content,
  Tabs,
  Tab,
} from './style';

import coinIcon from '../../assets/gold-coin.svg'
import Statement from "../../components/Statement";
import { UserContext } from '../../contexts/UserContext';

export default function Wallet() {
  const [user, setUser] = useContext(UserContext);

  return (
    <Container>
      <Header>
        <h1 className='name-coin'>Meus Dyos</h1>
        <div className='data'>
          <div className='coin'>
            <img src={coinIcon} alt='coin' />
          </div>
          <h2 className='value'>{user.account.balance}</h2>
        </div>
        <Tabs>
          <Tab className='active'>Histórico</Tab>
        </Tabs>
      </Header>
      <Content>
        <Statement statements={user.account.statements || []}/>
      </Content>
    </Container>
  )
}