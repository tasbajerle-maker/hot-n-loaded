// Fájl: src/NewsPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from './hooks/useDocumentTitle'; // HOZZÁADVA
import './NewsPage.css'; // MÓDOSÍTVA (saját stíluslapra)
import './ElosztoPage.css'; // Ezt meghagyjuk az alap elrendezéshez

// Hírek adatbázisa (egyelőre a kódban)
const newsData = [
  {
    id: 'uj-smash-burger-hetfo',
    title: 'Új Smash Burger Hétfőtől!',
    summary: 'Végre megérkezett a legújabb büszkeségünk, a tripla sajtos, baconös Smasher. Kóstold meg elsőként!',
    date: '2025. szeptember 8.',
  },
  {
    id: 'fagylalt-hetvege',
    title: 'Fagylalt Hétvége az Astoriánál',
    summary: 'Ezen a hétvégén minden pisztácia és belga csoki fagyinkhoz ajándék öntet jár. Ne hagyd ki!',
    date: '2025. szeptember 5.',
  },
];

function NewsPage() {
  // HOZZÁADVA: Beállítja az oldal címét és leírását
  useDocumentTitle(
    'Hírek és Akciók - Hot & Loaded',
    'Olvasd el legfrissebb híreinket és ne maradj le aktuális akcióinkról! Új burgerek, hétvégi ajánlatok és minden, ami Hot & Loaded.'
  );

  return (
    <div className="eloszto-page theme-burger">
      <header className="eloszto-header">
        <h1>Hírek és Akciók</h1>
      </header>
      <main className="eloszto-content">
        <div className="news-list">
          {newsData.map(article => (
            <div key={article.id} className="news-article-summary">
              <h2>{article.title}</h2>
              <p className="news-date">{article.date}</p>
              <p>{article.summary}</p>
              {/* Ez a link a jövőbeli részletes oldalra mutatna */}
              <Link to={`/hirek/${article.id}`} className="news-read-more">
                Tovább olvasom &rarr;
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default NewsPage;