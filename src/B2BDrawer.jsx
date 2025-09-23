// Fájl: src/B2BDrawer.jsx

import React from 'react';

function B2BDrawer({ onOpen }) {
  // A Tailwind osztályneveket lecseréltük saját, egyedi nevekre
  return (
    <div className="b2b-drawer-container">
        <button 
          onClick={onOpen}
          className="b2b-drawer-button"
        >
            B2B Ajánlatok
        </button>
    </div>
  );
}

export default B2BDrawer;