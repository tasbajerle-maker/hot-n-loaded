// Fájl: src/components/Portal.jsx

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Portal({ children }) {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    const portalRoot = document.getElementById('portal-root');
    portalRoot.appendChild(elRef.current);
    return () => portalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(children, elRef.current);
}

export default Portal;