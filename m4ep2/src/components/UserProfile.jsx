import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserProfile() {
  const {usuario} = useContext(UserContext);
  return (
    <React.Fragment>
      <h2>Perfil de Usuario</h2>
      <p>ID: {usuario.id}</p>
      <p>Nombre: {usuario.nombre}</p>
    </React.Fragment>
  );
}

export default UserProfile;