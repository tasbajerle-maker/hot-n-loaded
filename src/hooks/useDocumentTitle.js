// Fájl: src/hooks/useDocumentTitle.js

import { useEffect } from 'react';

// MÓDOSÍTVA: A hook most már egy harmadik, opcionális "schemaData" paramétert is elfogad.
function useDocumentTitle(title, description, schemaData = null) {
  useEffect(() => {
    // Cím és leírás beállítása (ez a rész változatlan)
    const originalTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription ? metaDescription.getAttribute('content') : '';

    document.title = title;
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // --- ÚJ RÉSZ KEZDETE ---
    const oldSchemaScript = document.getElementById('app-schema');
    if (oldSchemaScript) {
      oldSchemaScript.remove();
    }

    if (schemaData) {
      const script = document.createElement('script');
      script.id = 'app-schema';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }
    // --- ÚJ RÉSZ VÉGE ---

    // "Takarítás" funkció
    return () => {
      document.title = originalTitle;
      if (metaDescription) {
        metaDescription.setAttribute('content', originalDescription);
      }
      // A takarítás eltávolítja a scriptet, amikor elnavigálunk az oldalról
      const schemaScript = document.getElementById('app-schema');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [title, description, schemaData]); // MÓDOSÍTVA: Figyeljük a schemaData változását is
}

export default useDocumentTitle;