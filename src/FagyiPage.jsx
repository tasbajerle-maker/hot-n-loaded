// Fájl: src/FagyiPage.jsx (Teljesen átépítve)

import React from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';
import CallToActionBanner from './components/CallToActionBanner';
import PromoCard from './PromoCard';
import './ElosztoPage.css'; // Egyelőre még ezt használjuk, de átnevezzük
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';

export const fagyiData = [
  // Jelenleg üres, de ide jöhetnek vissza a fagyik
];

const introCard = {
  id: 'bemutatkozas',
  image: '/src/assets/fagyi-intro.png', // A kép elérési útvonala
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
  useDocumentTitle(
    'Kézműves Fagylalt Különlegességek - Nyaloda',
    'Fedezd fel a Nyaloda kézműves fagylaltjait! Naponta frissülő, egyedi ízekkel várunk üzleteinkben.'
  );

  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/'), // Balra húzásra visszalép
    trackMouse: true
  });

  return (
    // A felépítés most már megegyezik a BurgerPage-ével
    <div className="eloszto-page theme-fagyi" {...handlers}>
      <CallToActionBanner 
        text="Teljes Kínálat Megtekintése"
        linkTo="/etlap"
      />
      <main className="eloszto-content">
        <h1 className="page-title">Nyaloda</h1>
        <div className="promo-grid">
          {finalPromoData.map(item => (
            <PromoCard 
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              tags={item.tags}
              linkTo={item.linkTo}
              expandable={item.expandable || false}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default FagyiPage;