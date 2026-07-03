import { useAppState } from '../state/AppState';

const TABS = [
  { key: 'explorar', label: 'Explorar' },
  { key: 'mapa', label: 'Mapa' },
  { key: 'qr', label: 'QR Code' },
  { key: 'duvidas', label: 'Dúvidas' },
  { key: 'perfil', label: 'Perfil' },
];

function isActiveFor(key, tab) {
  if (key === 'perfil') return tab === 'perfil' || tab === 'conquistas' || tab === 'pontos';
  return tab === key;
}

function ExplorarIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <polyline points="9 22 9 12 15 12 15 22" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function MapaIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M9 4L3 7.5V19l6-3 6 3 6-3V4.5l-6 3-6-3z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <line x1="9" y1="4" x2="9" y2="16" stroke={color} strokeWidth="2" />
      <line x1="15" y1="7.5" x2="15" y2="19.5" stroke={color} strokeWidth="2" />
    </svg>
  );
}

function QrIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="2" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.8" />
      <rect x="12" y="2" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.8" />
      <rect x="2" y="12" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.8" />
      <rect x="4" y="4" width="4" height="4" fill="white" />
      <rect x="14" y="4" width="4" height="4" fill="white" />
      <rect x="4" y="14" width="4" height="4" fill="white" />
      <rect x="13" y="13" width="2" height="2" fill="white" />
      <rect x="17" y="13" width="2" height="2" fill="white" />
      <rect x="13" y="17" width="2" height="2" fill="white" />
      <rect x="17" y="17" width="2" height="2" fill="white" />
      <rect x="15" y="15" width="2" height="2" fill="white" />
    </svg>
  );
}

function DuvidasIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function PerfilIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="2" />
      <path d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const ICONS = {
  explorar: ExplorarIcon,
  mapa: MapaIcon,
  duvidas: DuvidasIcon,
  perfil: PerfilIcon,
};

export default function TabBar() {
  const { tab, setTab } = useAppState();

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        background: 'white',
        borderTop: '1px solid #EEF4F0',
        zIndex: 50,
        display: 'flex',
        alignItems: 'flex-start',
        paddingTop: 8,
        boxSizing: 'border-box',
      }}
    >
      {TABS.map((t) => {
        const active = isActiveFor(t.key, tab);
        const color = active ? '#2A7A50' : '#9BA8A0';
        const weight = active ? '800' : '600';

        if (t.key === 'qr') {
          return (
            <div
              key={t.key}
              onClick={() => setTab('qr')}
              style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: 'pointer', marginTop: -16 }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  background: '#2A7A50',
                  borderRadius: 25,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(42,122,80,0.4)',
                  border: '3px solid white',
                }}
              >
                <QrIcon />
              </div>
              <span style={{ fontSize: 10, fontWeight: weight, color }}>{t.label}</span>
            </div>
          );
        }

        const Icon = ICONS[t.key];
        return (
          <div
            key={t.key}
            onClick={() => setTab(t.key)}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, cursor: 'pointer', paddingTop: 2 }}
          >
            <Icon color={color} />
            <span style={{ fontSize: 10, fontWeight: weight, color }}>{t.label}</span>
          </div>
        );
      })}
    </div>
  );
}
