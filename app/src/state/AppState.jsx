import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { getPlace } from '../data/places';

const STORAGE_KEY = 'passaporte-encantado:v1';

const DEFAULT_PERSISTED = {
  points: 320,
  visitedIds: ['cristo-protetor', 'jardim-sentidos'],
  badgeIds: ['chegada-magica', 'jardim-sentidos', 'cristo-protetor'],
  accessibility: { textoGrande: true, rotaAcessivel: true, altoContraste: false },
  history: [
    { id: 'h1', placeId: 'jardim-sentidos', label: 'Jardim dos Sentidos', emoji: '🌸', emojiBg: '#E0F5EC', when: 'Hoje · 14h22', delta: 150 },
    { id: 'h2', placeId: 'cristo-protetor', label: 'Cristo Protetor', emoji: '⛪', emojiBg: '#FEF0E6', when: 'Ontem · 10h30', delta: 120 },
    { id: 'h3', placeId: null, label: 'Bônus boas-vindas', emoji: '🌟', emojiBg: '#F0EBF8', when: 'Primeiro check-in', delta: 50 },
  ],
};

function loadPersisted() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PERSISTED;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PERSISTED,
      ...parsed,
      accessibility: { ...DEFAULT_PERSISTED.accessibility, ...parsed.accessibility },
    };
  } catch {
    return DEFAULT_PERSISTED;
  }
}

function formatNowClock() {
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  return `${hh}h${mm}`;
}

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  const [persisted, setPersisted] = useState(loadPersisted);

  const [tab, setTab] = useState('explorar');
  const [mapView, setMapView] = useState('map');
  const [scanning, setScanning] = useState(false);
  const [showQrSuccess, setShowQrSuccess] = useState(false);
  const [chat, setChat] = useState({ q: '', a: '' });
  const [lastCheckedInId, setLastCheckedInId] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
  }, [persisted]);

  const checkIn = useCallback((placeId) => {
    const place = getPlace(placeId);
    if (!place) return;
    setPersisted((prev) => {
      if (prev.visitedIds.includes(placeId)) return prev;
      const entry = {
        id: `h-${Date.now()}`,
        placeId,
        label: place.name,
        emoji: place.emoji,
        emojiBg: place.emojiBg,
        when: `Hoje · ${formatNowClock()}`,
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

  const toggleAccessibility = useCallback((key) => {
    setPersisted((prev) => ({
      ...prev,
      accessibility: { ...prev.accessibility, [key]: !prev.accessibility[key] },
    }));
  }, []);

  const startScan = useCallback(() => {
    setScanning((currentlyScanning) => {
      if (currentlyScanning) return currentlyScanning;
      setTimeout(() => {
        checkIn('jardim-sentidos');
        setLastCheckedInId('jardim-sentidos');
        setScanning(false);
        setShowQrSuccess(true);
      }, 2200);
      return true;
    });
  }, [checkIn]);

  const closeSuccess = useCallback(() => {
    setShowQrSuccess(false);
    setTab('pontos');
  }, []);

  const askQuestion = useCallback((q, a) => setChat({ q, a }), []);

  const value = useMemo(
    () => ({
      ...persisted,
      tab,
      setTab,
      mapView,
      setMapView,
      scanning,
      showQrSuccess,
      chatQ: chat.q,
      chatA: chat.a,
      lastCheckedInId,
      startScan,
      closeSuccess,
      askQuestion,
      toggleAccessibility,
      checkIn,
    }),
    [persisted, tab, mapView, scanning, showQrSuccess, chat, lastCheckedInId, startScan, closeSuccess, askQuestion, toggleAccessibility, checkIn]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider');
  return ctx;
}
