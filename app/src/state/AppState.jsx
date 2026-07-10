import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { getPlace, PLACES } from '../data/places';

const STORAGE_KEY = 'passaporte-encantado:v2';

const LEVELS = [
  { min: 0, label: 'Explorador Iniciante' },
  { min: 50, label: 'Viajante Curioso' },
  { min: 100, label: 'Embaixador Encantado' },
];

export function getLevelInfo(points) {
  let current = LEVELS[0];
  let next = LEVELS[1];
  for (let i = 0; i < LEVELS.length; i += 1) {
    if (points >= LEVELS[i].min) {
      current = LEVELS[i];
      next = LEVELS[i + 1] ?? null;
    }
  }
  return { current, next };
}

const DEFAULT_PERSISTED = {
  points: 30,
  visitedIds: ['cristo-redentor', 'parque-moinhos', 'cantina-borghetti'],
  badgeIds: ['primeira-vista', 'gastronauta', 'amigo-natureza', 'passaporte-encantado'],
  favoriteIds: [],
  history: [
    { id: 'h1', placeId: 'cantina-borghetti', label: 'Visitou Cantina Borghetti', when: 'ontem', delta: 10 },
    { id: 'h2', placeId: 'parque-moinhos', label: 'Visitou Parque dos Moinhos', when: 'há 2 dias', delta: 10 },
    { id: 'h3', placeId: 'cristo-redentor', label: 'Visitou Cristo Redentor — Morro do Cristo', when: 'há 2 dias', delta: 10 },
  ],
};

function loadPersisted() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PERSISTED;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_PERSISTED, ...parsed };
  } catch {
    return DEFAULT_PERSISTED;
  }
}

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  const [persisted, setPersisted] = useState(loadPersisted);

  const [tab, setTabRaw] = useState('guia');
  const [guiaView, setGuiaView] = useState('home');
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const [mapView, setMapView] = useState('map');
  const [perfilView, setPerfilView] = useState('perfil');
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const [scanning, setScanning] = useState(false);
  const [showQrSuccess, setShowQrSuccess] = useState(false);
  const [chat, setChat] = useState({ q: '', a: '' });
  const [lastCheckedInId, setLastCheckedInId] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
  }, [persisted]);

  const setTab = useCallback((key) => {
    setTabRaw(key);
  }, []);

  const openPlace = useCallback((id) => {
    setSelectedPlaceId(id);
    setGuiaView('detail');
    setTabRaw('guia');
  }, []);

  const openMapa = useCallback(() => {
    setGuiaView('mapa');
    setTabRaw('guia');
  }, []);

  const backToGuiaHome = useCallback(() => {
    setGuiaView('home');
  }, []);

  const openConquistas = useCallback(() => setPerfilView('conquistas'), []);
  const backToPerfil = useCallback(() => setPerfilView('perfil'), []);

  const toggleFavorite = useCallback((id) => {
    setPersisted((prev) => {
      const has = prev.favoriteIds.includes(id);
      return {
        ...prev,
        favoriteIds: has ? prev.favoriteIds.filter((f) => f !== id) : [...prev.favoriteIds, id],
      };
    });
  }, []);

  const checkIn = useCallback((placeId) => {
    const place = getPlace(placeId);
    if (!place) return;
    setPersisted((prev) => {
      if (prev.visitedIds.includes(placeId)) return prev;
      const entry = {
        id: `h-${Date.now()}`,
        placeId,
        label: `Visitou ${place.name}`,
        when: 'agora há pouco',
        delta: place.points,
      };
      return {
        ...prev,
        points: prev.points + place.points,
        visitedIds: [...prev.visitedIds, placeId],
        badgeIds:
          place.badgeId && !prev.badgeIds.includes(place.badgeId)
            ? [...prev.badgeIds, place.badgeId]
            : prev.badgeIds,
        history: [entry, ...prev.history],
      };
    });
  }, []);

  const startScan = useCallback(() => {
    setScanning((currentlyScanning) => {
      if (currentlyScanning) return currentlyScanning;
      const next = PLACES.find((p) => !p.locked && !persisted.visitedIds.includes(p.id)) ?? PLACES[0];
      setTimeout(() => {
        checkIn(next.id);
        setLastCheckedInId(next.id);
        setScanning(false);
        setShowQrSuccess(true);
      }, 2200);
      return true;
    });
  }, [checkIn, persisted.visitedIds]);

  const closeSuccess = useCallback(() => {
    setShowQrSuccess(false);
    setTabRaw('perfil');
    setPerfilView('conquistas');
  }, []);

  const askQuestion = useCallback((q, a) => setChat({ q, a }), []);

  const value = useMemo(
    () => ({
      ...persisted,
      tab,
      setTab,
      guiaView,
      setGuiaView,
      selectedPlaceId,
      openPlace,
      openMapa,
      backToGuiaHome,
      mapView,
      setMapView,
      perfilView,
      openConquistas,
      backToPerfil,
      search,
      setSearch,
      activeCategory,
      setActiveCategory,
      scanning,
      showQrSuccess,
      chatQ: chat.q,
      chatA: chat.a,
      lastCheckedInId,
      startScan,
      closeSuccess,
      askQuestion,
      toggleFavorite,
      checkIn,
      levelInfo: getLevelInfo(persisted.points),
    }),
    [
      persisted,
      tab,
      setTab,
      guiaView,
      selectedPlaceId,
      openPlace,
      openMapa,
      backToGuiaHome,
      mapView,
      perfilView,
      openConquistas,
      backToPerfil,
      search,
      activeCategory,
      scanning,
      showQrSuccess,
      chat,
      lastCheckedInId,
      startScan,
      closeSuccess,
      askQuestion,
      toggleFavorite,
      checkIn,
    ]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider');
  return ctx;
}
