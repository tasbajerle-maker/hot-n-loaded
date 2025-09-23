// Fájl: src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Ikonok a közösségi médiához
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6" x2="17.51" y2="6"></line></svg>;
const TikTokIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V6a5 5 0 0 0-5-5H3v11a5 5 0 0 0 5 5h4Z"></path><path d="M12 19a5 5 0 0 1 5-5h4V3h-4a5 5 0 0 0-5 5v11Z"></path></svg>;

function Footer() {
  const socialLinks = {
    facebook: "https://www.facebook.com/profile.php?id=100050442016096",
    instagram: "https://www.instagram.com/nyalodafagyi/",
    tiktok: "https://www.tiktok.com/@nyaloda", // BEILLESZTVE
  };
  
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-logo">Hot & Loaded</h2>
          <p>Szaftos smash burgerek és kézműves fagylalt Budapest szívében. Minőség, kompromisszumok nélkül.</p>
        </div>
        <div className="footer-section links">
          <h3>Hasznos Linkek</h3>
          <ul>
            <li><Link to="/etlap">Étlap</Link></li>
            <li><Link to="/kuponok">Kuponok</Link></li>
            <li><Link to="/szerviz">Szerviz</Link></li>
            <li><Link to="/kapcsolat">Kapcsolat</Link></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3>Kövess Minket!</h3>
          <div className="social-icons">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer"><TikTokIcon /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Hot & Loaded | Minden jog fenntartva.
      </div>
    </footer>
  );
}

export default Footer;