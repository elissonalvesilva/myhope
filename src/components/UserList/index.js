import {
  List,
  ListItem,
} from './style';

import avatar from '../../assets/avatar.jpg';

export default function UserList({ users, reference }){
  return (
    <List ref={reference}>
      {
        users.map((user, index) => (
          <ListItem key={index}>
            <div className='avatar'>
              <img src={user.image || avatar} alt='avatar'/>
            </div>
            <span className='name'>{ user.name }</span>
            <span className='position'>{index + 1}</span>
          </ListItem>
        ))
      }
    </List>
  )
}