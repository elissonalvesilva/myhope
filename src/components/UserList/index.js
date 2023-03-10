import {
  List,
  ListItem,
} from './style';

import user from '../../assets/user.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';

export default function UserList(){
  return (
    <List>
      <ListItem>
        <div className='avatar'>
          <img src={user} alt='avatar'/>
        </div>
        <span className='name'>Jhon Doe</span>
        <span className='position'>1</span>
      </ListItem>
      <ListItem>
        <div className='avatar'>
          <img src={user2} alt='avatar'/>
        </div>
        <span className='name'>Roberta Henriksen</span>
        <span className='position'>2</span>
      </ListItem>
      <ListItem>
        <div className='avatar'>
          <img src={user3} alt='avatar'/>
        </div>
        <span className='name'>Desirae Davis</span>
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