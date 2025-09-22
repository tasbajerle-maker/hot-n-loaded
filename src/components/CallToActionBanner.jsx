// Fájl: src/components/CallToActionBanner.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './CallToActionBanner.css';

function CallToActionBanner({ text, linkTo }) {
  return (
    <div className="cta-banner-sticky-wrapper">
      <Link to={linkTo} className="cta-banner">
        <span className="cta-banner-text">{text}</span>
        <span className="cta-banner-arrow">→</span>
      </Link>
    </div>
  );
}

export default CallToActionBanner;