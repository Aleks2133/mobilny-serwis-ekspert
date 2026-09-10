// Centralne dane firmy — podmień pola oznaczone TODO na prawdziwe wartości.
export const site = {
  name: 'Mobilny Serwis Ekspert',
  shortName: 'Serwis Ekspert',
  // Domena kanoniczna (druga domena → przekierowanie 301).
  url: 'https://mobilnyserwisekspert.pl',
  // TODO: wstaw prawdziwy numer telefonu
  phone: '+48 000 000 000',
  phoneHref: 'tel:+48000000000',
  // TODO: prawdziwy numer WhatsApp (format międzynarodowy bez znaków i +)
  whatsapp: '48000000000',
  email: 'kontakt@mobilnyserwisekspert.pl',
  base: 'Orchów, gm. Łask',
  address: {
    street: 'Orchów 177',
    locality: 'Łask',
    postalCode: '98-100',
    region: 'łódzkie',
    country: 'PL',
  },
  // Współrzędne bazy w Orchowie — do map i danych strukturalnych (TODO: doprecyzować)
  geo: { lat: 51.62, lng: 19.12 },
  rangeKm: 120,
  hours: '24/7',
  yearsFounded: 2026,
  google: {
    rating: '5,0',
    reviews: 0,
    profileUrl: '', // TODO: link do wizytówki Google (Google Business Profile)
  },
} as const;

// Dane rejestrowe spółki — do stopki i polityki prywatności.
export const legal = {
  entity: 'BROXA Sp. z o.o.',
  entityFull: 'BROXA SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
  legalForm: 'Spółka z ograniczoną odpowiedzialnością',
  krs: '0000989824',
  nip: '9721330531',
  regon: '522971260',
  shareCapital: '5 000,00 zł',
  // Adres rejestrowy (siedziba); działalność operacyjna: Orchów 177, 98-100 Łask
  registeredAddress: 'ul. 28 Czerwca 1956 r. 223/229/106, 61-485 Poznań, woj. wielkopolskie',
  court: 'Sąd Rejonowy Poznań – Nowe Miasto i Wilda w Poznaniu, VIII Wydział Gospodarczy KRS',
  // Data ostatniej aktualizacji polityki prywatności
  privacyUpdated: '2026-09-09',
};

// Serwis stacjonarny + parking — nasze stałe punkty w Orchowie / Łasku.
export const facility = {
  stationary: {
    name: 'Serwis stacjonarny Łask',
    address: 'Orchów 177, 98-100 Łask',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Orch%C3%B3w+177%2C+98-100+%C5%81ask',
    desc: 'Naprawy umówione na miejscu — diagnostyka, drobne naprawy, przygotowanie auta po awarii na trasie.',
  },
  parking: {
    name: 'Strzeżony parking dla TIR-ów — Orchów przy węźle Łask',
    address: 'Orchów 177, 98-100 Łask',
    desc: 'Duży, ogrodzony i oświetlony plac tuż przy węźle Łask (S8/S14). Miejsce postoju dla ciężarówek, zestawów i pojazdów oczekujących na naprawę lub odbiór.',
    amenities: [
      { icon: 'parking', label: 'Parking strzeżony' },
      { icon: 'light', label: 'Teren oświetlony' },
      { icon: 'camera', label: 'Monitoring' },
      { icon: 'truck', label: 'Miejsca dla TIR i zestawów' },
      { icon: 'wc', label: 'Toalety' },
      { icon: 'shower', label: 'Prysznic' },
    ],
  },
} as const;

export const services = [
  {
    slug: 'pomoc-drogowa',
    title: 'Pomoc drogowa 24/7',
    desc: 'Szybki dojazd na trasę lub pobocze S8, S14, A1 i A2. Diagnoza na miejscu, uruchomienie auta lub transport do warsztatu.',
    icon: 'truck',
  },
  {
    slug: 'holowanie',
    title: 'Holowanie i laweta',
    desc: 'Transport auta osobowego i dostawczego z miejsca awarii lub kolizji — również w ramach OC sprawcy.',
    icon: 'tow',
  },
  {
    slug: 'mobilny-mechanik',
    title: 'Mobilny mechanik',
    desc: 'Naprawa na miejscu: wymiana koła, akumulatora, drobne usterki elektryki i układu paliwowego.',
    icon: 'wrench',
  },
  {
    slug: 'odpalanie-auta',
    title: 'Odpalanie auta',
    desc: 'Rozładowany akumulator, problem z rozruchem — przyjeżdżamy i uruchamiamy auto na miejscu.',
    icon: 'battery',
  },
  {
    slug: 'dowoz-paliwa',
    title: 'Dowóz paliwa',
    desc: 'Zabrakło paliwa na trasie? Dowozimy benzynę lub olej napędowy tam, gdzie stoisz.',
    icon: 'fuel',
  },
  {
    slug: 'transport-pojazdow',
    title: 'Transport pojazdów',
    desc: 'Przewóz pojazdów niesprawnych, powypadkowych i zabytkowych na krótkich i średnich dystansach.',
    icon: 'car',
  },
] as const;

