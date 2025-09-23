// Fájl: src/data/menuData.js

export const categories = [
  { id: 'limitalt', name: 'Limitált Ajánlatok', color: '#e53e3e' }, 
  { id: 'burgerek', name: 'Burgerek', color: '#ffc107' },
  { id: 'toastok', name: 'Toastok', color: '#ffab91' },
  { id: 'talak', name: 'Tálak', color: '#b2ebf2' },
  { id: 'koretek', name: 'Köretek', color: '#e8f5e9' },
  { id: 'martogatosok', name: 'Mártogatósok', color: '#fbe9e7' },
  { id: 'fagylaltok', name: 'Fagylaltjaink', color: '#00bcd4' },
  { id: 'italok', name: 'Italok', color: '#b39ddb' },
];

// Az "ÉLŐ" kínálat adatai
export const liveKinalatData = {
  'kiraly-utca': [
    { name: 'Belga Csoki', image: 'https://images.pexels.com/photos/3081665/pexels-photo-3081665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Pisztácia', image: 'https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Mangó', image: 'https://images.pexels.com/photos/6061399/pexels-photo-6061399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Eper', image: 'https://images.pexels.com/photos/2819089/pexels-photo-2819089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ],
  'kaposztasmegyer': [
    { name: 'Vanília', image: 'https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Citrom', image: 'https://images.pexels.com/photos/10296230/pexels-photo-10296230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Kávé', image: 'https://images.pexels.com/photos/1035654/pexels-photo-1035654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ],
  'nyirpalota-ut': [
    { name: 'Puncs', image: 'https://images.pexels.com/photos/2819089/pexels-photo-2819089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Diós Torta', image: 'https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Belga Csoki', image: 'https://images.pexels.com/photos/3081665/pexels-photo-3081665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ]
};

// A teljes menü, kategóriákra bontva
export const menuData = {
  limitalt: [
    { name: 'Rántott sajtos szilvás burger', ingredients: '', price: '2000 Ft' },
    { name: 'Mangós-csibeburger tojáspogácsával', ingredients: '', price: '2000 Ft' },
  ],
  burgerek: [
    { name: 'Sajtburger', ingredients: 'marhahúspogácsa, uborka, hagyma, sajt, házi burgerszósz', price: '1250 Ft' },
    { name: 'Csibeburger', ingredients: 'csirkemellpogácsa, jégsaláta, majonéz, cheddar sajt', price: '1250 Ft' },
    { name: 'Dupla Burger', ingredients: '2 marhahúspogácsa, dupla cheddar, jégsaláta, hagyma, paradicsom, házi burgerszósz', price: '2300 Ft' },
    { name: 'Dupla Csibeburger', ingredients: '2 csirkemellpogácsa, dupla cheddar, jégsaláta, paradicsom, zöldfűszeres majonéz', price: '2300 Ft' },
    { name: 'Rio Burger', ingredients: 'marhahúspogácsa, sajt, jalapeno, pirított hagyma, házi burgerszósz', price: '1500 Ft' },
    { name: 'Oklahoma Burger', ingredients: 'hagymával sült marhahús, uborka, cheddar', price: '1500 Ft' },
  ],
  toastok: [
    { name: 'Sajtos toast', ingredients: '', price: '700 Ft' },
    { name: 'Sajtos baconös toast', ingredients: '', price: '950 Ft' },
  ],
  talak: [
    { name: 'Burger tál', ingredients: 'dupla marhahús, dupla sajt, sültkrumpli, saláta, paradicsom, hagyma, bacon, pirított hagyma, házi burgerszósz', price: '2800 Ft' },
    { name: 'Csibe tál', ingredients: 'dupla csirkemell, dupla sajt, sültkrumpli, saláta, paradicsom, hagyma, bacon, pirított hagyma, házi burgerszósz', price: '2800 Ft' },
    { name: 'Loaded fries', ingredients: 'sültkrumpli, bacon, pirított hagyma, szószok', price: '2000 Ft' },
    { name: 'Jó reggelt tál', ingredients: 'tojás pogácsa, sültkrumpli, bacon, sajtos toast', price: '1900 Ft' },
    { name: 'Reggeli', ingredients: 'rántotta, sajtos toast', price: '1300 Ft' },
  ],
  koretek: [
    { name: 'Sültkrumpli kicsi (10 dkg)', price: '350 Ft' },
    { name: 'Sültkrumpli közepes (20 dkg)', price: '650 Ft' },
    { name: 'Sültkrumpli nagy (30 dkg)', price: '1000 Ft' },
    { name: 'Hagymakarika (5 db)', price: '750 Ft' },
    { name: 'Édesburgonya (20 dkg)', price: '1600 Ft' },
  ],
  martogatosok: [
    { name: 'Ketchup', price: '200 Ft' },
    { name: 'Mustár', price: '200 Ft' },
    { name: 'Majonéz', price: '200 Ft' },
    { name: 'Édes chili', price: '250 Ft' },
    { name: 'Gyümölcsös BBQ', price: '300 Ft' },
    { name: 'Shiitake gombás', price: '300 Ft' },
  ],
  fagylaltok: [
    { name: 'Szicíliai Pisztácia', ingredients: 'A fagylaltok királynője, kompromisszumok nélkül. Válogatott, enyhén sós, pörkölt zöld pisztáciából.', price: 'Külön árazás' },
    { name: 'Brazíliai Álom', ingredients: 'Zászlós-hajónk! Sárgakrém alap leheletnyi vaníliával, karamellás pekándiós öntettel variegálva.', price: 'Külön árazás' },
    { name: 'Aktuális kínálatunk', ingredients: 'Feltöltés alatt... Érdeklődj a pultnál!', price: ''}
  ],
  italok: [],
};