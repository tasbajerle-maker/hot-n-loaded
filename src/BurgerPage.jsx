// Fájl: src/BurgerPage.jsx

import React from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';
import CallToActionBanner from './components/CallToActionBanner';
import PromoCard from './PromoCard';
import './KirakatPage.css';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';

const burgerPromoData = [
  // HOZZÁADVA: A két új limitált burger
  { 
    id: 'rantott-sajtos-szilvas-burger',
    image: '/images/rantott-sajtos-szilvas-burger.jpg',
    title: 'Rántott Sajtos Szilvás Burger', 
    description: 'Egy igazi ízbomba! Ropogósra sütött rántott sajt találkozása az édes szilvalekvárral, egy szaftos húspogácsával megkoronázva.',
    price: '2000 Ft',
    tags: ['Limitált', 'Különlegesség'],
    linkTo: '/etlap#limitalt'
  },
  { 
    id: 'mangos-csibeburger',
    image: '/images/mangos-csibeburger.jpg',
    title: 'Mangós Csibeburger Tojáspogácsával', 
    description: 'Egzotikus kaland a tányérodon! Szaftos csibeburger, édes mangó chutney és egy lágy tojáspogácsa.',
    price: '2000 Ft',
    tags: ['Limitált', 'Újdonság'],
    linkTo: '/etlap#limitalt'
  },
  // A korábbi kártyák
  { 
    id: 'sultkrumpli-info',
    image: '/images/sultkrumpli.png', 
    title: 'Extra Ropogós Sültkrumpli', 
    description: 'A sültkrumplink 9x9-es vágású hasábburgonya, amit egy speciális, extra ropogós réteggel látunk el. Kívül roppan, belül omlós!',
    price: 'Kóstold meg köretként!',
    tags: ['Specialitás', 'Köret'],
    linkTo: '/etlap#koretek'
  },
  { 
    id: 'nuggets-info',
    image: '/images/nuggets.png', 
    title: 'Valódi Csirkemell Nuggets', 
    description: 'Hamarosan étlapon! 100% csirkemellfiléből készült nuggets, felesleges adalékanyagok nélkül. Csak a tiszta íz.',
    price: 'Hamarosan!',
    tags: ['Újdonság', 'Csirke'],
  },
  { 
    id: 'b2',
    image: '/images/csibe-burger.png',
    title: 'Csibe Burger',
    description: '100% csirkemell, jégsaláta, majonéz.',
    price: '1250 Ft',
    tags: ['Csirke', 'Klasszikus'],
    linkTo: '/etlap#burgerek'
  },
  { 
    id: 'b3',
    image: '/images/oklahoma-burger.png',
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