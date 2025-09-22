// Fájl: src/hooks/useLiveKinalat.js (A VÉGLEGES, HELYES VERZIÓ)

import { useState, useEffect, useCallback } from 'react';
// EZ A HELYES SOR:
import { getLiveKinalat } from '../api.js'; 

function useLiveKinalat() {
  const [kinalat, setKinalat] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = useCallback(async () => {
    setKinalat(prev => ({ ...prev, loading: true }));
    try {
      const data = await getLiveKinalat();
      setKinalat({ data, loading: false, error: null });
    } catch (error) {
      console.error("Hiba a kínálat lekérése közben:", error);
      setKinalat({ data: null, loading: false, error: error.message || 'Hiba a betöltés során.' });
    }
  }, []);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 120000); 
    return () => clearInterval(intervalId);
  }, [fetchData]);

  return kinalat;
}

export default useLiveKinalat;