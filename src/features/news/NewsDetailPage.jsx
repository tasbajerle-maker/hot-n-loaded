import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getNewsBySlug } from '../../api/news';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './NewsDetailPage.css';

// A BŐVÍTETT RENDERELŐ FÜGGVÉNY
const renderContentBlock = (block, index) => {
  const alignClass = block.textAlign ? `text-align--${block.textAlign}` : '';

  switch (block.type) {
    case 'heading':
      return <h2 key={index} className={`content-block content-block--heading ${alignClass}`} dangerouslySetInnerHTML={{ __html: block.content }} />;
    case 'subheading':
      return <h3 key={index} className={`content-block content-block--subheading ${alignClass}`} dangerouslySetInnerHTML={{ __html: block.content }} />;
    case 'paragraph':
      return <div key={index} className={`content-block content-block--paragraph ${alignClass}`} dangerouslySetInnerHTML={{ __html: block.content }} />;
    case 'quote':
      return <blockquote key={index} className={`content-block content-block--quote ${alignClass}`} dangerouslySetInnerHTML={{ __html: block.content }} />;
    case 'callToAction':
      return <div key={index} className={`content-block content-block--cta ${alignClass}`} dangerouslySetInnerHTML={{ __html: block.content }} />;
    
    case 'featureBox': // ÚJ BLOKK
      return (
        <div key={index} className={`content-block content-block--feature-box ${alignClass}`}>
          {block.title && <h4>{block.title}</h4>}
          <div dangerouslySetInnerHTML={{ __html: block.content }} />
        </div>
      );
      
    case 'highlightedList':
      return (
        <div key={index} className={`content-block content-block--highlighted-list ${alignClass}`}>
          {block.title && <h4>{block.title}</h4>}
          <ul>
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
};

function NewsDetailPage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useDocumentTitle(article ? article.title : 'Hír betöltése...');

  useEffect(() => {
    getNewsBySlug(slug).then(data => {
      setArticle(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) return <div className="loading-message">Cikk betöltése a hipertérből...</div>;
  if (!article) return (
    <div className="error-message">
      <h2>A keresett hír nem található.</h2>
      <Link to="/hirek">Vissza a hírekhez</Link>
    </div>
  );

  return (
    <div className="eloszto-page theme-burger">
      <main className="eloszto-content">
        <article className="news-article-full">
          <h1>{article.title}</h1>
          <p className="news-date">{article.date}</p>
          
          <div className="news-article-content-wrapper">
            {article.contentBlocks 
              ? article.contentBlocks.map(renderContentBlock)
              : <div dangerouslySetInnerHTML={{ __html: article.content }} />
            }
          </div>

          <Link to="/hirek" className="news-back-link">&larr; Vissza a hírekhez</Link>
        </article>
      </main>
    </div>
  );
}

export default NewsDetailPage;