export type Post = {
  slug: string;
  type: 'realizacja' | 'poradnik';
  title: string;
  date: string; // ISO
  location?: string;
  excerpt: string;
  body: string[];
};

// Startowe wpisy — podmieniaj na prawdziwe realizacje ze zdjęciami z miejsca zdarzenia.
export const posts: Post[] = [
  {
    slug: 'awaria-wezel-lask-wymiana-kola',
    type: 'realizacja',
    title: 'Węzeł Łask S8 — wymiana koła w 20 minut',
    date: '2026-09-05',
    location: 'Węzeł Łask, S8',
    excerpt:
      'Zgłoszenie o przebitej oponie tuż za zjazdem z S8. Auto stało na pasie awaryjnym — priorytet: bezpieczeństwo i szybki dojazd.',
    body: [
      'Kierowca zadzwonił po najechaniu na element metalowy na jezdni. Opona straciła powietrze w kilkanaście sekund, udało się zjechać na pas awaryjny za węzłem Łask.',
      'Byliśmy na miejscu w 18 minut. Zabezpieczyliśmy miejsce zdarzenia, wymieniliśmy koło na dojazdowe i sprawdziliśmy pozostałe opony pod kątem uszkodzeń.',
      'Kierowca kontynuował podróż, a uszkodzoną oponę zabrał do wulkanizacji w Łasku.',
    ],
  },
  {
    slug: 'holowanie-mop-sieganow-do-zdunskiej-woli',
    type: 'realizacja',
    title: 'MOP Sięganów — holowanie do warsztatu w Zduńskiej Woli',
    date: '2026-09-02',
    location: 'MOP Sięganów, S8',
    excerpt:
      'Auto dostawcze z awarią rozrządu dotoczyło się na MOP Sięganów. Transport lawetą do wskazanego warsztatu.',
    body: [
      'Po niepokojącym dźwięku z silnika kierowca zdążył zjechać na MOP Sięganów i wyłączyć jednostkę — to prawdopodobnie uratowało silnik przed poważniejszą szkodą.',
      'Podstawiliśmy lawetę, załadowaliśmy pojazd i odwieźliśmy go do warsztatu partnerskiego w Zduńskiej Woli. Koszt i czas podaliśmy przez telefon przed wyjazdem.',
    ],
  },
  {
    slug: 'rozladowany-akumulator-pabianice',
    type: 'realizacja',
    title: 'Pabianice — rozładowany akumulator, auto odpalone na miejscu',
    date: '2026-08-28',
    location: 'Pabianice, DK14',
    excerpt:
      'Auto nie odpaliło rano na parkingu przy DK14. Dojazd, pomiar akumulatora i rozrusznika, uruchomienie z prostownika rozruchowego.',
    body: [
      'Klient dzwoni przed pracą — auto martwe po zimnej nocy. Umawiamy się na miejsce postoju przy DK14 w Pabianicach.',
      'Na miejscu: pomiar napięcia akumulatora (mocno poniżej normy), sprawdzenie zacisków i alternatora. Uruchomienie z profesjonalnego urządzenia rozruchowego, bez szarpania pasażerów „na pych".',
      'Zaleciliśmy wymianę akumulatora — po 6 latach był u kresu. Klient dojechał do pracy bez spóźnienia.',
    ],
  },
  {
    slug: 'co-robic-gdy-auto-zgasnie-na-s8',
    type: 'poradnik',
    title: 'Co robić, gdy auto zgaśnie na S8 lub S14',
    date: '2026-08-20',
    excerpt:
      'Krótka, konkretna instrukcja krok po kroku — jak bezpiecznie zatrzymać się na drodze ekspresowej i wezwać pomoc.',
    body: [
      '1. Włącz światła awaryjne od razu, gdy poczujesz spadek mocy.',
      '2. Zjedź maksymalnie na prawo — najlepiej na pas awaryjny, zjazd lub MOP. Jeśli się nie da, zatrzymaj się jak najbliżej bariery.',
      '3. Wyjdź z auta stroną od strony bariery, przejdź za barierki. Wszyscy pasażerowie też.',
      '4. Załóż kamizelkę odblaskową (trzymaj ją w kabinie, nie w bagażniku).',
      '5. Ustaw trójkałt ostrzegawczy w odpowiedniej odległości — na drodze ekspresowej to co najmniej 100 m za pojazdem.',
      '6. Zadzwoń po pomoc. Podaj: numer drogi, kierunek jazdy, najbliższy węzeł lub numer na słupku pikietażowym, opis usterki.',
    ],
  },
  {
    slug: 'ile-kosztuje-holowanie-z-drogi-ekspresowej',
    type: 'poradnik',
    title: 'Ile kosztuje holowanie z drogi ekspresowej i kto za nie płaci',
    date: '2026-08-10',
    excerpt:
      'Od czego zależy cena holowania, kiedy koszt pokrywa OC sprawcy, a kiedy assistance z Twojej polisy.',
    body: [
      'Cena holowania zależy od: odległości, typu i masy pojazdu, pory (noc, weekend), a także od tego, czy pojazd trzeba wyciągnąć z rowu lub skarpy.',
      'Jeśli nie jesteś sprawcą kolizji — holowanie i auto zastępcze pokrywa OC sprawcy. Zachowaj oświadczenie lub notatkę policyjną i poproś nas o fakturę.',
      'Jeśli to awaria, a masz assistance w polisie — sprawdź limit kilometrów i zakres. Często i tak szybciej jest zadzwonić bezpośrednio do lokalnej pomocy drogowej.',
      'U nas zawsze podajemy konkretną kwotę przez telefon, przed wyjazdem — bez liczników i dopłat po fakcie.',
    ],
  },
];

export const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
