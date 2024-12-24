import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [usuario, setUser] = useState({
    id: 123,
    nombre: 'Juan Matamala Cuevas',
  });

  return (
    <UserContext.Provider value={{ usuario, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;