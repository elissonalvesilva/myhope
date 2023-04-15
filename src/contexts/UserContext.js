import * as React from 'react';
import { Buffer } from 'buffer';

import { createContext, useState, useEffect } from 'react';


export const UserContext = createContext([
  {},
  () => {},
]);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function storeUser(user) {
    setUser(user);
    const encodedUser = Buffer.from(JSON.stringify(user)).toString('base64');
    localStorage.setItem('user', encodedUser);
  }

  useEffect(() => {
    if(!user) {
      const userFromLocalStorage = Buffer.from(localStorage.getItem("user"), 'base64').toString('ascii');
      setUser(JSON.parse(userFromLocalStorage));
    }
  }, [user])


  return (
    <UserContext.Provider value={[user, storeUser]}>
      {children}
    </UserContext.Provider>
  )

};
