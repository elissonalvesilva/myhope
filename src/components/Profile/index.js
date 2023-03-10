import { useNavigate } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { User } from "./style";


export default function Profile() {
  const navigate = useNavigate();
  return (
    <User onClick={
      () => {
        navigate('/profile');
      }
    }>
      <CgProfile/>
    </User>
  )
}