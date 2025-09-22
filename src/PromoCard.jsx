// Fájl: src/PromoCard.jsx (Lusta képbetöltéssel optimalizálva)

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './PromoCard.css';

function PromoCard({ image, title, description, price, tags, linkTo, expandable = false }) {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e) => {
    if (e.target.tagName === 'A') {
      return;
    }
    
    if (expandable) {
      setIsExpanded(!isExpanded);
    } 
    else if (linkTo) {
      navigate(linkTo);
    }
  };

  const previewText = description.length > 120 ? description.substring(0, 120) + '...' : description;
  const displayText = expandable && !isExpanded ? previewText : description;
  
  const cardCursorStyle = expandable || linkTo ? { cursor: 'pointer' } : {};

  return (
    <div className="promo-card" onClick={handleClick} style={cardCursorStyle}>
      {image && (
        <div className="card-image-container">
          {/* EZ AZ EGYETLEN, DE FONTOS VÁLTOZÁS */}
          <img className="card-image" src={image} alt={title} loading="lazy" />
        </div>
      )}
      <div className="card-content">
        {tags && (
          <div className="card-tags">
            {tags.map(tag => (
              <span key={tag} className="card-tag">{tag}</span>
            ))}
          </div>
        )}
        <h3 className="card-title">{title}</h3>

        <p className={`card-description ${isExpanded ? 'expanded' : ''}`}>{displayText}</p>

        {expandable && !isExpanded && description.length > 120 && (
          <span className="expand-prompt">Kattints a folytatáshoz...</span>
        )}
        
        <div className="card-footer">
          <span className="card-price">{price}</span>
        </div>
      </div>
    </div>
  );
}

PromoCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  linkTo: PropTypes.string,
  expandable: PropTypes.bool,
};

export default PromoCard;