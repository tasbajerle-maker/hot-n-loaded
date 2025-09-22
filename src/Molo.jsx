// Fájl: src/Molo.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import useDocumentTitle from './hooks/useDocumentTitle';
import './Molo.css';
import B2BDrawer from './B2BDrawer';
import moloPanorama from './images/molo.png';

const LeftArrowIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>;
const RightArrowIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;

function Molo() {
  // MÓDOSÍTVA: Hozzáadtuk a harmadik paramétert, a strukturált adatot
  useDocumentTitle(
    'Hot & Loaded - Smash Burgerek és Kézműves Fagylalt',
    'Budapest legújabb smash burger és fagylaltozója. Fedezd fel kínálatunkat egy egyedi, interaktív főoldalon keresztül!',
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Hot & Loaded',
      'url': 'https://www.hotandloaded.hu', // Cseréld le a végleges domainedre
      'description': 'Interaktív weboldal smash burgerek, kézműves fagylalt és ipari hűtő szerviz szolgáltatásokkal.',
      'publisher': {
        '@type': 'Organization',
        'name': 'Hot & Loaded'
      }
    }
  );

  const [bgPosition, setBgPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipeStart: () => setIsDragging(true),
    onSwiping: (eventData) => {
      const newPosition = 50 - (eventData.deltaX / 5);
      if (newPosition >= 0 && newPosition <= 100) setBgPosition(newPosition);
    },
    onSwiped: (eventData) => {
      setIsDragging(false);
      const threshold = 40; 

      if (eventData.deltaX > threshold) { // Ujj balról jobbra -> FAGYI
        navigate('/fagyi');
      } 
      else if (eventData.deltaX < -threshold) { // Ujj jobbról balra -> BURGER
        navigate('/burger');
      }
      else {
        setBgPosition(50);
      }
    },
    trackMouse: true,
  });

  const containerClass = `molo-container ${isDragging ? 'is-dragging' : ''}`;

  return (
    <div {...handlers} className={containerClass} style={{backgroundImage: `url(${moloPanorama})`, backgroundPosition: `${bgPosition}% center`}}>
      <div className="drag-indicator">
        <div className="arrow left"><LeftArrowIcon /></div>
        <span className="drag-text">HÚZD OLDALRA</span>
        <div className="arrow right"><RightArrowIcon /></div>
      </div>
      <B2BDrawer />
    </div>
  );
}

export default Molo;