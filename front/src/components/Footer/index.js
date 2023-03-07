import { IoGameControllerOutline } from 'react-icons/io5';
import { CiTrophy } from 'react-icons/ci';
import { CiWallet } from 'react-icons/ci';

import {
  Content,
  Menu,
  MenuItem,
} from './style';

export default function Footer() {
  return (
    <Content>
      <Menu>
        <MenuItem className='inactive'>
          <IoGameControllerOutline />
        </MenuItem>
        <MenuItem className='active'>
          <CiTrophy />
        </MenuItem>
        <MenuItem className='inactive'>
          <CiWallet/>
        </MenuItem>
      </Menu>
    </Content>
  )
}