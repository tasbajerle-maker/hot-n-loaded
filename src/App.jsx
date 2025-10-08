// Fájl: src/App.jsx
// JAVÍTOTT VERZIÓ

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
import KuponPage from './KuponPage';
import RolunkPage from './RolunkPage';
import KapcsolatPage from './KapcsolatPage';
import FagyiDetailPage from './FagyiDetailPage';
import Footer from './components/Footer';

// --- HOZZÁADVA: AZ ÚJ, ÉRTELMES HÍR KOMPONENSEK IMPORTJA ---
// Feltételezem, hogy a javasolt struktúrában hoztad létre őket.
// Ha máshova tetted, javítsd az elérési utat!
import NewsListPage from './features/news/NewsListPage';
import NewsDetailPage from './features/news/NewsDetailPage';

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
          
          {/* --- JAVÍTÁS ITT: EZ A KÉT SOR KELL NEKED --- */}
          {/* 1. Az "étlap": Megjeleníti az összes hír listáját a /hirek URL-en */}
          <Route path="/hirek" element={<NewsListPage />} />
          {/* 2. A "kaja": Megjelenít egy konkrét hírt a /hirek/cikk-url-neve URL-en */}
          <Route path="/hirek/:slug" element={<NewsDetailPage />} />

          <Route path="/szerviz" element={<SzervizPage />} />
          <Route path="/kinalat/:boltId" element={<KinalatPage />} />
          <Route path="/kuponok" element={<KuponPage />} />
          <Route path="/rolunk" element={<RolunkPage />} />
          <Route path="/kapcsolat" element={<KapcsolatPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;