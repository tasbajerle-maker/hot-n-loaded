import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import useDocumentTitle from './hooks/useDocumentTitle';
import './Molo.css';
import B2BDrawer from './B2BDrawer';
import Modal from './components/Modal';
import SnowfallCanvas from './components/SnowfallCanvas'; 

const LeftArrowIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>;
const RightArrowIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
// --- ÚJ IKON A GOMBHOZ ---
const OrderIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>;


function Molo() {
  useDocumentTitle(
    'Hot & Loaded - Smash Burgerek és Kézműves Fagylalt',
    'Budapest legújabb smash burger és fagylaltozója. Fedezd fel kínálatunkat egy egyedi, interaktív főoldalon keresztül!',
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Hot & Loaded',
      'url': 'https://www.hotandloaded.hu',
      'description': 'Interaktív weboldal smash burgerek, kézműves fagylalt és ipari hűtő szerviz szolgáltatásokkal.',
      'publisher': {
        '@type': 'Organization',
        'name': 'Hot & Loaded'
      }
    }
  );

  const [bgPosition, setBgPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isB2bModalOpen, setIsB2bModalOpen] = useState(false);
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

      if (eventData.deltaX > threshold) {
        navigate('/fagyi');
      } 
      else if (eventData.deltaX < -threshold) {
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
    <>
      <div {...handlers} className={containerClass} style={{backgroundImage: `url(/images/molo.png)`, backgroundPosition: `${bgPosition}% bottom`}}>
        
        <SnowfallCanvas numberOfFlakes={150} zIndex={1} /> 
        
        {/* --- ÚJ, KÖZÉPSŐ GOMB HOZZÁADVA --- */}
        <a 
          href="https://enfagyi-app-122a0.web.app/drive" 
          className="molo-app-button"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <OrderIcon />
          <span>Irány a Rendelés</span>
        </a>
        {/* --- ÚJ GOMB VÉGE --- */}

        <div className="drag-indicator">
          <div className="arrow left"><LeftArrowIcon /></div>
          <span className="drag-text">HÚZD OLDALRA</span>
          <div className="arrow right"><RightArrowIcon /></div>
        </div>
        <B2BDrawer onOpen={() => setIsB2bModalOpen(true)} />
      </div>

      {isB2bModalOpen && (
        <Modal onClose={() => setIsB2bModalOpen(false)}>
          <div className="b2b-modal-content">
            <h2>Céges és B2B Ajánlatok</h2>
            <p>
              Tervezzen rendezvényt, vagy lepje meg kollégáit egyedi fagylaltkiszállítással! Viszonteladó partnereket is keresünk kávézók, éttermek számára.
            </p>
            <ul>
              <li>Fagylaltkiszállítás rendezvényekre</li>
              <li>Viszonteladói partnerség</li>
              <li>Fagylaltpultok kihelyezése (7-től 24 tégelyes méretig)</li>
            </ul>
            <p>
              Szállítási területünk Budapest és Pest megye egyes részei. Vegye fel velünk a kapcsolatot egyedi ajánlatért!
            </p>
            <a href="mailto:nyaloda@gmail.com" className="b2b-email-link">nyaloda@gmail.com</a>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Molo;