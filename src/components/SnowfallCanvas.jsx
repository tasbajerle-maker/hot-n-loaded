// Fájl: src/components/SnowfallCanvas.jsx
import React, { useRef, useEffect } from 'react';
import './SnowfallCanvas.css';

const SnowfallCanvas = ({ numberOfFlakes = 100, zIndex = 1 }) => {
  const canvasRef = useRef(null);
  const flakesRef = useRef([]); // A hópelyhek adatai (nem DOM elemek!)
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Segédfüggvény a véletlen számokhoz
    const random = (min, max) => min + Math.random() * (max - min + 1);

    // Beállítjuk a canvas méretét a konténer méretére
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      // Újrageneráljuk a hópelyheket, ha átméreteződik
      flakesRef.current = [];
      for (let i = 0; i < numberOfFlakes; i++) {
        flakesRef.current.push({
          x: random(0, canvas.width),
          y: random(0, canvas.height),
          radius: random(1, 3.5), // Méret
          density: random(1, numberOfFlakes), // Sebességfakt
          opacity: random(0.3, 1),
        });
      }
    };

    resizeCanvas();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; // Hó színe
      ctx.beginPath();

      for (let i = 0; i < numberOfFlakes; i++) {
        const flake = flakesRef.current[i];
        
        // Esés logika
        flake.y += Math.pow(flake.density, 2) * 0.001; // Lassabb esés
        flake.x += Math.sin(flake.y * 0.05) * 0.5; // Enyhe szitálás

        // Ha a hópehely alulra ért, visszatesszük felülre
        if (flake.y > canvas.height) {
          flake.y = -10; // Képernyőn kívülről indul
          flake.x = random(0, canvas.width);
        }

        ctx.moveTo(flake.x, flake.y);
        ctx.globalAlpha = flake.opacity;
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
      }
      
      ctx.fill();
      ctx.globalAlpha = 1; // Visszaállítjuk az átlátszóságot
      animationFrameId.current = requestAnimationFrame(draw);
    };

    // Animáció indítása
    draw();

    // Figyeljük az átméretezést
    window.addEventListener('resize', resizeCanvas);

    // Tisztító funkció
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [numberOfFlakes]);

  return (
    <canvas 
      ref={canvasRef} 
      className="snowfall-canvas" 
      style={{ zIndex: zIndex }} 
    />
  );
};

export default SnowfallCanvas;