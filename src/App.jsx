// Fájl: src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Molo from './Molo';
import BurgerPage from './BurgerPage';
import FagyiPage from './FagyiPage';
import EtlapPage from './EtlapPage';
import NewsPage from './NewsPage';
import SzervizPage from './SzervizPage';
import KinalatPage from './KinalatPage';
import KuponPage from './KuponPage';
import RolunkPage from './RolunkPage';
import KapcsolatPage from './KapcsolatPage';
import FagyiDetailPage from './FagyiDetailPage';
import Footer from './components/Footer'; // HOZZÁADVA
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
          <Route path="/hirek" element={<NewsPage />} />
          <Route path="/szerviz" element={<SzervizPage />} />
          <Route path="/kinalat/:boltId" element={<KinalatPage />} />
          <Route path="/kuponok" element={<KuponPage />} />
          <Route path="/rolunk" element={<RolunkPage />} />
          <Route path="/kapcsolat" element={<KapcsolatPage />} />
        </Routes>
        <Footer /> {/* HOZZÁADVA */}
      </BrowserRouter>
    </div>
  );
}

export default App;