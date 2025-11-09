import React, { useEffect } from 'react';

/**
 * Ez a komponens nem renderel semmit, csak azonnal
 * átirányít a megadott külső URL-re.
 */
function ExternalRedirect({ to }) {
  useEffect(() => {
    // Azonnali átirányítás
    window.location.href = to;
  }, [to]); // 'to' elvileg nem változik, de a 'best practice' megköveteli

  // Amíg az átirányítás megtörténik (ami ezredmásodperc),
  // mutathatunk egy "töltő" képernyőt.
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif' 
    }}>
      <h2>Átirányítás...</h2>
    </div>
  );
}

export default ExternalRedirect;