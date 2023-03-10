import * as React from 'react';

import { createContext, useState } from 'react';

export const ModalContext = createContext([
  {},
  () => {},
]);

export const ModalProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  if(isActive) {
    document.querySelector('body').classList.add('modal-active');
  }

  return (
    <ModalContext.Provider value={[isActive, setIsActive]}>
      {children}
    </ModalContext.Provider>
  )

};
