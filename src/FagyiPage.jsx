// Fájl: src/FagyiPage.jsx

import React from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';
import CallToActionBanner from './components/CallToActionBanner';
import PromoCard from './PromoCard';
import './KirakatPage.css';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';

// A KÉPEK IMPORTÁLÁSA ELTÁVOLÍTVA

export const fagyiData = [
  { 
    id: 'pisztacia',
    image: '/images/pisztacia-kirallyno.png', // MÓDOSÍTVA
    title: 'Szicíliai Pisztácia', 
    description_short: 'A fagylaltok királynője, kompromisszumok nélkül. Válogatott, enyhén sós, pörkölt zöld pisztáciából.',
    description_full: 'A pisztáciában nincsenek kompromisszumok. Ő a fagylaltok királynője...',
    price: 'Külön árazás',
    tags: ['Királynő', 'Prémium'],
  },
  { 
    id: 'brazil-alom',
    image: '/images/brazil-alom-kiraly.png', // MÓDOSÍTVA
    title: 'Brazíliai Álom', 
    description_short: 'Zászlós-hajónk! Sárgakrém alap leheletnyi vaníliával, karamellás pekándiós öntettel variegálva.',
    description_full: 'Ha a pisztácia a királynő, nálunk ő a király...',
    price: 'Külön árazás',
    tags: ['Zászlós-hajó', 'Karamellás'],
  },
  {
    id: 'honap-ize',
    image: '/images/honap-ize-otlet.png', // MÓDOSÍTVA
    title: 'Hónap Íze: Legyen a Te Ötleted!', 
    description_short: 'Milyen fagyi-álmodat váltsuk valóra? Várjuk a kívánságokat...',
    price: 'Kérdezd a pultnál!',
    tags: ['Közösségi', 'Újdonság'],
  }
];

const introCard = {
  id: 'bemutatkozas',
  image: '/images/fagyi-intro.png', // MÓDOSÍTVA
  title: 'A Mi Fagyink: Minőség Mindenkinek',
  description: 'Hiszünk benne, hogy a jó fagyi nem kiváltság...',
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
    onSwipedLeft: () => navigate('/'),
    trackMouse: true
  });

  return (
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