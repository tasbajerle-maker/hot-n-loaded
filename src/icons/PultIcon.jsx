// Fájl: src/icons/PultIcon.jsx

import React from 'react';

const PultIcon = (props) => (
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
    <path d="M2 15h20v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4z"></path>
    <path d="M2 15V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8"></path>
    <circle cx="7" cy="11" r="1.5"></circle>
    <circle cx="12" cy="11" r="1.5"></circle>
    <circle cx="17" cy="11" r="1.5"></circle>
  </svg>
);

export default PultIcon;