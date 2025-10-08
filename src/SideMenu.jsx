// Fájl: src/SideMenu.jsx (A VÉGLEGES, KIEGÉSZÍTETT VERZIÓ)

import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './SideMenu.css';

// Ikonok a menühöz
const HomeIcon = () => <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const EtlapIcon = () => <svg viewBox="0 0 24 24"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 0 2 2"></path><path d="M16 2v20"></path></svg>;
const KuponIcon = () => <svg viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>;
const SzervizIcon = () => <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>;
const InfoIcon = () => <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>;
const MailIcon = () => <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;

// --- HOZZÁADVA: A HÍREK IKON DEFINÍCIÓJA ---
const NewsIcon = () => <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;

function SideMenu({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    onClose();
    navigate(path);
  };

  return (
    <div className={`sidemenu-container ${isOpen ? 'show' : ''}`}>
      <div className="sidemenu-backdrop" onClick={onClose}></div>
      <div className="sidemenu">
        <div className="sidemenu-header">
          <h2>Menü</h2>
          <button onClick={onClose} className="close-button">&times;</button>
        </div>
        <ul>
          <li><button onClick={() => handleNavigate('/')}><div className="sidemenu-icon"><HomeIcon /></div>Főoldal</button></li>
          <li><button onClick={() => handleNavigate('/etlap')}><div className="sidemenu-icon"><EtlapIcon /></div>Étlap</button></li>
          <li><button onClick={() => handleNavigate('/kuponok')}><div className="sidemenu-icon"><KuponIcon /></div>Kuponok</button></li>
          <li><button onClick={() => handleNavigate('/szerviz')}><div className="sidemenu-icon"><SzervizIcon /></div>Szerviz</button></li>
          
          {/* --- HOZZÁADVA: A HÍREK MENÜPONT --- */}
          <li><button onClick={() => handleNavigate('/hirek')}><div className="sidemenu-icon"><NewsIcon /></div>Hírek</button></li>
          
          <li className="sidemenu-divider"><hr /></li>

          <li><button onClick={() => handleNavigate('/rolunk')}><div className="sidemenu-icon"><InfoIcon /></div>Rólunk</button></li>
          <li><button onClick={() => handleNavigate('/kapcsolat')}><div className="sidemenu-icon"><MailIcon /></div>Kapcsolat</button></li>
        </ul>
      </div>
    </div>
  );
}

SideMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SideMenu;