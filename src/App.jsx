import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// A te komponenseid
import Header from './Header';
import Molo from './Molo';
import BurgerPage from './BurgerPage';
import FagyiPage from './FagyiPage';
import EtlapPage from './EtlapPage';
// TÖRÖLVE: import NewsPage from './NewsPage';
import SzervizPage from './SzervizPage';
import KinalatPage from './KinalatPage';
// TÖRÖLVE: import KuponPage from './KuponPage'; // Erre már nincs szükség
import RolunkPage from './RolunkPage';
import KapcsolatPage from './KapcsolatPage';
import FagyiDetailPage from './FagyiDetailPage';
import Footer from './components/Footer';

// --- HOZZÁADVA: A HÍR KOMPONENSEK ---
import NewsListPage from './features/news/NewsListPage';
import NewsDetailPage from './features/news/NewsDetailPage';

// --- HOZZÁADVA: AZ ÚJ ÁTIRÁNYÍTÓ ---
import ExternalRedirect from './components/ExternalRedirect'; // Feltételezve, hogy a components mappába tetted

import './App.css';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Molo />} />
          <Route path="/burger" element={<BurgerPage />} />
          <Route path="/fagyi" element={<FagyiPage />} />
          <Route path="/fagyi/:fagyiId" element={<FagyiDetailPage />} />
          <Route path="/etlap" element={<EtlapPage />} />
          
          <Route path="/hirek" element={<NewsListPage />} />
          <Route path="/hirek/:slug" element={<NewsDetailPage />} />

          <Route path="/szerviz" element={<SzervizPage />} />
          <Route path="/kinalat/:boltId" element={<KinalatPage />} />
          
          {/* --- JAVÍTÁS ITT: A KUPON OLDAL MOST MÁR KÜLSŐ LINKRE VISZ --- */}
          <Route 
            path="/kuponok" 
            element={<ExternalRedirect to="https://enfagyi-app-122a0.web.app/my-coupons" />} 
          />
          
          <Route path="/rolunk" element={<RolunkPage />} />
          <Route path="/kapcsolat" element={<KapcsolatPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;