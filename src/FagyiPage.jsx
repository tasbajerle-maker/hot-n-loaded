// Fájl: src/FagyiPage.jsx

import React from 'react';
import ElosztoPage from './ElosztoPage';
import fagyiIntroKep from './assets/fagyi-intro.png'; // HOZZÁADVA: A saját képed importálása

export const fagyiData = [
  // Ide jöhetnek vissza a fagyik
];

const introCard = {
  id: 'bemutatkozas',
  image: fagyiIntroKep, // MÓDOSÍTVA: A Pexels link helyett a saját képedet használjuk
  title: 'A Mi Fagyink: Minőség Mindenkinek',
  description: 'Hiszünk benne, hogy a jó fagyi nem kiválág. Több, mint 15 éves tapasztalattal, saját receptjeink alapján készítjük főzött tejfagylaltjainkat, kizárólag tejjel és állati tejszínnel. Célunk, hogy a legkiválóbb minőséget tegyük elérhetővé mindenki számára.',
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
  return (
    <ElosztoPage 
      pageType="fagyi" 
      title="Nyaloda"
      promoData={finalPromoData}
    />
  );
}

export default FagyiPage;