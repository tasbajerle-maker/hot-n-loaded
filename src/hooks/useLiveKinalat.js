// Fájl: src/hooks/useLiveKinalat.js (ÁTMENETI, BIZTONSÁGOS VERZIÓ)

import { useState } from 'react';
// KIKOMMENTELVE: Mivel nincs backend, ne is próbáljuk behívni az api.js-ből.
// import { getLiveKinalat } from '../api.js'; 

function useLiveKinalat() {
  // Fix, statikus állapotot adunk vissza. Nem töltünk, nem várunk.
  const [kinalat] = useState({
    data: null,
    loading: false, // Azonnal false, hogy ne pörögjön a töltés ikon a vendég arcába
    // Ez a szöveg fog megjelenni az oldalon a hibaágon. 
    // Pont elég ahhoz, hogy tudják: a webappba kell menniük.
    error: 'Az élő fagyipult jelenleg frissítés alatt áll. A teljes kínálatot a Webappban találod!',
  });

  // A fetchData-t és a setInterval-t teljesen kivettük, 
  // hogy ne terheljük a klienst és ne dobáljunk felesleges konzol hibákat.

  return kinalat;
}

export default useLiveKinalat;