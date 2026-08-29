import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

export type Category = 'Burgerek' | 'Csirkék' | 'Fagyik';

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  price?: number; 
  priceNormal?: number; 
  priceLarge?: number; 
  description: string;
  nutrition: NutritionInfo;
  allergens: string[];
  emoji: string;
  imageUrl?: string;
}

export interface InteractiveMenuProps {
  items?: MenuItem[];
}

const defaultItems: MenuItem[] = [
  {
    id: 'b-01', name: 'Tüzes Pokol Burger', category: 'Burgerek', price: 3490,
    description: 'Friss vágású, szaftos marhahús, dupla cheddar, jalapeño, titkos füstös szósz, kézműves buciban, nyílt lángon sütve.',
    nutrition: { calories: 850, protein: 42, carbs: 45, fat: 55 },
    allergens: ['Glutén', 'Tej', 'Tojás', 'Mustár'], emoji: '🍔',
  }
];

const getTheme = (category: Category) => {
  switch (category) {
    case 'Fagyik':
      return {
        bg: 'radial-gradient(150% 150% at 50% 0%, #ffffff 0%, #f7c9d4 60%, #e894a8 100%)',
        text: '#1c1410',
        accent: '#d6476b',
        cardBg: 'rgba(255, 255, 255, 0.55)',
        btnBg: '#1c1410',
        btnText: '#ffffff',
      };
    case 'Csirkék':
      return {
        bg: 'radial-gradient(150% 150% at 50% 0%, #ffc94a 0%, #7c2d12 100%)',
        text: '#fff6e9',
        accent: '#ffc94a',
        cardBg: 'rgba(28, 20, 16, 0.45)',
        btnBg: '#ffc94a',
        btnText: '#1c1410',
      };
    case 'Burgerek':
    default:
      return {
        bg: 'radial-gradient(150% 150% at 50% 0%, #ff5a1f 0%, #1c1410 80%)',
        text: '#fff6e9',
        accent: '#ff5a1f',
        cardBg: 'rgba(28, 20, 16, 0.45)',
        btnBg: '#ff5a1f',
        btnText: '#ffffff',
      };
  }
};

const slideVariants: Variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 150 : -150, opacity: 0, scale: 0.8, rotate: direction > 0 ? 15 : -15 }),
  center: { x: 0, opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 300, damping: 25 } },
  exit: (direction: number) => ({ x: direction < 0 ? 150 : -150, opacity: 0, scale: 0.8, rotate: direction < 0 ? 15 : -15, transition: { duration: 0.2 } }),
};

