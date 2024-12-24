import React from 'react';
import  ReactDOM  from 'react-dom';

function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose}>Cerrar</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // Asegúrate de tener un elemento con id 'modal-root' en tu index.html
  );
}

export default Modal;
