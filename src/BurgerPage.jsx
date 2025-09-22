// Fájl: src/BurgerPage.jsx

import React from 'react';
import useDocumentTitle from './hooks/useDocumentTitle'; // HOZZÁADVA
import CallToActionBanner from './components/CallToActionBanner';
import PromoCard from './PromoCard';
import './BurgerPage.css';

const burgerPromoData = [
  { 
    id: 'b2',
    image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    title: 'Ropogós Csirkés', 
    description: 'Pankó morzsás csirkemell, coleslaw saláta és mézes-mustáros öntet. Kóstold meg a Csibe tálunkat!',
    price: '2800 Ft',
    tags: ['Csirke', 'Ropogós'],
    linkTo: '/etlap#talak'
  },
  { 
    id: 'b3',
    image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    title: 'Oklahoma Burger', 
    description: 'A klasszikus, hagymával együtt lepirított smash burger, uborkával és cheddar sajttal.',
    price: '1500 Ft',
    tags: ['Klasszikus', 'Smash'],
    linkTo: '/etlap#burgerek'
  }
];

function BurgerPage() {
  // HOZZÁADVA: Beállítja az oldal címét és leírását
  useDocumentTitle(
    'Szaftos Smash Burgerek - Hot & Loaded',
    'Kóstold meg Budapest legjobb smash burgereit! Kézműves buci, friss alapanyagok és egyedi szószok. Kattints a teljes étlapért!'
  );

  return (
    <div className="burger-page-container">
      <CallToActionBanner 
        text="Teljes Kínálat Megtekintése"
        linkTo="/etlap"
      />

      <main className="burger-page-content">
        <div className="promo-grid">
          {burgerPromoData.map(item => (
            <PromoCard 
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              tags={item.tags}
              linkTo={item.linkTo}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default BurgerPage;