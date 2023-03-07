import Container from "../../components/Container";

import {
  Header,
  Content,
  Tabs,
  Tab,
} from './style';

import coinIcon from '../../assets/gold-coin.svg'
import Statement from "../../components/Statement";


export default function Wallet() {
  return (
    <Container>
      <Header>
        <h1 className='name-coin'>Meus Dyos</h1>
        <div className='data'>
          <div className='coin'>
            <img src={coinIcon} alt='coin' />
          </div>
          <h2 className='value'>1,200</h2>
        </div>
        <Tabs>
          <Tab className='active'>Histórico</Tab>
          <Tab className='inactive'>Débitos</Tab>
        </Tabs>
      </Header>
      <Content>
        <Statement />
      </Content>
    </Container>
  )
}