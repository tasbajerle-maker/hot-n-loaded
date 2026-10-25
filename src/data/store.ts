// A Király utcai üzlet adatai egy helyen – minden oldal és a keresőknek szóló
// strukturált adat innen olvas, hogy a név/cím/telefon mindenhol egyezzen.

export const STORE = {
	id: 'https://nyaloda.com/uzletek/kiraly-utca/#business',
	name: 'Nyaloda & Hot & Loaded – Újpest',
	street: 'Király u. 25.',
	postalCode: '1042',
	city: 'Budapest',
	district: 'Újpest (IV. kerület)',
	addressLine: '1042 Budapest (Újpest), Király utca 25.',
	// A navigáció a Király utca 25-öt pár száz méterrel odébb teszi; autóval ide kell jönni.
	navigationAddress: 'Virág utca 41.',
	geo: { latitude: 47.561414, longitude: 19.097975 },
	phone: '+36305620808',
	phoneDisplay: '+36 30 562 0808',
	orderUrl: 'https://enfagyi-app-122a0.web.app',
	sameAs: ['https://www.facebook.com/nyalodafagyizo', 'https://instagram.com/nyalodafagyi'],
	image: 'https://nyaloda.com/images/brand/og-default.jpg',
	logo: 'https://nyaloda.com/images/brand/logo-full.webp',
} as const;