export default function InteractiveMenu({ items = defaultItems }: InteractiveMenuProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);
  const railRef = useRef<HTMLDivElement>(null);

  // --- ÚJ: BEOLVASSA AZ URL-T ÉS KINYITJA A RÉSZLETEKET ---
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const itemId = params.get('item');
      if (itemId) {
        const targetIndex = items.findIndex((i) => i.id === itemId);
        if (targetIndex !== -1) {
          setActiveIndex(targetIndex);
          setIsAccordionOpen(true); // <--- Azonnal kinyitjuk a kalóriát és allergéneket!
          
          // Odagörgetjük a sínt is a kiválasztott elemhez egy kis késleltetéssel
          setTimeout(() => {
            if (railRef.current) {
              const activeEl = railRef.current.children[targetIndex] as HTMLElement;
              if (activeEl) {
                activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
              }
            }
          }, 300);
        }
      }
    }
  }, [items]);

  const handleSelect = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsAccordionOpen(false); // Bezárjuk, ha a felhasználó másikra kattint

    // Opcionális varázslat: frissítjük az URL-t az új termékre
    if (typeof window !== 'undefined') {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('item', items[index].id);
      window.history.replaceState({}, '', newUrl);
    }
  };

  if (!items || items.length === 0) return null;

  const activeItem = items[activeIndex];
  const theme = getTheme(activeItem.category);

  return (
    <div className="im-container">
      <style>{styles}</style>

      <motion.div
        className="im-detail-area"
        animate={{ background: theme.bg, color: theme.text }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeItem.id}
            className="im-detail-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="im-visual-wrapper">
              <motion.div
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="im-emoji-container"
              >
                {activeItem.imageUrl ? (
                  <img src={activeItem.imageUrl} alt={activeItem.name} className="im-photo" />
                ) : (
                  <span className="im-emoji" aria-hidden="true">{activeItem.emoji}</span>
                )}
              </motion.div>
            </div>

            <div className="im-info-card" style={{ background: theme.cardBg, borderColor: 'rgba(255,255,255,0.1)' }}>
              
              <div className="im-card-header">
                <span className="im-badge" style={{ backgroundColor: theme.accent, color: activeItem.category === 'Fagyik' ? '#fff' : '#1c1410' }}>
                  {activeItem.category}
                </span>
                
                {activeItem.priceNormal && activeItem.priceLarge ? (
                  <div className="im-dual-price">
                    <div className="im-price-pill" style={{ background: 'rgba(0,0,0,0.06)' }}>
                      <small>Kicsi</small>
                      <span>{activeItem.priceNormal} Ft</span>
                    </div>
                    <div className="im-price-pill highlight" style={{ backgroundColor: theme.btnBg, color: theme.btnText }}>
                      <small style={{ color: 'inherit', opacity: 0.8 }}>Nagy</small>
                      <span>{activeItem.priceLarge} Ft</span>
                    </div>
                  </div>
                ) : (
                  <span className="im-price">
                    {new Intl.NumberFormat('hu-HU').format(activeItem.price || 0)} Ft
                  </span>
                )}
              </div>
              
              <h2 className="im-title">{activeItem.name}</h2>
              <p className="im-desc">{activeItem.description}</p>

              <div className="im-accordion" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                <button
                  className="im-acc-btn"
                  style={{ color: theme.text }}
                  onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                  aria-expanded={isAccordionOpen}
                >
                  <span className="im-acc-label">Kalória és Allergének</span>
                  <motion.svg
                    animate={{ rotate: isAccordionOpen ? 180 : 0 }}
                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {isAccordionOpen && (
                    <motion.div
                      className="im-acc-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="im-nutrition-grid">
                        <div className="im-nut-box" style={{ background: 'rgba(255,255,255,0.15)' }}><span>Kcal</span><strong>{activeItem.nutrition.calories}</strong></div>
                        <div className="im-nut-box" style={{ background: 'rgba(255,255,255,0.15)' }}><span>Fehérje</span><strong>{activeItem.nutrition.protein}g</strong></div>
                        <div className="im-nut-box" style={{ background: 'rgba(255,255,255,0.15)' }}><span>Szénh.</span><strong>{activeItem.nutrition.carbs}g</strong></div>
                        <div className="im-nut-box" style={{ background: 'rgba(255,255,255,0.15)' }}><span>Zsír</span><strong>{activeItem.nutrition.fat}g</strong></div>
                      </div>
                      <div className="im-allergens">
                        <strong>Allergének:</strong> {activeItem.allergens.length > 0 ? activeItem.allergens.join(', ') : 'Mentes'}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.a
                href="https://webappod.hu"
                className="im-cta-btn"
                style={{ backgroundColor: theme.btnBg, color: theme.btnText, textDecoration: 'none' }}
                whileTap={{ scale: 0.95 }}
                aria-label={`${activeItem.name} megrendelése`}
              >
                <span>Rendelés</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="im-rail-area">
        {/* --- ÚJ: ref={railRef} SEGÍT AZ ODAGÖRGETÉSBEN --- */}
        <div className="im-rail-track" role="tablist" ref={railRef}>
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                className={`im-rail-item ${isActive ? 'active' : ''}`}
                onClick={() => handleSelect(index)}
              >
                <div className="im-rail-icon">{item.emoji}</div>
                <div className="im-rail-name">{item.name}</div>
                
                {isActive && (
                  <motion.div
                    className="im-rail-indicator"
                    layoutId="railIndicator"
                    style={{ borderColor: getTheme(item.category).accent }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const styles = `
  .im-container { width: 100%; flex: 1; display: flex; flex-direction: column; font-family: 'Work Sans', sans-serif; border-radius: 32px; overflow: hidden; background: #f4efe9; box-shadow: 0 16px 32px rgba(0,0,0,0.1); }
  .im-detail-area { position: relative; width: 100%; flex: 1; padding: 16px 16px 12px; display: flex; flex-direction: column; justify-content: flex-end; }
  .im-detail-content { display: flex; flex-direction: column; flex: 1; justify-content: space-between; }
  .im-visual-wrapper { flex: 1; display: flex; align-items: center; justify-content: center; overflow: visible; min-height: 0; }
  .im-emoji-container { display: flex; align-items: center; justify-content: center; }
  .im-emoji { font-size: clamp(80px, 18vh, 130px); line-height: 1; filter: drop-shadow(0 16px 24px rgba(0,0,0,0.25)); }
  .im-photo { max-width: 80%; max-height: 200px; object-fit: contain; filter: drop-shadow(0 20px 30px rgba(0,0,0,0.3)); }
  .im-info-card { backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid; border-radius: 20px; padding: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); flex-shrink: 0; }
  .im-card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px; }
  .im-dual-price { display: flex; gap: 6px; }
  .im-price-pill { display: flex; flex-direction: column; align-items: center; padding: 4px 8px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.2); }
  .im-price-pill small { font-size: 8px; text-transform: uppercase; font-family: 'IBM Plex Mono', monospace; opacity: 0.8; margin-bottom: 2px; white-space: nowrap; }
  .im-price-pill span { font-family: 'IBM Plex Mono', monospace; font-size: 13px; font-weight: 700; }
  .im-badge { font-family: 'IBM Plex Mono', monospace; font-size: 10px; font-weight: 700; text-transform: uppercase; padding: 4px 10px; border-radius: 8px; letter-spacing: 0.05em; }
  .im-price { font-family: 'IBM Plex Mono', monospace; font-size: 18px; font-weight: 700; }
  .im-title { font-family: 'Anton', sans-serif; font-size: 22px; text-transform: uppercase; margin: 0 0 4px 0; line-height: 1.1; font-weight: 400; }
  .im-desc { font-size: 12px; line-height: 1.4; opacity: 0.85; margin: 0 0 12px 0; }
  .im-accordion { border-top: 1px dashed; border-bottom: 1px dashed; margin-bottom: 12px; }
  .im-acc-btn { width: 100%; background: none; border: none; padding: 10px 0; display: flex; justify-content: space-between; align-items: center; cursor: pointer; outline: none; }
  .im-acc-label { font-family: 'IBM Plex Mono', monospace; font-size: 10px; font-weight: 700; text-transform: uppercase; }
  .im-acc-content { overflow: hidden; }
  .im-nutrition-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 10px; }
  .im-nut-box { border: 1px solid rgba(255,255,255,0.15); border-radius: 10px; padding: 6px; text-align: center; display: flex; flex-direction: column; gap: 2px; }
  .im-nut-box span { font-size: 9px; text-transform: uppercase; opacity: 0.7; }
  .im-nut-box strong { font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 700; }
  .im-allergens { font-size: 11px; opacity: 0.8; padding-bottom: 12px; }
  .im-cta-btn { width: 100%; border: none; padding: 14px; border-radius: 14px; font-family: 'Anton', sans-serif; font-size: 16px; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; box-shadow: 0 4px 16px rgba(0,0,0,0.15); transition: transform 0.2s, background-color 0.3s; }
  .im-rail-area { position: relative; width: 100%; background: rgba(255,255,255,0.6); backdrop-filter: blur(10px); }
  .im-rail-area::after { content: ''; position: absolute; top: 0; bottom: 0; right: 0; width: 30px; background: linear-gradient(to right, transparent, rgba(244,239,233,1)); pointer-events: none; z-index: 5; }
  .im-rail-track { display: flex; gap: 12px; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; padding: 12px 30px 12px 16px; }
  .im-rail-track::-webkit-scrollbar { display: none; }
  .im-rail-item { scroll-snap-align: center; flex: 0 0 100px; position: relative; background: #fff; border: 2px solid transparent; border-radius: 16px; padding: 12px 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.04); outline: none; -webkit-tap-highlight-color: transparent; }
  .im-rail-icon { font-size: 28px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1)); position: relative; z-index: 2; }
  .im-rail-name { font-family: 'Anton', sans-serif; font-size: 11px; text-transform: uppercase; text-align: center; color: #1c1410; line-height: 1.1; position: relative; z-index: 2; font-weight: 400; }
  .im-rail-indicator { position: absolute; inset: -2px; border: 2px solid; border-radius: 18px; pointer-events: none; z-index: 1; }
`;