// Fájl: src/KuponPage.jsx

import React from 'react';
import useDocumentTitle from './hooks/useDocumentTitle'; // HOZZÁADVA
import './KuponPage.css';
import kuponHatter from './assets/kupon-hatter.png';

function KuponPage() {
  // HOZZÁADVA: Beállítja az oldal címét és leírását
  useDocumentTitle(
    'Akciós Kuponok - Hot & Loaded',
    'Ne maradj le aktuális akcióinkról! Itt találod a legfrissebb Hot & Loaded kuponokat, amikkel spórolhatsz.'
  );

  const kupon = {
    title: 'Csibe Burger Menü Akció',
    description: 'Egy szaftos Csibeburger, egy nagy adag sültkrumpli, 5 db ropógos hagymakarika és 2 választható mártogatós, most akciós áron!',
    discount: '-30%',
    originalPrice: '3000 Ft',
    newPrice: '2100 Ft',
    note: 'A kedvezmény a kupon felmutatásával érvényesíthető. Más akciókkal nem vonható össze.',
    qrCode: '/src/assets/qr-code-placeholder.png'
  };

  return (
    <div className="kupon-page-container">
      <header className="kupon-header">
        <h1>Kuponok és Akciók</h1>
        <p>Mutasd fel a lenti kupont a pultnál a kedvezményért!</p>
      </header>

      <main className="kupon-content">
        <div className="kupon-card" style={{ backgroundImage: `url(${kuponHatter})` }}>
          <div className="kupon-card-main">
            <div className="kupon-card-details">
              <span className="kupon-card-discount">{kupon.discount}</span>
              <h2>{kupon.title}</h2>
              <p>{kupon.description}</p>
              
              <div className="kupon-card-pricing">
                <span className="original-price">{kupon.originalPrice}</span>
                <span className="new-price">{kupon.newPrice}</span>
              </div>

            </div>
            <div className="kupon-card-qr">
              <img src={kupon.qrCode} alt="QR kód a beváltáshoz" />
              <span>Mutasd fel ezt a kódot!</span>
            </div>
          </div>
          <div className="kupon-card-footer">
            <p>{kupon.note}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default KuponPage;