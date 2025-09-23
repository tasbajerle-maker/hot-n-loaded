// Fájl: src/BurgerPage.jsx

import React from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';
import CallToActionBanner from './components/CallToActionBanner';
import PromoCard from './PromoCard';
import './KirakatPage.css'; // Az egységes stíluslapot használjuk
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';

// MÓDOSÍTVA: Hozzáadtuk a két új promóciós kártyát
const burgerPromoData = [
  { 
    id: 'sultkrumpli-info',
    image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    title: 'Extra Ropogós Sültkrumpli', 
    description: 'A sültkrumplink 9x9-es vágású hasábburgonya, amit egy speciális, extra ropogós réteggel látunk el. Kívül roppan, belül omlós!',
    price: 'Kóstold meg köretként!',
    tags: ['Specialitás', 'Köret'],
    linkTo: '/etlap#koretek' // A köretek szekcióra ugrik
  },
  { 
    id: 'nuggets-info',
    image: 'https://images.pexels.com/photos/6732047/pexels-photo-6732047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    title: 'Valódi Csirkemell Nuggets', 
    description: 'Hamarosan étlapon! 100% csirkemellfiléből készült nuggets, felesleges adalékanyagok nélkül. Csak a tiszta íz.',
    price: 'Hamarosan!',
    tags: ['Újdonság', 'Csirke'],
    // Nincs linkTo, mert még nem része az étlapnak
  },
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
  useDocumentTitle(
    'Szaftos Smash Burgerek - Hot & Loaded',
    'Kóstold meg Budapest legjobb smash burgereit! Kézműves buci, friss alapanyagok és egyedi szószok. Kattints a teljes étlapért!'
  );

  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedRight: () => navigate('/'),
    trackMouse: true
  });

  return (
    <div className="eloszto-page theme-burger" {...handlers}>
      <CallToActionBanner 
        text="Teljes Kínálat Megtekintése"
        linkTo="/etlap"
      />

      <main className="eloszto-content">
        <h1 className="page-title">Hot & Loaded</h1>
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
              expandable={item.expandable || false}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default BurgerPage;