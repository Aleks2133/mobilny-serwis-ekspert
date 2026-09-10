export type City = {
  slug: string;
  name: string;
  nameLoc: string; // miejscownik: "w ..."
  distanceKm: number;
  driveMin: string;
  intro: string;
  landmarks: string[];
  /** 2–3 akapity unikalnej treści pod SEO (long-tail lokalny) */
  body?: string[];
};

export const cities: City[] = [
  {
    slug: 'pomoc-drogowa-lask',
    name: 'Łask',
    nameLoc: 'Łasku',
    distanceKm: 8,
    driveMin: '10–20 min',
    intro:
      'Bazujemy w Orchowie w gminie Łask, tuż przy węźle Łask S8/S14. Do Łasku i okolic dojeżdżamy najszybciej w całym regionie.',
    landmarks: ['węzeł Łask (S8/S14)', 'DK12/14', 'Kolumna', 'Łask-Wieś', 'Orchów'],
    body: [
      'Pomoc drogowa Łask to nasza „domowa" lokalizacja — serwis stacjonarny i strzeżony parking mamy w Orchowie 177, przy samym węźle Łask. Do centrum miasta, dzielnicy Kolumna, strefy przy DK12/14 i okolicznych wsi docieramy zwykle w kilkanaście minut.',
      'Obsługujemy awarie i kolizje na S8 oraz S14 w rejonie węzła Łask, uruchamiamy auta z rozładowanym akumulatorem, wymieniamy koła i holujemy pojazdy osobowe oraz dostawcze do 3,5 t. Jeśli naprawa wymaga warunków warsztatowych, auto trafia na nasz plac w Orchowie.',
      'Dla kierowców zawodowych mamy miejsce postoju dla ciężarówek i zestawów wraz z toaletą i prysznicem — przydatne, gdy pojazd czeka na części albo na odbiór przez lawetę.',
    ],
  },
  {
    slug: 'pomoc-drogowa-zdunska-wola',
    name: 'Zduńska Wola',
    nameLoc: 'Zduńskiej Woli',
    distanceKm: 18,
    driveMin: '20–30 min',
    intro:
      'Zduńska Wola leży przy S8 między węzłami Łask i Sieradz Wschód. Obsługujemy miasto, strefę przemysłową i odcinki trasy ekspresowej.',
    landmarks: ['węzeł Zduńska Wola', 'S8', 'DK12', 'Karsznice', 'strefa przemysłowa'],
    body: [
      'Pomoc drogowa Zduńska Wola obejmuje miasto, dzielnicę Karsznice, tereny przemysłowe wzdłuż DK12 oraz odcinek S8 między węzłami Łask i Zduńska Wola. Z bazy w Orchowie jesteśmy na miejscu zwykle w 20–30 minut.',
      'Najczęstsze zgłoszenia z tego rejonu to awarie na trasie ekspresowej, kolizje na węźle, rozładowane akumulatory na parkingach zakładowych i przebite opony. Naprawiamy na miejscu albo holujemy do wskazanego warsztatu lub na nasz plac przy węźle Łask.',
    ],
  },
  {
    slug: 'pomoc-drogowa-sieradz',
    name: 'Sieradz',
    nameLoc: 'Sieradzu',
    distanceKm: 32,
    driveMin: '25–40 min',
    intro:
      'Do Sieradza i węzłów Sieradz Wschód oraz Sieradz Południe jedziemy prosto S8. Obsługujemy miasto, obwodnicę i trasę w kierunku Wielunia.',
    landmarks: ['węzeł Sieradz Wschód', 'węzeł Sieradz Południe', 'S8', 'MOP Dąbrowa Wielka'],
    body: [
      'Pomoc drogowa Sieradz to obsługa miasta, obwodnicy oraz odcinka S8 z węzłami Sieradz Wschód i Sieradz Południe i MOP-em Dąbrowa Wielka. Dojazd z bazy przy węźle Łask zajmuje zwykle 25–40 minut.',
      'Holujemy pojazdy z pasa awaryjnego i z MOP-ów, dowozimy paliwo, wymieniamy koła i uruchamiamy auta po awarii rozruchu. Przy kolizji pomagamy z dokumentami do holowania z OC sprawcy.',
    ],
  },
  {
    slug: 'pomoc-drogowa-pabianice',
    name: 'Pabianice',
    nameLoc: 'Pabianicach',
    distanceKm: 28,
    driveMin: '25–40 min',
    intro:
      'Pabianice obsługujemy od strony S14 (zachodnia obwodnica aglomeracji) i DK14. Dojeżdżamy do miasta, węzła Dobroń i okolicznych tras.',
    landmarks: ['węzeł Dobroń', 'S14', 'DK14', 'Pabianice Północ', 'Pabianice Południe'],
    body: [
      'Pomoc drogowa Pabianice obejmuje miasto oraz trasy S14 i DK14 łączące Pabianice z Łodzią i Łaskiem. Z bazy w Orchowie jedziemy głównie przez węzeł Dobroń — dojazd to zwykle 25–40 minut.',
      'Obsługujemy awarie i stłuczki na obwodnicy, wymianę koła, dowóz paliwa oraz holowanie aut osobowych i dostawczych. Pojazd możemy odstawić do warsztatu w Pabianicach lub na nasz strzeżony parking przy węźle Łask.',
    ],
  },
  {
    slug: 'pomoc-drogowa-lodz',
    name: 'Łódź',
    nameLoc: 'Łodzi',
    distanceKm: 40,
    driveMin: '35–55 min',
    intro:
      'Do Łodzi dojeżdżamy S14 i S8. Obsługujemy zachodnią i południową część miasta oraz ekspresówki wokół aglomeracji.',
    landmarks: ['S14', 'S8', 'A1', 'węzeł Łódź Południe', 'węzeł Łódź Górna'],
    body: [
      'Pomoc drogowa Łódź w naszym wykonaniu to przede wszystkim zachodnia i południowa część miasta oraz ekspresowy ring aglomeracji — S14, S8 i fragmenty A1. Do tych rejonów dojeżdżamy w 35–55 minut, w zależności od ruchu.',
      'Realizujemy holowanie, uruchamianie aut, wymianę kół i dowóz paliwa. Dla firm transportowych z Łodzi udostępniamy strzeżony parking dla TIR-ów przy węźle Łask z toaletą i prysznicem.',
    ],
  },
  {
    slug: 'pomoc-drogowa-zgierz',
    name: 'Zgierz',
    nameLoc: 'Zgierzu',
    distanceKm: 50,
    driveMin: '45–60 min',
    intro:
      'Zgierz obsługujemy trasami S14 i A2 na północ od Łodzi. Dojeżdżamy do miasta, węzłów obwodnicy i strefy przemysłowej.',
    landmarks: ['S14', 'A2', 'węzeł Zgierz Południe', 'węzeł Emilia', 'DK91'],
    body: [
      'Pomoc drogowa Zgierz obejmuje miasto oraz węzły S14 i A2 po północnej stronie aglomeracji łódzkiej. To trasy silnie obciążone ruchem ciężarowym, dlatego często wyjeżdżamy tu do awarii i kolizji z udziałem pojazdów dostawczych.',
      'Holujemy, uruchamiamy auta i dowozimy paliwo. Pojazd oczekujący na naprawę lub odbiór można zostawić na naszym monitorowanym placu przy węźle Łask.',
    ],
  },
  {
    slug: 'pomoc-drogowa-strykow',
    name: 'Stryków',
    nameLoc: 'Strykowie',
    distanceKm: 62,
    driveMin: '55–75 min',
    intro:
      'Stryków to jedno z największych skrzyżowań autostrad w Polsce — węzeł Stryków łączy A1 i A2, a nieopodal biegnie S8. Obsługujemy to newralgiczne miejsce oraz okoliczne MOP-y.',
    landmarks: ['węzeł Stryków (A1/A2)', 'A1', 'A2', 'S8', 'MOP Swędów', 'MOP Skoszewy'],
    body: [
      'Węzeł Stryków to punkt, w którym spotykają się autostrady A1 (Gdańsk–Katowice) i A2 (Świecko–Warszawa), a w pobliżu przebiega S8. Ruch tranzytowy i ciężarowy jest tu ogromny, więc awarie i kolizje zdarzają się często — a dojazd „z trasy" bywa utrudniony.',
      'Pomoc drogowa Stryków w naszym wykonaniu to holowanie z pasa awaryjnego A1 i A2, transport z MOP-ów (m.in. Swędów, Skoszewy), uruchamianie pojazdów i wymiana kół. Dla kierowców zawodowych mamy strzeżony parking dla TIR-ów przy węźle Łask z toaletą i prysznicem — jeśli naprawa się przeciąga, pojazd stoi bezpiecznie.',
      'Dojazd z bazy w Orchowie zajmuje zwykle 55–75 minut. Przy zgłoszeniu podaj autostradę, kierunek jazdy (np. A1 na Toruń, A2 na Warszawę) i najbliższy węzeł lub słupek pikietażowy.',
    ],
  },
  {
    slug: 'pomoc-drogowa-belchatow',
    name: 'Bełchatów',
    nameLoc: 'Bełchatowie',
    distanceKm: 45,
    driveMin: '40–55 min',
    intro:
      'Bełchatów i okolice obsługujemy drogami DK74 i S8 przez węzeł Piotrków. Dojeżdżamy do miasta, kopalni i strefy przemysłowej.',
    landmarks: ['DK74', 'S8', 'Rogowiec', 'Zelów', 'elektrownia Bełchatów'],
    body: [
      'Pomoc drogowa Bełchatów obejmuje miasto, rejon kopalni i elektrowni w Rogowcu oraz drogi DK74 i S8 łączące Bełchatów z resztą regionu. Dojazd z bazy w Orchowie to zwykle 40–55 minut.',
      'Obsługujemy awarie na trasach dojazdowych do zakładów, holowanie pojazdów osobowych i dostawczych, wymianę kół oraz dowóz paliwa. Pomagamy też z dokumentami przy szkodzie z OC sprawcy.',
    ],
  },
  {
    slug: 'pomoc-drogowa-piotrkow-trybunalski',
    name: 'Piotrków Trybunalski',
    nameLoc: 'Piotrkowie Trybunalskim',
    distanceKm: 60,
    driveMin: '50–70 min',
    intro:
      'Piotrków to węzeł S8/A1/DK12/DK74/DK91. Obsługujemy miasto oraz odcinki tras w kierunku Łodzi, Warszawy i Częstochowy.',
    landmarks: ['węzeł Piotrków Zachód', 'A1', 'S8', 'DK12', 'MOP Bujny'],
    body: [
      'Pomoc drogowa Piotrków Trybunalski to obsługa jednego z największych węzłów drogowych w centralnej Polsce — spotykają się tu S8, A1 i drogi krajowe DK12, DK74 i DK91. Ruch tranzytowy jest bardzo duży.',
      'Holujemy z pasa awaryjnego i z MOP Bujny, uruchamiamy auta, dowozimy paliwo i wymieniamy koła. Dojazd z bazy w Orchowie zajmuje zwykle 50–70 minut.',
    ],
  },
  {
    slug: 'pomoc-drogowa-wielun',
    name: 'Wieluń',
    nameLoc: 'Wieluniu',
    distanceKm: 62,
    driveMin: '55–75 min',
    intro:
      'Do Wielunia jedziemy S8 przez węzeł Wieluń. Obsługujemy miasto, obwodnicę i trasę w kierunku Sieradza oraz granicy województwa.',
    landmarks: ['węzeł Wieluń', 'S8', 'DK74', 'DK43', 'obwodnica Wielunia'],
    body: [
      'Pomoc drogowa Wieluń obejmuje miasto, obwodnicę i odcinek S8 z węzłem Wieluń, a także drogi DK74 i DK43. Z bazy przy węźle Łask jedziemy prosto S8 — dojazd to zwykle 55–75 minut.',
      'Obsługujemy awarie i kolizje na trasie ekspresowej, holowanie aut osobowych i dostawczych oraz uruchamianie pojazdów. Pojazd można odstawić do warsztatu w Wieluniu lub na nasz plac w Orchowie.',
    ],
  },
];