export const steps = [
  { n: 1, title: 'Dzwonisz', desc: 'Odbieramy o każdej porze. Podajesz lokalizację (np. węzeł, MOP, kilometr trasy) i opis usterki.' },
  { n: 2, title: 'Wyceniamy', desc: 'Od razu podajemy orientacyjny koszt i czas dojazdu — bez ukrytych opłat.' },
  { n: 3, title: 'Dojeżdżamy', desc: 'Ruszamy w Twoją stronę. Bazujemy przy węźle Łask S8/S14 — w regionie mamy krótkie czasy dojazdu.' },
  { n: 4, title: 'Działamy na miejscu', desc: 'Naprawiamy usterkę na miejscu albo bezpiecznie ładujemy auto na lawetę.' },
  { n: 5, title: 'Dowozimy pod adres', desc: 'Transport do wskazanego warsztatu, domu, na nasz parking lub w bezpieczne miejsce. Płatność gotówką lub kartą.' },
] as const;

export const faq = [
  {
    q: 'Co robić, gdy auto zgaśnie na S8, S14, A1 lub A2?',
    a: 'Włącz światła awaryjne, zjedź maksymalnie na prawo (najlepiej na pas awaryjny lub MOP), wyjdź poza barierki, załóż kamizelkę i ustaw trójkąt w odpowiedniej odległości. Następnie zadzwoń do nas — podaj numer drogi, kierunek jazdy i najbliższy węzeł lub numer na słupku pikietażowym.',
  },
  {
    q: 'Jak szybko dojedziecie?',
    a: `Bazujemy w Orchowie przy węźle Łask (S8/S14), więc do miejscowości w promieniu ok. 30 km dojeżdżamy zwykle w 20–40 minut, a w zasięgu mamy też węzeł Stryków (A1/A2). Dokładny czas podajemy przez telefon w chwili zgłoszenia.`,
  },
  {
    q: 'Ile kosztuje holowanie z węzła Łask, węzła Stryków albo z MOP Sięganów?',
    a: 'Cena zależy od odległości, typu i masy pojazdu oraz pory. Zawsze podajemy konkretną kwotę przed wyjazdem — bez liczników i dopłat po fakcie.',
  },
  {
    q: 'Czy pomoc drogowa jest z OC sprawcy kolizji?',
    a: 'Tak. Jeśli nie jesteś sprawcą zdarzenia, koszt holowania i pojazdu zastępczego pokrywa OC sprawcy. Pomagamy skompletować dokumenty do zgłoszenia szkody.',
  },
  {
    q: 'Obsługujecie auta dostawcze, kampery i ciężarówki?',
    a: 'Obsługujemy samochody osobowe i dostawcze do 3,5 t. Dysponujemy też strzeżonym parkingiem dla TIR-ów przy węźle Łask. W przypadku pojazdów ciężarowych zadzwoń — ustalimy najlepsze rozwiązanie i miejsce postoju.',
  },
  {
    q: 'Macie serwis stacjonarny?',
    a: 'Tak — serwis stacjonarny mieści się w Orchowie 177 pod Łaskiem. Umów wizytę telefonicznie: robimy diagnostykę, drobne naprawy i przygotowanie auta po awarii na trasie.',
  },
  {
    q: 'Gdzie mogę zostawić samochód lub ciężarówkę?',
    a: 'Na naszym strzeżonym, oświetlonym i monitorowanym parkingu w Orchowie 177, tuż przy węźle Łask (S8/S14). Są miejsca dla TIR-ów i zestawów oraz toalety i prysznic dla kierowców.',
  },
  {
    q: 'W jakim obszarze działacie?',
    a: 'Promień ok. 120 km od Orchowa: m.in. Łask, Zduńska Wola, Sieradz, Pabianice, Łódź, Bełchatów, Piotrków Trybunalski, Wieluń, Zgierz i Stryków — oraz trasy S8, S14, A1 i A2 z węzłami i MOP-ami.',
  },
] as const;
