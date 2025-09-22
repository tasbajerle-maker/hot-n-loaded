// Fájl: src/icons/BurgerIcon.jsx

import React from 'react';

const BurgerIcon = (props) => (
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
    {/* Felső zsemle (kerekebb) */}
    <path d="M21 10c0-3.31-4.03-6-9-6S3 6.69 3 10h18z"></path>
    {/* Alsó zsemle */}
    <path d="M21 15c0 1.66-4.03 3-9 3S3 16.66 3 15"></path>
    {/* Húspogácsa/sajt */}
    <path d="M3 12h18"></path>
  </svg>
);

export default BurgerIcon;