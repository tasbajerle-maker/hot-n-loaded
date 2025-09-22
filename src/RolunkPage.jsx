import React from 'react';
// Használhatunk egy meglévő stíluslapot az egyszerűség kedvéért
import './SzervizPage.css'; 

function RolunkPage() {
  return (
    <div className="szerviz-page-container">
      <main className="szerviz-content" style={{textAlign: 'center', marginTop: '50px'}}>
        <h1>Rólunk</h1>
        <p>Ez az oldal fejlesztés alatt áll. Hamarosan bemutatkozunk!</p>
      </main>
    </div>
  );
}

export default RolunkPage;