// Fájl: src/features/news/NewsListPage.jsx
// EZ A JÓ VERZIÓ, EZT MÁSOLD BE!

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// --- JAVÍTÁS ITT: A '@/' alias helyett relatív útvonalak ---
import { getAllNews } from '../../api/news';
import useDocumentTitle from '../../hooks/useDocumentTitle';

// Itt már jó vagy, mert ezt a CSS fájlt létrehoztad
import './NewsListPage.css';

function NewsListPage() {
  useDocumentTitle(
    'Hírek és Akciók - Hot & Loaded',
    'Olvasd el legfrissebb híreinket és ne maradj le aktuális akcióinkról!'
  );

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllNews().then(data => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Hírek betöltése...</div>;
  }

  return (
    <div className="eloszto-page theme-burger">
      <header className="eloszto-header">
        <h1>Hírek és Akciók</h1>
      </header>
      <main className="eloszto-content">
        <div className="news-list">
          {articles.map(article => (
            <article key={article.slug} className="news-article-summary">
              <h2>{article.title}</h2>
              <p className="news-date">{article.date}</p>
              <p>{article.summary}</p>
              <Link to={`/hirek/${article.slug}`} className="news-read-more">
                Tovább olvasom &rarr;
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default NewsListPage;