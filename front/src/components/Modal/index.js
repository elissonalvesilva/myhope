import {
  ModalContainer,
  ModalBottom,
  ModalTop,
  ModalCenter,
} from './style';




function Bottom({ children }) {
  return (
    <ModalBottom>
      { children }
    </ModalBottom>
  )
}

function Center({ children }) {
  return (
    <ModalCenter>
      { children }
    </ModalCenter>
  )
}

function Top({ children }) {
  return (
    <ModalTop>
      { children }
    </ModalTop>
  )
}


export default function Modal({ type = 'center', children }) {

  const TypeModal = {
    'bottom': Bottom({ children }),
    'top': Top({ children }),
    'center': Center({ children }),
  }

  return(
    <ModalContainer>
      { TypeModal[type] }
    </ModalContainer>
  )
}