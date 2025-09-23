// Fájl: src/RolunkPage.jsx

import React from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';
import './RolunkPage.css'; // Egy új, dedikált stíluslapot fogunk használni

function RolunkPage() {
  useDocumentTitle(
    'A Történetünk - Hot & Loaded / Nyaloda',
    'Ismerd meg, hogyan lett egy fagyis tricikliből és egy felismerésből szenvedélyünk és hivatásunk. A Nyaloda és Hot & Loaded története.'
  );

  return (
    <div className="rolunk-page-container">
      <header className="rolunk-hero">
        <div className="rolunk-hero-overlay"></div>
        <div className="rolunk-hero-content">
          <h1>"Jó minőséget, jó áron és olyan adagban, amit mi is elvárnánk!"</h1>
        </div>
      </header>

      <main className="rolunk-content">
        <section className="rolunk-section">
          <h2>A Kezdetek: A Fagyis Tricikli</h2>
          <p>
            Tizenöt évvel ezelőtt, még a főiskola és a munka mellett, egy egyszerű délutáni programmal vágtunk bele a fagylalt világába: egy fagyis triciklivel árultunk egy parkban. Ott, a szabad ég alatt láttuk, ahogy boldog emberek jönnek és mennek, kezükben a mi fagyinkkal. Akkor jött a felismerés: mi ezt akarjuk csinálni. Ez nem csak egy munka, hanem hivatás.
          </p>
          <p>
            Az irány egyértelmű volt: a cukrásziskola. Bár a képzés során alig esett szó a fagylaltkészítésről, a tudásvágyunk csillapíthatatlan volt. Mindent tudni akartunk.
          </p>
        </section>

        <section className="rolunk-section">
          <h2>A Filozófiánk: A Fagyi Mindenkié</h2>
          <p>
            Káposztásmegyeren nyitottuk meg az első saját üzletünket, ahol már mi magunk készítettük a fagylaltot az alapoktól. A többi, ahogy mondani szokás, történelem. Az évek során a saját utunkat jártuk, folyamatosan kísérleteztünk, de a célunk sosem változott: **jó minőséget adni, jó áron, és olyan adagban, amit mi is elvárnánk egy fagyizótól.**
          </p>
          <p>
            Hiszünk benne, hogy a minőségi fagylalt nem lehet csak a kiváltságosok nassolnivalója. Ezért dolgozunk a mai napig tiszta, minőségi alapanyagokkal, hogy a legjobb ízélményt nyújtsuk, kompromisszumok nélkül.
          </p>
        </section>

        <section className="rolunk-section">
          <h2>A Jövő: A Fejlődés Nem Állhat Meg</h2>
          <p>
            A tizenöt évnyi tapasztalat megtanított minket arra, hogy a legjobb recept is csak annyit ér, amennyi szenvedéllyel készítik el. Mi pedig folyamatosan keressük az új ízeket, a jobb technológiákat és a kreatív megoldásokat. A fejlődés nem állhat meg, és alig várjuk, hogy megmutassuk, mit tartogat a jövő!
          </p>
        </section>
      </main>
    </div>
  );
}

export default RolunkPage;