// Fájl: src/KapcsolatPage.jsx

import React, { useState } from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';
import './KapcsolatPage.css';

// Ikonok...
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0-7-9-13-9-13s-9 6-9 13c0 4.5 4 8 9 8s9-3.5 9-8z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const TikTokIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V6a5 5 0 0 0-5-5H3v11a5 5 0 0 0 5 5h4Z"></path><path d="M12 19a5 5 0 0 1 5-5h4V3h-4a5 5 0 0 0-5 5v11Z"></path></svg>;

function KapcsolatPage() {
  const contactInfo = {
    addresses: [
      { name: "Király utca", address: "1077 Budapest, Király u. 50.", mapSrc: "http://googleusercontent.com/maps/embed.html/0" },
      { name: "Káposztásmegyer", address: "1048 Budapest, Lóverseny tér 1.", mapSrc: "http://googleusercontent.com/maps/embed.html/1" },
      { name: "Nyírpalota út", address: "1157 Budapest, Nyírpalota út 2.", mapSrc: "http://googleusercontent.com/maps/embed.html/2" },
    ],
    phone: "+36 30 123 4567",
    socials: {
      facebook: "https://facebook.com/yourpage",
      instagram: "https://instagram.com/yourpage",
      tiktok: "https://tiktok.com/@yourpage",
    }
  };

  // HOZZÁADVA: A harmadik paraméter a strukturált adat
  useDocumentTitle(
    'Elérhetőségeink és Üzleteink Térképpel - Hot & Loaded',
    'Keress meg minket! Üzleteink címei, telefonszám, közösségi média elérhetőségek és interaktív térkép.',
    {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      'name': 'Hot & Loaded',
      'telephone': contactInfo.phone,
      'servesCuisine': ['Burger', 'Ice Cream'],
      'location': contactInfo.addresses.map(addr => ({
        '@type': 'FoodEstablishment',
        'name': `Hot & Loaded - ${addr.name}`,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': addr.address.split(',')[1].trim(),
          'addressLocality': 'Budapest',
          'postalCode': addr.address.split(',')[0],
          'addressCountry': 'HU'
        }
      }))
    }
  );

  const [activeMapSrc, setActiveMapSrc] = useState(contactInfo.addresses[0].mapSrc);

  return (
    <div className="kapcsolat-page-container">
      <header className="kapcsolat-header">
        <h1>Elérhetőségeink</h1>
        <p>Találj meg minket üzleteinkben, telefonon vagy a közösségi médiában!</p>
      </header>

      <main className="kapcsolat-content">
        <div className="kapcsolat-grid">
          <div className="kapcsolat-card">
            <div className="card-icon"><MapPinIcon /></div>
            <h3>Üzleteink</h3>
            <ul className="address-list">
              {contactInfo.addresses.map(item => (
                <li 
                  key={item.name}
                  className={activeMapSrc === item.mapSrc ? 'active' : ''}
                  onClick={() => setActiveMapSrc(item.mapSrc)}
                >
                  <strong>{item.name}:</strong><br />
                  {item.address}
                </li>
              ))}
            </ul>
          </div>

          <div className="kapcsolat-card">
            <div className="card-icon"><PhoneIcon /></div>
            <h3>Telefon & Közösségi Média</h3>
            <p className="phone-number">{contactInfo.phone}</p>
            <div className="social-links">
              <a href={contactInfo.socials.facebook} target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
              <a href={contactInfo.socials.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
              <a href={contactInfo.socials.tiktok} target="_blank" rel="noopener noreferrer"><TikTokIcon /></a>
            </div>
          </div>
        </div>

        <div className="map-section">
          <h2>Térkép</h2>
          <div className="map-container">
            <iframe
              src={activeMapSrc}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}

export default KapcsolatPage;