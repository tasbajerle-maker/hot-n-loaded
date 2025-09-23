// Fájl: src/FagyiPage.jsx

import React from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';
import CallToActionBanner from './components/CallToActionBanner';
import PromoCard from './PromoCard';
import './KirakatPage.css';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';
import fagyiIntroKep from './assets/fagyi-intro.png';

export const fagyiData = [
  { 
    id: 'pisztacia',
    image: 'https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    title: 'Szicíliai Pisztácia', 
    description_short: 'A fagylaltok királynője, kompromisszumok nélkül. Válogatott, enyhén sós, pörkölt zöld pisztáciából.',
    description_full: 'A pisztáciában nincsenek kompromisszumok. Ő a fagylaltok királynője. Évekig tartó kísérletezés után találtuk meg a tökéletes, válogatott szicíliai zöld pisztáciát, amit enyhén sósan, kellemes pörköléssel készítünk el, hogy a legtisztább, legintenzívebb ízt kapjuk.',
    price: 'Külön árazás',
    tags: ['Királynő', 'Prémium'],
  },
  { 
    id: 'brazil-alom',
    image: 'https://images.pexels.com/photos/10837803/pexels-photo-10837803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    title: 'Brazíliai Álom', 
    description_short: 'Zászlós-hajónk! Sárgakrém alap leheletnyi vaníliával, karamellás pekándiós öntettel variegálva.',
    description_full: 'Ha a pisztácia a királynő, nálunk ő a király, aki büszkén ül a trónján. Egy selymes, gazdag sárgakrém alapot főzünk, amit leheletnyi vaníliával bolondítunk meg, majd egy házi készítésű, karamellás, ropogós pekándiós öntettel variegáljuk. Minden kanál egy új kaland.',
    price: 'Külön árazás',
    tags: ['Zászlós-hajó', 'Karamellás'],
  },
  // --- ITT VAN A VÁLTOZÁS ---
  {
    id: 'honap-ize',
    image: 'https://images.pexels.com/photos/7474220/pexels-photo-7474220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    title: 'Hónap Íze: Legyen a Te Ötleted!', 
    description_short: 'Milyen fagyi-álmodat váltsuk valóra? Várjuk a kívánságokat és a legkreatívabb ötleteket a következő hónap ízéhez!',
    price: 'Kérdezd a pultnál!',
    tags: ['Közösségi', 'Újdonság'],
  }
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