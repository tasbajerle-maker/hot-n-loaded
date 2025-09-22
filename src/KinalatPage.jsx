// Fájl: src/KinalatPage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useDocumentTitle from './hooks/useDocumentTitle'; // HOZZÁADVA
import { liveKinalatData } from './data/menuData';
import './KinalatPage.css';

function KinalatPage() {
  const { boltId } = useParams();
  const boltKinalat = liveKinalatData[boltId] || [];
  
  const boltNev = boltId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());

  // HOZZÁADVA: Dinamikus cím és leírás beállítása
  useDocumentTitle(
    `Élő Fagyikínálat: ${boltNev} - Hot & Loaded`,
    `Nézd meg, milyen kézműves fagyik érhetőek el most a ${boltNev} üzletünkben! Naponta frissülő kínálat.`
  );

  return (
    <div className="kinalat-page-container">
      <main className="kinalat-content">
        <div className="kinalat-header">
          <h1>Aktuális Fagyikínálat</h1>
          <h2>Üzlet: <strong>{boltNev}</strong></h2>
        </div>

        {boltKinalat.length > 0 ? (
          <div className="kinalat-grid">
            {boltKinalat.map(fagyi => (
              <div key={fagyi.name} className="fagyi-card">
                <img src={fagyi.image} alt={fagyi.name} className="fagyi-card-image" />
                <div className="fagyi-card-name">{fagyi.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="nincs-adat">
            <p>Erre az üzletre vonatkozóan jelenleg nincs elérhető adat.</p>
            <Link to="/" className="vissza-gomb">Vissza a főoldalra</Link>
          </div>
        )}
      </main>
    </div>
  );
}

export default KinalatPage;