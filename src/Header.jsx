import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import SideMenu from './SideMenu';
import useLiveKinalat from './hooks/useLiveKinalat';

// Ikonok importálása (a saját készítésűeket helyben definiáljuk)
import MenuIcon from './icons/MenuIcon';
import BurgerIcon from './icons/BurgerIcon';
import IceCreamIcon from './icons/IceCreamIcon';
import NewsIcon from './icons/NewsIcon';
import ToolIcon from './icons/ToolIcon';
import HomeIcon from './icons/HomeIcon';


// --- JAVÍTOTT ÉS ÚJ IKONOK HELYBEN DEFINIÁLVA ---

const CouponIconWithPercent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
    <line x1="7" y1="7" x2="7.01" y2="7"></line>
    <circle cx="17" cy="7" r="4.5" fill="#e53e3e" stroke="white" strokeWidth="1"></circle>
    <text x="17" y="8.5" fontSize="4" fill="white" fontWeight="bold" textAnchor="middle">%</text>
  </svg>
);

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"></polyline>
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0-7-9-13-9-13s-9 6-9 13c0 4.5 4 8 9 8s9-3.5 9-8z"></path><circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const IceCreamScoopIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2.828 2.828 0 0 0-2 5 2.828 2.828 0 0 0-2 5 2.828 2.828 0 0 0 2 5 2.828 2.828 0 0 0 2 5 2.828 2.828 0 0 0 2-5 2.828 2.828 0 0 0 2-5 2.828 2.828 0 0 0-2-5 2.828 2.828 0 0 0-2-5z"/>
    </svg>
);


function Header() {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [isPultOpen, setPultOpen] = useState(false);
  const [selectedStoreId, setSelectedStoreId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  const pultRef = useRef(null);

  const { data: kinalatData, loading, error, refresh } = useLiveKinalat();
  
  const activePage = location.pathname.split('/')[1] || 'molo';
  const headerClass = `main-header page-${activePage}`;

  const handlePultToggle = () => {
    if (!isPultOpen && !kinalatData) {
      refresh();
    }
    setPultOpen(!isPultOpen);
    setSelectedStoreId(null); 
  };
  
  // --- A LETISZTÍTOTT LOGIKA ---
  useEffect(() => {
    function handleClickOutside(event) {
      if (pultRef.current && !pultRef.current.contains(event.target)) {
        setPultOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pultRef]);

  const selectedStoreData = kinalatData && selectedStoreId 
    ? kinalatData.find(bolt => bolt.id === selectedStoreId) 
    : null;

  return (
    <>
      <header className={headerClass}>
        <div className="header-left">
          <button className="header-button" onClick={() => setSideMenuOpen(true)}>
            <div className="header-icon"><MenuIcon /></div>
          </button>
          {activePage !== 'molo' && (
            <button className="header-button" onClick={() => navigate('/')}>
              <div className="header-icon"><HomeIcon /></div>
            </button>
          )}
        </div>
        <div className="header-right">
          <div className="dropdown-container" ref={pultRef}>
            <button className="header-button" onClick={handlePultToggle}>
              <span className="live-text-icon">ÉLŐ</span> 
            </button>
            
            {isPultOpen && (
              <div className="dropdown-menu live-kinalat">
                {loading && <div className="kinalat-status">Töltés...</div>}
                {error && <div className="kinalat-status error">{error.message || 'Hiba a betöltés során.'}</div>}
                
                {kinalatData && !loading && !error && (
                  <>
                    {!selectedStoreId && (
                      <>
                        <div className="kinalat-title">
                          <h3>Válassz üzletet</h3>
                          <button className="kinalat-refresh-button" onClick={refresh} title="Frissítés">
                            <RefreshIcon />
                          </button>
                        </div>
                        <div className="kinalat-store-selector">
                          {kinalatData.length > 0 ? (
                            kinalatData.map(bolt => (
                              bolt.fagyik.length > 0 &&
                              <button key={bolt.id} onClick={() => setSelectedStoreId(bolt.id)}>
                                <span className="store-button-name">{bolt.name}</span>
                                <span className="store-button-address"><MapPinIcon /> {bolt.address}</span>
                              </button>
                            ))
                          ) : (
                            <div className="kinalat-status">Jelenleg egy pult sincs feltöltve.</div>
                          )}
                        </div>
                      </>
                    )}
                    
                    {selectedStoreData && (
                      <div className="kinalat-bolt">
                        <button className="kinalat-back-button" onClick={() => setSelectedStoreId(null)}>‹ Vissza az üzletekhez</button>
                        <div className="kinalat-bolt-header">
                            <h4>{selectedStoreData.name}</h4>
                            <p><MapPinIcon /> {selectedStoreData.address}</p>
                        </div>
                        <ul>
                          {selectedStoreData.fagyik.map(fagyi => (
                            <li key={fagyi.name}><IceCreamScoopIcon /> {fagyi.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
          
          <button className="header-button" onClick={() => navigate('/kuponok')}>
            <div className="header-icon"><CouponIconWithPercent /></div>
          </button>
          <button className="header-button" onClick={() => navigate('/szerviz')}>
            <div className="header-icon"><ToolIcon /></div>
          </button>
          <button className="header-button" onClick={() => navigate('/burger')}>
            <div className="header-icon"><BurgerIcon /></div>
          </button>
          <button className="header-button" onClick={() => navigate('/fagyi')}>
            <div className="header-icon"><IceCreamIcon /></div>
          </button>
          <button className="header-button" onClick={() => navigate('/hirek')}>
            <div className="header-icon"><NewsIcon /></div>
          </button>
        </div>
      </header>
      <SideMenu isOpen={isSideMenuOpen} onClose={() => setSideMenuOpen(false)} />
    </>
  );
}

export default Header;