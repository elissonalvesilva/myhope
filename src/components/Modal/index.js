import {
  ModalOverlay,
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


export default function Modal({ type = 'center', children, isActive = false, dismiss = () => {} }) {

  const TypeModal = {
    'bottom': Bottom({ children }),
    'top': Top({ children }),
    'center': Center({ children }),
  }

  if (isActive) {
    return(
      <>
        <ModalOverlay onClick={dismiss} />
        { TypeModal[type] }
      </>
    )
  }
  return null;
}