// Különleges zárva tartás egy helyen. A sáv minden oldal tetején ebből készül, és az
// `until` időpontban magától eltűnik; a következő zárásnál elég ezt a pár sort átírni.

export const CLOSURE = {
	from: '2026-11-01T00:00:00+01:00',
	until: '2026-11-02T00:00:00+01:00',
	title: 'Ma, november 1-jén, Mindenszentek napján zárva tartunk',
	subtitle: 'Holnap, hétfőn 10:00-tól újra várunk!',
} as const;

export const isClosedNow = (now = Date.now()) => now >= Date.parse(CLOSURE.from) && now < Date.parse(CLOSURE.until);
