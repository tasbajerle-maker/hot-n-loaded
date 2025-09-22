// Fájl: src/EtlapPage.jsx (Scrollspy logikával felturbózva)

import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import useDocumentTitle from './hooks/useDocumentTitle';
import './EtlapPage.css';
import CategoryNav from './components/CategoryNav';
import { categories, menuData } from './data/menuData';

function EtlapPage() {
  useDocumentTitle(
    'Teljes Étlapunk: Burgerek, Tálak, Köretek - Hot & Loaded',
    'Böngészd végig a Hot & Loaded teljes kínálatát! Kézműves smash burgerek, bőséges tálak, ropogós köretek és házi mártogatósok.'
  );

  const sectionRefs = useRef({});
  const location = useLocation();
  
  // --- ÚJ RÉSZ KEZDETE ---
  const [activeCategory, setActiveCategory] = useState('');
  const navRef = useRef(null); // Ref a nav sáv magasságához

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = navRef.current ? navRef.current.offsetHeight : 0;
      const scrollPosition = window.scrollY + navHeight + 80; // Offset a jobb érzékelésért

      let currentCategory = '';
      categories.forEach(category => {
        const section = sectionRefs.current[category.id];
        if (section && section.offsetTop <= scrollPosition) {
          currentCategory = category.id;
        }
      });
      
      setActiveCategory(currentCategory);
    };

    window.addEventListener('scroll', handleScroll);
    // Lefuttatjuk egyszer a betöltéskor is
    handleScroll();

    // Takarítás: az event listener eltávolítása, amikor a komponens elhagyja a DOM-ot
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Az üres tömb biztosítja, hogy ez csak egyszer fusson le (fel- és leszereléskor)
  // --- ÚJ RÉSZ VÉGE ---

  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash && sectionRefs.current[hash]) {
      setTimeout(() => {
        sectionRefs.current[hash].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }, [location.hash]);

  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="etlap-page-container">
      <div className="etlap-header-image">
        <h2>Teljes Kínálatunk</h2>
      </div>
      {/* MÓDOSÍTVA: Ref és az új prop átadása */}
      <div className="etlap-nav-container-sticky" ref={navRef}>
        <CategoryNav 
          categories={categories}
          mode="scroll"
          onCategorySelect={scrollToSection}
          activeCategory={activeCategory} // Átadjuk az aktív kategóriát
        />
      </div>
      <main className="etlap-content">
        {categories.map(category => (
          menuData[category.id] && menuData[category.id].length > 0 && (
            <section
              key={category.id}
              id={category.id}
              ref={el => sectionRefs.current[category.id] = el}
              className="etlap-section"
            >
              <h3 style={{ borderBottomColor: category.color }}>{category.name}</h3>
              <div className="menu-items-grid">
                {menuData[category.id].map(item => (
                  <div key={item.name} className="menu-item" style={{ borderLeftColor: category.color }}>
                    <div className="item-header">
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">{item.price}</span>
                    </div>
                    {item.ingredients && (
                      <p className="item-ingredients">{item.ingredients}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )
        ))}
      </main>
    </div>
  );
}

export default EtlapPage;