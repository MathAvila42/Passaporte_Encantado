import { createContext, useContext, useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { getPlace } from '../data/places';

const STORAGE_KEY = 'passaporte-encantado:v3';

const LEVELS = [
  { min: 0, label: 'Explorador Iniciante' },
  { min: 50, label: 'Viajante Curioso' },
  { min: 100, label: 'Embaixador' },
];

export function getLevelInfo(points) {
  let index = 0;
  LEVELS.forEach((lvl, i) => {
    if (points >= lvl.min) index = i;
  });
  return { current: LEVELS[index], next: LEVELS[index + 1] ?? null };
}

const DEFAULT_PERSISTED = {
  visitedIds: ['cristo-redentor', 'parque-moinhos', 'cantina-borghetti'],
  reviewedWhen: { 'cristo-redentor': 'há 2 dias', 'parque-moinhos': 'há 2 dias', 'cantina-borghetti': 'ontem' },
  favoriteIds: [],
};

function loadPersisted() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...DEFAULT_PERSISTED, ...JSON.parse(raw) } : DEFAULT_PERSISTED;
  } catch {
    return DEFAULT_PERSISTED;
  }
}

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  const [persisted, setPersisted] = useState(loadPersisted);
  const [showSplash, setShowSplash] = useState(true);
  const [tab, setTabRaw] = useState('inicio');
  const [previousTab, setPreviousTab] = useState('inicio');
  const [guiaView, setGuiaView] = useState('lista');
  const [detailId, setDetailId] = useState(null);
  const [showDuvidas, setShowDuvidas] = useState(false);
  const [confirmingId, setConfirmingId] = useState('cristo-redentor');
  const [qrStatus, setQrStatus] = useState('pending');
  const scanTimer = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
    } catch {
      // storage unavailable (private mode) — keep state in memory only
    }
  }, [persisted]);

  useEffect(() => () => clearTimeout(scanTimer.current), []);

  const setTab = useCallback(
    (key) => {
      setDetailId(null);
      setShowDuvidas(false);
      if (key !== tab) {
        setPreviousTab(tab);
        setTabRaw(key);
      }
    },
    [tab]
  );

  const closeQr = useCallback(() => setTab(previousTab === 'qr' ? 'inicio' : previousTab), [previousTab, setTab]);

  const markVisited = useCallback((id) => {
    setPersisted((prev) =>
      prev.visitedIds.includes(id)
        ? prev
        : {
            ...prev,
            visitedIds: [...prev.visitedIds, id],
            reviewedWhen: { ...prev.reviewedWhen, [id]: 'agora' },
          }
    );
  }, []);

  const toggleFavorite = useCallback((id) => {
    setPersisted((prev) => ({
      ...prev,
      favoriteIds: prev.favoriteIds.includes(id) ? prev.favoriteIds.filter((f) => f !== id) : [...prev.favoriteIds, id],
    }));
  }, []);

  // Simulated QR read: the chosen place becomes "Confirmando visita" and is confirmed after a short scan.
  const simulateScan = useCallback(
    (id) => {
      clearTimeout(scanTimer.current);
      setConfirmingId(id);
      setQrStatus('scanning');
      scanTimer.current = setTimeout(() => {
        markVisited(id);
        setQrStatus('done');
      }, 2200);
    },
    [markVisited]
  );

  const visitedIds = persisted.visitedIds;
  const points = visitedIds.filter((id) => getPlace(id)).length * 10;

  const value = useMemo(
    () => ({
      ...persisted,
      points,
      levelInfo: getLevelInfo(points),
      showSplash,
      startJourney: () => setShowSplash(false),
      tab,
      setTab,
      closeQr,
      guiaView,
      setGuiaView,
      detailId,
      openPlace: setDetailId,
      closePlace: () => setDetailId(null),
      showDuvidas,
      setShowDuvidas,
      confirmingId,
      qrStatus,
      simulateScan,
      markVisited,
      toggleFavorite,
    }),
    [persisted, points, showSplash, tab, setTab, closeQr, guiaView, detailId, showDuvidas, confirmingId, qrStatus, simulateScan, markVisited, toggleFavorite]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider');
  return ctx;
}
