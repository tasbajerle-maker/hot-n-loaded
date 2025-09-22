// Fájl: src/FagyiDetailPage.jsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fagyiData } from './FagyiPage'; // Az adatokat a FagyiPage-ből importáljuk
import './FagyiDetailPage.css';

function FagyiDetailPage() {
  const { fagyiId } = useParams();
  const navigate = useNavigate();

  // Megkeressük a megfelelő fagyit az adatok között az URL alapján
  const fagyi = fagyiData.find(f => f.id === fagyiId);

  if (!fagyi) {
    return (
      <div className="fagyi-detail-container">
        <div className="fagyi-detail-content">
          <h1>Hoppá!</h1>
          <p>Ez a fagylalt sajnos nem található.</p>
          <button onClick={() => navigate('/fagyi')} className="vissza-gomb">Vissza a fagyikhoz</button>
        </div>
      </div>
    );
  }

  return (
    <div className="fagyi-detail-container">
      <div className="fagyi-detail-content">
        <img src={fagyi.image} alt={fagyi.title} className="fagyi-detail-image" />
        <h1>{fagyi.title}</h1>
        <p className="fagyi-detail-price">{fagyi.price}</p>
        <p className="fagyi-detail-description">{fagyi.description_full}</p>
        <button onClick={() => navigate('/fagyi')} className="vissza-gomb">‹ Vissza a többi fagyihoz</button>
      </div>
    </div>
  );
}

export default FagyiDetailPage;