// context api to persist user id data

import React, { useState, createContext } from 'react';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);

  return (
    <UserContext.Provider value={{ userID, setUserID }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };