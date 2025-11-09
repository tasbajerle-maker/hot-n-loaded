// Fájl: src/EtlapPage.jsx (Scrollspy logikával és FAB-bal)

import React, { useState, useEffect, useRef } from 'react';
// --- MÓDOSÍTVA: Link importálva ---
import { useLocation, Link } from 'react-router-dom';
import useDocumentTitle from './hooks/useDocumentTitle';
import './EtlapPage.css';
import CategoryNav from './components/CategoryNav';
import { categories, menuData } from './data/menuData';

// --- ÚJ: Ikon a buborékhoz ---
const CartIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>;

function EtlapPage() {
  useDocumentTitle(
    'Teljes Étlapunk: Burgerek, Tálak, Köretek - Hot & Loaded',
    'Böngészd végig a Hot & Loaded teljes kínálatát! Kézműves smash burgerek, bőséges tálak, ropogós köretek és házi mártogatósok.'
  );

  const sectionRefs = useRef({});
  const location = useLocation();
  
  // --- Scrollspy logika (Változatlan) ---
  const [activeCategory, setActiveCategory] = useState('');
  const navRef = useRef(null); 

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = navRef.current ? navRef.current.offsetHeight : 0;
      const scrollPosition = window.scrollY + navHeight + 80; 

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
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  // --- Scrollspy logika vége ---

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
      
      <div className="etlap-nav-container-sticky" ref={navRef}>
        <CategoryNav 
          categories={categories}
          mode="scroll"
          onCategorySelect={scrollToSection}
          activeCategory={activeCategory}
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

      {/* --- ÚJ "BUBORÉK" HOZZÁADVA --- */}
      {/* Ez a gomb fixen a képernyőn marad és a fő rendelési oldalra (pl. /drive) visz */}
      <Link to="/drive" className="etlap-order-fab">
        <CartIcon />
        <span className="fab-text">Rendelés</span>
      </Link>
      {/* --- ÚJ RÉSZ VÉGE --- */}

    </div>
  );
}

export default EtlapPage;