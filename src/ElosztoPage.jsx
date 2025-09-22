// Fájl: src/ElosztoPage.jsx

import React from 'react';
import PropTypes from 'prop-types';
import useDocumentTitle from './hooks/useDocumentTitle';
import './ElosztoPage.css';
import PromoCard from './PromoCard';
import CallToActionBanner from './components/CallToActionBanner';

// HOZZÁADVA: A komponens most már a "swipeHandlers" propot is fogadja
function ElosztoPage({ pageType, title, promoData, swipeHandlers }) {
  const pageTitle = pageType === 'fagyi' 
    ? `Kézműves Fagylalt Különlegességek - ${title}` 
    : `Szaftos Smash Burgerek - ${title}`;
  
  const pageDescription = pageType === 'fagyi'
    ? 'Fedezd fel a Nyaloda kézműves fagylaltjait! Naponta frissülő, egyedi ízekkel várunk üzleteinkben.'
    : 'Kóstold meg Budapest legjobb smash burgereit! Kézműves buci, friss alapanyagok és egyedi szószok.';

  useDocumentTitle(`${pageTitle} - Hot & Loaded`, pageDescription);

  const themeClass = pageType === 'burger' ? 'theme-burger' : 'theme-fagyi';

  return (
    // HOZZÁADVA: A swipe figyelőt a fő konténerre tesszük
    <div className={`eloszto-page ${themeClass}`} {...swipeHandlers}>
      <CallToActionBanner 
        text="Teljes Kínálat Megtekintése"
        linkTo="/etlap"
      />

      <main className="eloszto-content">
        <h1 className="page-title">{title}</h1>
        <div className="promo-grid">
          {promoData.map(item => (
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

// MÓDOSÍTVA: Kivettem a PropType-okat, mert hibát okoztak korábban
/*
ElosztoPage.propTypes = {
  pageType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  promoData: PropTypes.array.isRequired,
};
*/

export default ElosztoPage;