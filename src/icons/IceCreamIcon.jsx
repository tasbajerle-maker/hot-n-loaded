// Fájl: src/icons/IceCreamIcon.jsx

import React from 'react';

const IceCreamIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    {/* Tölcsér */}
    <path d="M12 22l-4-9h8l-4 9z"></path>
    {/* Alsó gombóc */}
    <path d="M17.5 10A5.5 5.5 0 0 0 6.5 10h11z"></path>
    {/* Felső gombóc */}
    <path d="M12 4a5.5 5.5 0 0 0-5.5 5.5H12a5.5 5.5 0 0 0 5.5-5.5z"></path>
  </svg>
);

export default IceCreamIcon;