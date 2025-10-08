// Fájl: hot-n-loaded/src/api.js (TELJES, JAVÍTOTT VERZIÓ)

// --- JAVÍTÁS ITT ---
// A bonyolult if/else logikát lecseréljük egyetlen sorra,
// ami fejlesztés közben is az éles, működő backendet használja.
const API_BASE_URL = 'https://nyaloda.onrender.com';

/* A RÉGI, PROBLÉMÁS LOGIKA (ideiglenesen kikommentelve)

let API_BASE_URL;

// Ez a logika ellenőrzi, hogy fejlesztői vagy éles környezetben vagyunk-e.
if (process.env.NODE_ENV === 'development') {
    // Helyi fejlesztéskor a böngésző ablakának címéből vesszük a backend IP-címét,
    // de a portot 5000-re cseréljük. Így működni fog localhost-ról és telefonról is.
    API_BASE_URL = `http://${window.location.hostname}:5000`;
} else {
    // Élesben a Render.com címet használjuk.
    API_BASE_URL = 'https://nyaloda.onrender.com';
}
*/
// --- JAVÍTÁS VÉGE ---


console.log(`API hívások a következő címre mennek: ${API_BASE_URL}`);

// A fájl többi része változatlan
async function request(endpoint, method = 'GET', body = null) {
  const config = { 
    method, 
    headers: { 'Content-Type': 'application/json' } 
  };
  
  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  
  // Fontos: a .json() hívás hibát dobhat, ha a válasz üres vagy nem json
  // Ezt érdemes lekezelni a jövőben
  const data = await response.json(); 
  if (!response.ok) {
    throw new Error(data.message || `Hiba a(z) ${endpoint} hívásakor.`);
  }
  return data;
}

export const getLiveKinalat = () => request('/api/stock/all-counters');