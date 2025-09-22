// Fájl: src/FagyiPage.jsx

import React from 'react';
import ElosztoPage from './ElosztoPage';
import fagyiIntroKep from './assets/fagyi-intro.png'; // JAVÍTVA: Visszaírtam .png-re
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';

export const fagyiData = [
  // Ide jöhetnek vissza a fagyik
];

const introCard = {
  id: 'bemutatkozas',
  image: fagyiIntroKep,
  title: 'A Mi Fagyink: Minőség Mindenkinek',
  description: 'Hiszünk benne, hogy a jó fagyi nem kiváltság. Több, mint 15 éves tapasztalattal, saját receptjeink alapján készítjük főzött tejfagylaltjainkat, kizárólag tejjel és állati tejszínnel. Célunk, hogy a legkiválóbb minőséget tegyük elérhetővé mindenki számára.',
  price: 'Tudj meg többet!',
  tags: ['Filozófiánk'],
  expandable: true, 
  linkTo: '/rolunk' 
};

const fagyiPromoDataRaw = fagyiData.map(fagyi => ({
  id: fagyi.id,
  image: fagyi.image,
  title: fagyi.title,
  description: fagyi.description_short,
  price: fagyi.price,
  tags: fagyi.tags,
  linkTo: `/fagyi/${fagyi.id}`
}));

const finalPromoData = [introCard, ...fagyiPromoDataRaw];

function FagyiPage() {
  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/'),
    trackMouse: true
  });

  return (
    <div {...handlers}>
      <ElosztoPage 
        pageType="fagyi" 
        title="Nyaloda"
        promoData={finalPromoData}
      />
    </div>
  );
}

export default FagyiPage;