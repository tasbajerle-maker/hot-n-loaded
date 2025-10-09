import React, { useState, useCallback } from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';
import './KapcsolatPage.css';

// Ikonok...
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0-7-9-13-9-13s-9 6-9 13c0 4.5 4 8 9 8s9-3.5 9-8z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const TikTokIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V6a5 5 0 0 0-5-5H3v11a5 5 0 0 0 5 5h4Z"></path><path d="M12 19a5 5 0 0 1 5-5h4V3h-4a5 5 0 0 0-5 5v11Z"></path></svg>;

// Konstans adatok a komponensen kívül definiálva.
const contactInfo = {
  addresses: [
    { name: "Király utca", address: "1042 Budapest, Király u. 25.", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.7487224203673!2d19.09602331562854!3d47.55240297918118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741db1b6a386229%3A0x6ab4936d808e689!2sBudapest%2C%20Kenderes%20u.%2025%2C%201042!5e0!3m2!1shu!2shu!4v1665321458742!5m2!1shu!2shu" },
    { name: "Káposztásmegyer", address: "1041 Budapest, Óceánárok utca 29.", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.6934149667793!2d19.10301881562998!3d47.5921869791838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741e1b21235b27b%3A0xe3737b85e3305a4!2sBudapest%2C%20%C3%93ce%C3%A1n%C3%A1rok%20u.%2029%2C%201041!5e0!3m2!1shu!2shu!4v1665321568412!5m2!1shu!2shu" },
    { name: "Nyírpalota út", address: "1157 Budapest, Nyírpalota út 52.", mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.383138858273!2d19.1388333156287!3d47.55938597918165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c30a59979b9b%3A0x8f731c697816f1a8!2sBudapest%2C%20Ny%C3%ADrpalota%20%C3%BAt%2052%2C%201157!5e0!3m2!1shu!2shu!4v1665321624587!5m2!1shu!2shu" },
  ],
  email: "hokuszpokuszicekft@gmail.com",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=100050442016096",
    instagram: "https://www.instagram.com/nyalodafagyi/",
    tiktok: "https://www.tiktok.com/@nyaloda",
  }
};

function KapcsolatPage() {
  useDocumentTitle(
    'Elérhetőségeink és Üzleteink Térképpel - Hot & Loaded',
    'Keress meg minket! Üzleteink címei, email, közösségi média elérhetőségek és interaktív térkép.',
    {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      'name': 'Hot & Loaded',
      'email': contactInfo.email,
      'servesCuisine': ['Burger', 'Ice Cream'],
      'location': [
          {
            '@type': 'FoodEstablishment',
            'name': 'Hot & Loaded - Király utca',
            'address': { '@type': 'PostalAddress', 'streetAddress': 'Király u. 25.', 'addressLocality': 'Budapest', 'postalCode': '1042', 'addressCountry': 'HU' }
          },
          {
            '@type': 'FoodEstablishment',
            'name': 'Hot & Loaded - Káposztásmegyer',
            'address': { '@type': 'PostalAddress', 'streetAddress': 'Óceánárok utca 29.', 'addressLocality': 'Budapest', 'postalCode': '1041', 'addressCountry': 'HU' }
          },
          {
            '@type': 'FoodEstablishment',
            'name': 'Hot & Loaded - Nyírpalota út',
            'address': { '@type': 'PostalAddress', 'streetAddress': 'Nyírpalota út 52.', 'addressLocality': 'Budapest', 'postalCode': '1157', 'addressCountry': 'HU' }
          }
      ]
    }
  );

  const [activeMapSrc, setActiveMapSrc] = useState(contactInfo.addresses[0].mapSrc);

  const handleAddressClick = useCallback((mapSrc) => {
    setActiveMapSrc(mapSrc);
  }, []);

  const handleAddressKeyDown = (event, mapSrc) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleAddressClick(mapSrc);
    }
  };


  return (
    <div className="kapcsolat-page-container">
      <header className="kapcsolat-header">
        <h1>Elérhetőségeink</h1>
        <p>Találj meg minket üzleteinkben, emailben vagy a közösségi médiában!</p>
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
                  onClick={() => handleAddressClick(item.mapSrc)}
                  onKeyDown={(e) => handleAddressKeyDown(e, item.mapSrc)}
                  tabIndex="0"
                  role="button"
                >
                  <strong>{item.name}:</strong><br />
                  {item.address}
                </li>
              ))}
            </ul>
          </div>

          <div className="kapcsolat-card">
            <div className="card-icon"><MailIcon /></div>
            <h3>Email & Közösségi Média</h3>
            <a href={`mailto:${contactInfo.email}`} className="email-address">{contactInfo.email}</a>
            <div className="social-links">
              <a href={contactInfo.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook oldalunk"><FacebookIcon /></a>
              <a href={contactInfo.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram profilunk"><InstagramIcon /></a>
              <a href={contactInfo.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok csatornánk"><TikTokIcon /></a>
            </div>
          </div>
        </div>

        <div className="map-section">
          <h2>Térkép</h2>
          <div className="map-container">
            <iframe
              key={activeMapSrc}
              src={activeMapSrc}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Térkép - ${contactInfo.addresses.find(addr => addr.mapSrc === activeMapSrc)?.name || ''}`}
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}

export default KapcsolatPage;