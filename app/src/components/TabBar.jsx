import { useAppState } from '../state/AppState';
import { C, FONT_BODY } from '../theme';
import { Compass, QrCode, User } from './Icons';

const TABS = [
  { key: 'inicio', label: 'Início', Icon: Compass },
  { key: 'guia', label: 'Guia', Icon: Compass },
  { key: 'qr', label: 'QR Code', Icon: QrCode },
  { key: 'perfil', label: 'Perfil', Icon: User },
];

// Floating pill navigation bar, as in the prototype.
export default function TabBar() {
  const { tab, setTab } = useAppState();

  return (
    <nav
      style={{
        position: 'absolute',
        left: '50%',
        bottom: 30,
        transform: 'translateX(-50%)',
        width: 330,
        height: 75,
        boxSizing: 'border-box',
        borderRadius: 38,
        background: C.tabBg,
        border: `1.5px solid ${C.greenDark}`,
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 11.5,
        zIndex: 50,
      }}
    >
      {TABS.map(({ key, label, Icon }) => {
        const active = tab === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => setTab(key)}
            style={{
              width: 70,
              height: 48,
              borderRadius: 24,
              border: 'none',
              background: active ? C.tabActive : 'transparent',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 3,
              padding: 0,
              cursor: 'pointer',
              color: C.greenDark,
              fontFamily: FONT_BODY,
            }}
          >
            <Icon size={21} stroke={1.8} />
            <span style={{ fontSize: 11.5, fontWeight: 600, lineHeight: 1 }}>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
