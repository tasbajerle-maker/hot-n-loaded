// Fájl: src/components/Modal.jsx

import React, { useEffect } from 'react';
import Portal from './Portal';
import './Modal.css';

function Modal({ children, onClose }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <Portal>
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="modal-close-button" onClick={onClose}>&times;</button>
          {children}
        </div>
      </div>
    </Portal>
  );
}

export default Modal;