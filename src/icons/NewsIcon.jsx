// Fájl: src/icons/NewsIcon.jsx

import React from 'react';

const NewsIcon = (props) => (
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
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 0 2 2"></path>
    <path d="M16 2v20"></path>
    <path d="M11 6H6"></path>
    <path d="M11 10H6"></path>
    <path d="M11 14H6"></path>
  </svg>
);

export default NewsIcon;