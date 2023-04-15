import Modal from "../Modal";
import gifLoading from '../../assets/loading.gif'
import { LoadingStyle } from "./style";



export default function Loading({ isActive }) {
  return (
    <>
      <Modal isActive={isActive}>
        <LoadingStyle>
          <p>Loading....</p>
          <img src={gifLoading} alt='loading' />
        </LoadingStyle>
      </Modal>
    </>
  )
}