import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById('root');

// Itt ellenőrizzük, hogy a Prerenderer (react-snap) teleszemetelte-e már a DOM-ot a HTML-lel.
if (rootElement.hasChildNodes()) {
  // Ha igen, akkor csak rácsatlakozunk, hogy a Googlebot lássa a nyers tartalmat
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Ha nem (pl. fejlesztői környezetben a dev szerveren futtatva), simán renderelünk
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}