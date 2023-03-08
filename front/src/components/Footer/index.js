import { NavLink } from "react-router-dom";
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { IoGameControllerOutline } from 'react-icons/io5';
import { CiTrophy } from 'react-icons/ci';
import { CiWallet } from 'react-icons/ci';
import {
  Content,
  Menu,
  MenuItem,
} from './style';

export default function Footer() {

  let activeClassName = "active";

  return (
    <Content>
      <Menu>
        <MenuItem>
          <NavLink
            to='/quiz'
            className={({ isActive }) =>
              isActive ? activeClassName : 'inactive'
            }
          >
            <IoGameControllerOutline />
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to='/ranking'
            className={({ isActive }) =>
              isActive ? activeClassName : 'inactive'
            }
          >
            <CiTrophy />
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to='/wallet'
            className={({ isActive }) =>
              isActive ? activeClassName : 'inactive'
            }
          >
            <CiWallet/>
          </NavLink>
        </MenuItem>
        <MenuItem className='profile'>
          <NavLink
            to='/profile'
            className={({ isActive }) =>
              isActive ? activeClassName : 'inactive'
            }
          >
            <HiOutlineUserCircle/>
          </NavLink>
        </MenuItem>
      </Menu>
    </Content>
  )
}