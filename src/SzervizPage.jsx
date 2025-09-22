// Fájl: src/SzervizPage.jsx

import React from 'react';
import useDocumentTitle from './hooks/useDocumentTitle'; // HOZZÁADVA
import './SzervizPage.css';

// Ikonok...
const HutoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>;
const FagyiGepIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a2.828 2.828 0 0 0-2 5 2.828 2.828 0 0 0-2 5 2.828 2.828 0 0 0 2 5 2.828 2.828 0 0 0 2 5 2.828 2.828 0 0 0 2-5 2.828 2.828 0 0 0 2-5 2.828 2.828 0 0 0-2-5 2.828 2.828 0 0 0-2-5z"/><path d="M20.62 17.11a2.828 2.828 0 0 0-4.24 0l-1.06 1.07a2.828 2.828 0 0 0 0 4.24l1.06 1.06a2.828 2.828 0 0 0 4.24 0l4.24-4.24a2.828 2.828 0 0 0 0-4.24l-1.06-1.06a2.828 2.828 0 0 0-3.18-1.03z"/></svg>;
const VitrinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M12 2v6"/><path d="M2 14h20"/></svg>;


function SzervizPage() {
  // HOZZÁADVA: Oldalcím, leírás és strukturált adat
  useDocumentTitle(
    'Ipari Hűtő és Fagyasztó Szerviz - Hot & Loaded',
    'Ipari hűtők, fagyasztók, fagylaltpultok szakszerű javítása és karbantartása Budapesten. Gyors kiszállás, garancia. Kérjen ajánlatot!',
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'Hot & Loaded Szerviz',
      'description': 'Ipari hűtőberendezések, fagylaltgépek és cukrászati vitrinek javítása, karbantartása és adás-vétele.',
      'areaServed': {
        '@type': 'City',
        'name': 'Budapest'
      },
      'provider': {
        '@type': 'Organization',
        'name': 'Hot & Loaded'
      },
      'serviceType': [
        'Fagylaltgépek és Pultok Javítása',
        'Ipari Hűtéstechnika Szervizelése',
        'Cukrászati Vitrinek Javítása',
        'Használt Gépek Forgalmazása'
      ]
    }
  );

  return (
    <div className="szerviz-page-container">
      <header className="szerviz-hero">
        <div className="szerviz-hero-overlay"></div>
        <div className="szerviz-hero-content">
          <h1>Ipari Hűtőberendezések Professzionális Szervize</h1>
          <p>Gyors és megbízható javítás Budapesten és környékén, garanciával.</p>
        </div>
      </header>

      <main className="szerviz-content">
        <section className="szolgaltatasok-section">
          <h2>Szakterületeink</h2>
          <div className="szolgaltatasok-grid">
            <div className="szolgaltatas-card">
              <div className="szolgaltatas-icon"><FagyiGepIcon /></div>
              <h3>Fagylaltgépek és Pultok</h3>
              <p>Fagylaltfőzők, fagylaltpultok és sokkoló fagyasztók szakszerű javítása és karbantartása.</p>
            </div>
            <div className="szolgaltatas-card">
              <div className="szolgaltatas-icon"><HutoIcon /></div>
              <h3>Ipari Hűtéstechnika</h3>
              <p>Hűtő- és fagyasztókamrák, ipari hűtőszekrények és fagyasztók teljes körű szervizelése.</p>
            </div>
            <div className="szolgaltatas-card">
              <div className="szolgaltatas-icon"><VitrinIcon /></div>
              <h3>Cukrászati Vitrinek</h3>
              <p>Süteményes pultok és hűtővitrinek javítása, a megfelelő hőmérséklet biztosítása.</p>
            </div>
          </div>
        </section>

        <section className="folyamat-section">
          <h2>A javítás menete - 3 egyszerű lépésben</h2>
          <div className="folyamat-grid">
              <div className="folyamat-step">
                  <div className="step-number">1</div>
                  <h3>Kapcsolatfelvétel</h3>
                  <p>Hívjon minket telefonon vagy írjon emailt. Röviden ismertesse a problémát, és egyeztessen kollégánkkal egy Önnek megfelelő időpontot.</p>
              </div>
              <div className="folyamat-step">
                  <div className="step-number">2</div>
                  <h3>Helyszíni Felmérés</h3>
                  <p>Szakemberünk a megbeszélt időpontban megérkezik, beazonosítja a hiba okát, és részletes árajánlatot ad a javításra és a szükséges alkatrészekre.</p>
              </div>
              <div className="folyamat-step">
                  <div className="step-number">3</div>
                  <h3>Javítás és Garancia</h3>
                  <p>Az árajánlat elfogadása után elvégezzük a szakszerű javítást. Munkánkra és a beépített alkatrészekre teljes körű garanciát vállalunk.</p>
              </div>
          </div>
        </section>

        <div className="szerviz-grid-2col">
          <section className="miert-minket-section">
            <div className="miert-minket-content">
              <h2>Miért válasszon minket?</h2>
              <ul>
                <li><strong>Azonnali Helyszíni Javítás:</strong> Teljesen felszerelt szervizautóval érkezünk, hogy a felmérés után ne kelljen alkatrészekre várni, és a javítást azonnal megkezdhessük.</li>
                <li><strong>Tapasztalat:</strong> Több évtizedes szakmai tapasztalat a hűtéstechnika területén.</li>
                <li><strong>Márkafüggetlen szerviz:</strong> A legtöbb ismert gyártó berendezését ismerjük és javítjuk.</li>
                <li><strong>Garancia:</strong> Minden elvégzett munkánkra és a beépített alkatrészekre garanciát vállalunk.</li>
              </ul>
            </div>
          </section>
          
          <section className="gyik-section">
            <h2>Gyakori Kérdések</h2>
            <div className="gyik-item">
              <h4>Milyen területeken vállalnak kiszállást?</h4>
              <p>Főként Budapesten és Pest megye területén dolgozunk, de nagyobb munkák esetén egyedi megegyezés alapján távolabbra is kiszállunk.</p>
            </div>
            <div className="gyik-item">
              <h4>Mennyi garanciát vállalnak?</h4>
              <p>A garancia mértéke a javítás jellegétől és a beépített alkatrész típusától függ, de minden esetben a törvényi előírásoknak megfelelő, teljes körű garanciát biztosítunk.</p>
            </div>
          </section>
        </div>

        <section className="hasznalt-gepek-section">
            <h2>Használt Gépek Adás-Vétele</h2>
            <p>A javítás mellett jó állapotú, bevizsgált használt ipari hűtőberendezések és fagylaltgépek forgalmazásával, valamint használt gépek felvásárlásával is foglalkozunk. Keressen minket bizalommal egyedi ajánlatért!</p>
        </section>

        <section className="markak-section">
          <h2>Többek között az alábbi márkák javítását vállaljuk</h2>
          <div className="markak-logos">
            <span>Carpigiani</span>
            <span>Bravo</span>
            <span>ISA</span>
            <span>Orion</span>
            <span>Cattabriga</span>
            <span>Valmar</span>
            <span>Technogel</span>
          </div>
          <p className="markak-megjegyzes">...és szinte minden más ipari márka. (Háztartási gépek javítását nem vállaljuk.)</p>
        </section>

        <section className="cta-section">
          <h2>Kérjen Ajánlatot Vagy Hívjon Azonnal!</h2>
          <p>Vegye fel velünk a kapcsolatot, és kérjen ingyenes árajánlatot vagy tanácsadást.</p>
          <div className="cta-buttons">
            <a href="tel:+3612345678" className="cta-button primary">Telefonos Elérhetőség</a>
            <a href="mailto:szerviz@hotsloaded.hu" className="cta-button secondary">Email Küldése</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SzervizPage;