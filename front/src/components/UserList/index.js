import {
  List,
  ListItem,
} from './style';

import user from '../../assets/user.jpg';

export default function UserList(){
  return (
    <List>
      <ListItem>
        <div className='avatar'>
          <img src={user} alt='avatar'/>
        </div>
        <span className='name'>Elisson Silva</span>
        <span className='position'>3</span>
      </ListItem>
      <ListItem>
        <div className='avatar'>
          <img src={user} alt='avatar'/>
        </div>
        <span className='name'>Elisson Silva</span>
        <span className='position'>3</span>
      </ListItem>
      <ListItem>
        <div className='avatar'>
          <img src={user} alt='avatar'/>
        </div>
        <span className='name'>Elisson Silva</span>
        <span className='position'>3</span>
      </ListItem>
      <ListItem>
        <div className='avatar'>
          <img src={user} alt='avatar'/>
        </div>
        <span className='name'>Elisson Silva</span>
        <span className='position'>3</span>
      </ListItem>
      <ListItem>
        <div className='avatar'>
          <img src={user} alt='avatar'/>
        </div>
        <span className='name'>Elisson Silva</span>
        <span className='position'>3</span>
      </ListItem>
      <ListItem>
        <div className='avatar'>
          <img src={user} alt='avatar'/>
        </div>
        <span className='name'>Elisson Silva</span>
        <span className='position'>3</span>
      </ListItem>
    </List>
  )
}