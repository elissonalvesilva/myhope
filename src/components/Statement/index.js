import { BiBible } from 'react-icons/bi';

import {
  List,
  ListItem,
} from './style';

import coinIcon from '../../assets/gold-coin.svg'


export default function Statement({ statements }) {
  console.log(statements)
  return (
    <List>
      <ListItem>
        <div className='icon'>
          <BiBible/>
        </div>
        <div className='type-data'>
          <span className='type'>Ler a bíblia</span>
          <span className='description'>Foi adicionado 100 Dyos</span>
        </div>
        <div className='data'>
          <img src={coinIcon} alt='coin' />
          <span className='value'>+100</span>
        </div>
      </ListItem>
      <ListItem>
        <div className='icon'>
          <BiBible/>
        </div>
        <div className='type-data'>
          <span className='type'>Ler a bíblia</span>
          <span className='description'>Foi adicionado 100 Dyos</span>
        </div>
        <div className='data'>
          <img src={coinIcon} alt='coin' />
          <span className='value'>+100</span>
        </div>
      </ListItem>
      <ListItem>
        <div className='icon'>
          <BiBible/>
        </div>
        <div className='type-data'>
          <span className='type'>Ler a bíblia</span>
          <span className='description'>Foi adicionado 100 Dyos</span>
        </div>
        <div className='data'>
          <img src={coinIcon} alt='coin' />
          <span className='value'>+100</span>
        </div>
      </ListItem>
      <ListItem>
        <div className='icon'>
          <BiBible/>
        </div>
        <div className='type-data'>
          <span className='type'>Ler a bíblia</span>
          <span className='description'>Foi adicionado 100 Dyos</span>
        </div>
        <div className='data'>
          <img src={coinIcon} alt='coin' />
          <span className='value'>+100</span>
        </div>
      </ListItem>
      <ListItem>
        <div className='icon'>
          <BiBible/>
        </div>
        <div className='type-data'>
          <span className='type'>Ler a bíblia</span>
          <span className='description'>Foi adicionado 100 Dyos</span>
        </div>
        <div className='data'>
          <img src={coinIcon} alt='coin' />
          <span className='value'>+100</span>
        </div>
      </ListItem>
      
    </List>
  )
}