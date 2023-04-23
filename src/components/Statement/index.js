import { BiBible } from 'react-icons/bi';

import {
  List,
  ListItem,
} from './style';

import coinIcon from '../../assets/gold-coin.svg'


export default function Statement({ statements }) {
  return (
    <List>
      {
        statements?.map((statement, index) => (
          <ListItem key={index}>
            <div className='icon'>
              <BiBible/>
            </div>
            <div className='type-data'>
              <span className='type'>{statement.content}</span>
              <span className='description'>Foi {statement.value > 0 ? 'adicionado' : 'removido'} {statement.value} Dyos</span>
            </div>
            <div className='data'>
              <img src={coinIcon} alt='coin' />
              <span className='value'>{statement.value < 0 ? '' : '+'}{statement.value}</span>
            </div>
          </ListItem>
        ))
      }      
    </List>
  )
}