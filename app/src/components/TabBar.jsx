import { useAppState } from '../state/AppState';

const TABS = [
  { key: 'duvidas', label: 'Dúvidas' },
  { key: 'qr', label: 'QR Code' },
  { key: 'guia', label: 'Guia' },
  { key: 'perfil', label: 'Perfil' },
];

function DuvidasIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function QrIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke={color} strokeWidth="2" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke={color} strokeWidth="2" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke={color} strokeWidth="2" />
      <rect x="15.2" y="15.2" width="2.4" height="2.4" fill={color} />
      <rect x="19.4" y="15.2" width="2.4" height="2.4" fill={color} />
      <rect x="15.2" y="19.4" width="2.4" height="2.4" fill={color} />
      <rect x="19.4" y="19.4" width="2.4" height="2.4" fill={color} />
    </svg>
  );
}

function GuiaIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
      <path d="M15.2 8.8l-2 4.4-4.4 2 2-4.4z" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="1.4" strokeLinejoin="round" />
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
  duvidas: DuvidasIcon,
  qr: QrIcon,
  guia: GuiaIcon,
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
        paddingTop: 10,
        boxSizing: 'border-box',
      }}
    >
      {TABS.map((t) => {
        const active = tab === t.key;
        const color = active ? '#2A7A50' : '#9BA8A0';
        const weight = active ? '800' : '600';
        const Icon = ICONS[t.key];
        return (
          <div
            key={t.key}
            onClick={() => setTab(t.key)}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: 'pointer' }}
          >
            <Icon color={color} />
            <span style={{ fontSize: 10, fontWeight: weight, color }}>{t.label}</span>
          </div>
        );
      })}
    </div>
  );
}
