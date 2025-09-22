// Fájl: src/components/CategoryNav.jsx (Kiegészítve az activeCategory proppal)

import React from 'react';
import PropTypes from 'prop-types';
import './CategoryNav.css';

// MÓDOSÍTVA: Megkapja az 'activeCategory' propot is
function CategoryNav({ categories, mode, onCategorySelect, activeCategory }) {

  const handleNavClick = (e, categoryId) => {
    if (mode === 'scroll') {
      e.preventDefault();
      onCategorySelect(categoryId);
    }
  };

  return (
    <div className="category-nav-container">
      <nav className="category-nav">
        {categories.map(category => {
          // Dinamikusan hozzáadjuk az 'active' osztályt, ha a kategória ID-ja megegyezik az aktívval
          const isActive = category.id === activeCategory;
          const buttonClass = `category-nav-button ${isActive ? 'active' : ''}`;

          return (
            <a
              key={category.id}
              href={`/etlap#${category.id}`}
              className={buttonClass} // MÓDOSÍTVA
              onClick={(e) => handleNavClick(e, category.id)}
            >
              {category.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

CategoryNav.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  mode: PropTypes.oneOf(['navigate', 'scroll']).isRequired,
  onCategorySelect: PropTypes.func,
  activeCategory: PropTypes.string, // ÚJ PROP
};

CategoryNav.defaultProps = {
  onCategorySelect: () => {},
  activeCategory: '', // Alapértelmezett érték
};

export default CategoryNav;