export type Route = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  points: string[];
  body?: string[];
};

export const routes: Route[] = [
  {
    slug: 'pomoc-drogowa-s8',
    name: 'Pomoc drogowa S8',
    short: 'S8',
    intro:
      'Bazujemy przy węźle Łask na S8. Obsługujemy odcinek od Piotrkowa Trybunalskiego przez Łask i Sieradz aż po Wieluń — awarie, kolizje, holowanie z pasa awaryjnego i MOP-ów.',
    points: [
      'węzeł Łask',
      'węzeł Zduńska Wola',
      'węzeł Sieradz Wschód',
      'węzeł Sieradz Południe',
      'węzeł Złoczew',
      'węzeł Wieluń',
      'węzeł Piotrków Zachód',
      'MOP Sięganów',
      'MOP Paprotnia',
      'MOP Dąbrowa Wielka',
    ],
    body: [
      'S8 przebiega dosłownie obok naszej bazy w Orchowie — węzeł Łask jest w zasięgu kilku minut. To jeden z najbardziej obciążonych odcinków ekspresówek w regionie, z dużym udziałem ruchu ciężarowego.',
      'Obsługujemy awarie i kolizje na obu jezdniach, holowanie z pasa awaryjnego oraz z MOP-ów Sięganów, Paprotnia i Dąbrowa Wielka. Przy zgłoszeniu podaj kierunek jazdy (Wrocław / Warszawa), najbliższy węzeł i numer na słupku pikietażowym.',
    ],
  },
  {
    slug: 'pomoc-drogowa-s14',
    name: 'Pomoc drogowa S14',
    short: 'S14',
    intro:
      'S14 to zachodnia obwodnica aglomeracji łódzkiej. Od węzła Róża (połączenie z S8) obsługujemy trasę przez Pabianice, Konstantynów Łódzki i Zgierz.',
    points: [
      'węzeł Róża (S8/S14)',
      'węzeł Dobroń',
      'węzeł Pabianice Północ',
      'węzeł Konstantynów Łódzki',
      'węzeł Lublinek',
      'węzeł Zgierz Południe',
    ],
    body: [
      'S14 łączy S8 (węzeł Róża) z autostradą A2 pod Zgierzem, omijając Łódź od zachodu. Trasa jest młoda, ale mocno obciążona — szczególnie w godzinach szczytu i w sezonie transportowym.',
      'Dojeżdżamy do awarii i kolizji na całym odcinku, holujemy pojazdy osobowe i dostawcze, wymieniamy koła i dowozimy paliwo. Bazę mamy przy węźle Róża/Łask, więc na S14 jesteśmy szybko.',
    ],
  },
  {
    slug: 'pomoc-drogowa-a1',
    name: 'Pomoc drogowa A1',
    short: 'A1',
    intro:
      'A1 (Gdańsk–Katowice) przecina region na wschód od naszej bazy. Obsługujemy odcinek od węzła Piotrków Południe przez węzeł Tuszyn i węzeł Łódź Południe aż po węzeł Stryków, gdzie A1 krzyżuje się z A2.',
    points: [
      'węzeł Stryków (A1/A2)',
      'węzeł Łódź Południe',
      'węzeł Tuszyn',
      'węzeł Piotrków Wschód',
      'MOP Swędów',
      'MOP Bądków',
    ],
    body: [
      'A1 to główna oś tranzytowa północ–południe. Na wysokości Łodzi i Piotrkowa ruch ciężarowy jest ekstremalny, a zdarzenia na pasie awaryjnym wymagają szybkiej i bezpiecznej reakcji.',
      'Realizujemy holowanie z A1, transport z MOP-ów, uruchamianie pojazdów i wymianę kół. Dla pojazdów ciężarowych oczekujących na naprawę udostępniamy strzeżony parking przy węźle Łask z toaletą i prysznicem. Przy zgłoszeniu podaj kierunek (Toruń / Częstochowa) i najbliższy węzeł.',
    ],
  },
  {
    slug: 'pomoc-drogowa-a2',
    name: 'Pomoc drogowa A2',
    short: 'A2',
    intro:
      'A2 (Świecko–Warszawa) biegnie na północ od Łodzi. Obsługujemy odcinek w rejonie węzła Stryków — największego skrzyżowania autostrad w Polsce, gdzie A2 łączy się z A1.',
    points: [
      'węzeł Stryków (A1/A2)',
      'węzeł Zgierz',
      'węzeł Emilia',
      'MOP Skoszewy',
      'MOP Kolonia',
    ],
    body: [
      'Węzeł Stryków to punkt, w którym A2 spotyka się z A1 — jeden z najbardziej newralgicznych fragmentów sieci autostrad. Kolizje i awarie potrafią tu paraliżować ruch na kilku kierunkach naraz.',
      'Dojeżdżamy do zdarzeń na A2 w rejonie Strykowa i Zgierza, holujemy, uruchamiamy pojazdy i wymieniamy koła. Kierowcom zawodowym oferujemy postój na strzeżonym parkingu dla TIR-ów przy węźle Łask.',
    ],
  },
];
