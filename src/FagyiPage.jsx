// Fájl: src/FagyiPage.jsx

import React from 'react';
import ElosztoPage from './ElosztoPage';
import fagyiIntroKep from './assets/fagyi-intro.png';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';

export const fagyiData = [
  // ... adatok
];

const introCard = {
  // ... adatok
};

const fagyiPromoDataRaw = fagyiData.map(fagyi => ({
    // ... adatok
}));

const finalPromoData = [introCard, ...fagyiPromoDataRaw];

function FagyiPage() {
  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/'),
    trackMouse: true
  });

  return (
    // MÓDOSÍTVA: A felesleges div-et eltávolítottuk,
    // és a "handlers"-t átadjuk propként az ElosztoPage-nek
    <ElosztoPage 
      pageType="fagyi" 
      title="Nyaloda"
      promoData={finalPromoData}
      swipeHandlers={handlers}
    />
  );
}

export default FagyiPage;