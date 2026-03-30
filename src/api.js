// Fájl: src/api.js

// A Vite környezeti változókból (a .env fájlból) olvassuk ki a backend URL-t.
// Soha többé nem égetünk be linkeket a kódba!
const API_BASE_URL = import.meta.env.VITE_API_URL;

if (!API_BASE_URL) {
  console.error("KRITIKUS HIBA: Nincs beállítva a VITE_API_URL a .env fájlban!");
} else {
  console.log(`API hívások a következő címre mennek: ${API_BASE_URL}`);
}

async function request(endpoint, method = 'GET', body = null) {
  const config = { 
    method, 
    headers: { 'Content-Type': 'application/json' } 
  };
  
  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    // Biztonságos JSON parse ellenőrzéssel (Refaktorálva)
    const contentType = response.headers.get("content-type");
    let data = null;
    
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      // Ha a szerver elszáll, és HTML-t vagy sima szöveget dob vissza
      const text = await response.text();
      throw new Error(`Nem JSON válasz érkezett a szervertől. Tartalom: ${text.substring(0, 100)}...`);
    }

    if (!response.ok) {
      throw new Error(data?.message || `Hiba a(z) ${endpoint} hívásakor. Státuszkód: ${response.status}`);
    }
    
    return data;
  } catch (error) {
    // Központosított hálózati hibakezelés
    console.error(`Hálózati hiba a(z) ${endpoint} végponton:`, error);
    throw error;
  }
}

// Végpontok exportálása
export const getLiveKinalat = () => request('/api/stock/all-counters');