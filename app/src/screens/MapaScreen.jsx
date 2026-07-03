import { useAppState } from '../state/AppState';
import { StarRow } from '../components/StarRating';

const CHIPS = ['Todos', 'Restaurantes', 'Natureza', 'Gastronomia', 'Cultura'];

const LIST_ITEMS = [
  {
    id: 'cristo-redentor',
    name: 'Cristo Redentor –\nMorro do Cristo',
    rating: 4.8,
    checkIn: false,
    bg: '#B8CEB8',
    art: (
      <svg viewBox="0 0 90 80" width="90" height="80">
        <rect width="90" height="80" fill="#8AAA90" />
        <path d="M0 55 L30 25 L55 45 L70 20 L90 40 L90 80 L0 80Z" fill="#2D6A40" />
        <ellipse cx="45" cy="68" rx="40" ry="15" fill="#5B9EC9" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: 'parque-meninas',
    name: 'Parque das Meninas',
    rating: 4.5,
    checkIn: false,
    bg: '#A8D8A8',
    art: (
      <svg viewBox="0 0 90 80" width="90" height="80">
        <rect width="90" height="80" fill="#88B888" />
        <rect x="10" y="50" width="70" height="10" fill="#2D6A40" opacity="0.5" />
        <circle cx="25" cy="35" r="15" fill="#4A8C5C" opacity="0.7" />
        <circle cx="55" cy="40" r="12" fill="#4A8C5C" opacity="0.6" />
        <circle cx="72" cy="32" r="10" fill="#4A8C5C" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 'cantina-segaloni',
    name: 'Cantina Segaloni',
    rating: 4.7,
    checkIn: true,
    bg: '#D8C0A8',
    art: (
      <svg viewBox="0 0 90 80" width="90" height="80">
        <rect width="90" height="80" fill="#C8A070" />
        <rect x="15" y="25" width="60" height="40" rx="3" fill="rgba(255,255,255,0.2)" />
        <rect x="25" y="35" width="15" height="12" rx="1" fill="rgba(255,255,255,0.35)" />
        <rect x="50" y="35" width="15" height="12" rx="1" fill="rgba(255,255,255,0.35)" />
        <rect x="35" y="45" width="20" height="20" rx="1" fill="rgba(255,255,255,0.25)" />
      </svg>
    ),
  },
  {
    id: 'museu-municipal',
    name: 'Museu Municipal',
    rating: 4.4,
    checkIn: true,
    bg: '#C8D8E8',
    art: (
      <svg viewBox="0 0 90 80" width="90" height="80">
        <rect width="90" height="80" fill="#A0B8D0" />
        <rect x="10" y="20" width="70" height="45" rx="2" fill="rgba(255,255,255,0.18)" />
        <rect x="18" y="28" width="20" height="16" rx="1" fill="rgba(255,255,255,0.3)" />
        <rect x="50" y="28" width="20" height="16" rx="1" fill="rgba(255,255,255,0.3)" />
        <rect x="30" y="42" width="30" height="23" rx="1" fill="rgba(255,255,255,0.2)" />
      </svg>
    ),
  },
  {
    id: 'vinicola-sega-luos',
    name: 'Vinícola Sega Luos',
    rating: 4.6,
    checkIn: true,
    bg: '#E8D8C8',
    art: (
      <svg viewBox="0 0 90 80" width="90" height="80">
        <rect width="90" height="80" fill="#C09870" />
        <rect x="15" y="25" width="25" height="35" rx="2" fill="rgba(255,255,255,0.25)" />
        <rect x="50" y="30" width="20" height="30" rx="2" fill="rgba(255,255,255,0.2)" />
        <ellipse cx="27" cy="22" rx="10" ry="6" fill="rgba(255,255,255,0.15)" />
      </svg>
    ),
  },
  {
    id: 'igreja-matriz',
    name: 'Igreja Matriz São Luís',
    rating: 4.5,
    checkIn: true,
    bg: '#D0C8E0',
    art: (
      <svg viewBox="0 0 90 80" width="90" height="80">
        <rect width="90" height="80" fill="#A898C8" />
        <path d="M30 65 L45 15 L60 65Z" fill="rgba(255,255,255,0.25)" />
        <rect x="41" y="24" width="8" height="41" fill="rgba(255,255,255,0.2)" />
        <rect x="36" y="58" width="18" height="7" rx="1" fill="rgba(255,255,255,0.15)" />
      </svg>
    ),
  },
];

function MapArt() {
  return (
    <svg viewBox="0 0 402 580" width="402" height="580" style={{ display: 'block', position: 'absolute', inset: 0 }}>
      <rect width="402" height="580" fill="#E8F0E4" />
      <rect x="0" y="210" width="402" height="10" fill="white" opacity="0.9" />
      <rect x="0" y="340" width="402" height="8" fill="white" opacity="0.8" />
      <rect x="155" y="0" width="9" height="580" fill="white" opacity="0.9" />
      <rect x="280" y="0" width="7" height="580" fill="white" opacity="0.8" />
      <rect x="60" y="0" width="6" height="340" fill="white" opacity="0.7" />
      <rect x="168" y="224" width="100" height="104" rx="12" fill="#C8DFC0" opacity="0.8" />
      <rect x="68" y="224" width="72" height="90" rx="10" fill="#C8DFC0" opacity="0.6" />
      <rect x="295" y="354" width="80" height="70" rx="10" fill="#C8DFC0" opacity="0.6" />
      <rect x="20" y="60" width="35" height="28" rx="3" fill="#D8E4D8" opacity="0.8" />
      <rect x="62" y="40" width="45" height="36" rx="3" fill="#D8E4D8" opacity="0.7" />
      <rect x="165" y="55" width="55" height="40" rx="3" fill="#D8E4D8" opacity="0.8" />
      <rect x="290" y="45" width="65" height="50" rx="3" fill="#D8E4D8" opacity="0.8" />
      <rect x="20" y="260" width="30" height="24" rx="3" fill="#D8E4D8" opacity="0.7" />
      <rect x="290" y="260" width="40" height="32" rx="3" fill="#D8E4D8" opacity="0.7" />
      <rect x="60" y="370" width="50" height="38" rx="3" fill="#D8E4D8" opacity="0.7" />
      <rect x="175" y="360" width="88" height="60" rx="3" fill="#D8E4D8" opacity="0.7" />
      <path d="M0 480 Q80 468 160 482 Q240 495 320 475 Q365 462 402 476 L402 580 L0 580Z" fill="#9DCFE0" opacity="0.6" />

      <rect x="72" y="148" width="130" height="32" rx="16" fill="#1A7A6A" />
      <circle cx="88" cy="164" r="10" fill="rgba(255,255,255,0.25)" />
      <text x="104" y="169" fontFamily="Nunito,sans-serif" fontSize="11" fill="white" fontWeight="800">Jardim dos Sentidos</text>
      <polygon points="100,180 110,180 105,188" fill="#1A7A6A" />

      <rect x="244" y="84" width="118" height="32" rx="16" fill="#E8834A" />
      <circle cx="260" cy="100" r="10" fill="rgba(255,255,255,0.25)" />
      <text x="276" y="105" fontFamily="Nunito,sans-serif" fontSize="11" fill="white" fontWeight="800">Cristo Protetor</text>
      <polygon points="280,116 290,116 285,124" fill="#E8834A" />

      <rect x="170" y="284" width="120" height="32" rx="16" fill="#7C5CBF" />
      <circle cx="186" cy="300" r="10" fill="rgba(255,255,255,0.25)" />
      <text x="202" y="305" fontFamily="Nunito,sans-serif" fontSize="11" fill="white" fontWeight="800">Museu Municipal</text>
      <polygon points="212,316 222,316 217,324" fill="#7C5CBF" />

      <rect x="295" y="180" width="102" height="32" rx="16" fill="#C8820A" />
      <circle cx="311" cy="196" r="10" fill="rgba(255,255,255,0.25)" />
      <text x="327" y="201" fontFamily="Nunito,sans-serif" fontSize="11" fill="white" fontWeight="800">Cantina Segaloni</text>
      <polygon points="335,212 345,212 340,220" fill="#C8820A" />

      <rect x="20" y="370" width="110" height="32" rx="16" fill="#3A9A5C" />
      <circle cx="36" cy="386" r="10" fill="rgba(255,255,255,0.25)" />
      <text x="52" y="391" fontFamily="Nunito,sans-serif" fontSize="11" fill="white" fontWeight="800">Parque das Meninas</text>
      <polygon points="68,402 78,402 73,410" fill="#3A9A5C" />

      <rect x="164" y="440" width="100" height="32" rx="16" fill="#2A6EA0" />
      <circle cx="180" cy="456" r="10" fill="rgba(255,255,255,0.25)" />
      <text x="196" y="461" fontFamily="Nunito,sans-serif" fontSize="11" fill="white" fontWeight="800">Vinícola Sega Luos</text>
      <polygon points="214,472 224,472 219,480" fill="#2A6EA0" />

      <circle cx="370" cy="30" r="18" fill="white" opacity="0.9" />
      <text x="370" y="26" textAnchor="middle" fontSize="10" fill="#2A7A50" fontWeight="900" fontFamily="Nunito">N</text>
      <polygon points="370,27 372,38 370,35 368,38" fill="#2A7A50" />
    </svg>
  );
}

export default function MapaScreen() {
  const { mapView, setMapView } = useAppState();
  const isMap = mapView === 'map';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ padding: '62px 16px 12px', borderBottom: '1px solid #F0F4F2', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ fontSize: 21, fontWeight: 900, color: '#1A2421' }}>Mapa Turístico</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 36, height: 36, background: '#F0F4F2', borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M7 12h10M10 18h4" stroke="#2A7A50" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div style={{ background: '#F0F4F2', borderRadius: 10, padding: 2, display: 'flex', gap: 0 }}>
              <div
                onClick={() => setMapView('map')}
                style={{ padding: '6px 14px', borderRadius: 8, cursor: 'pointer', background: isMap ? 'white' : 'transparent', boxShadow: isMap ? '0 1px 4px rgba(0,0,0,0.1)' : 'none' }}
              >
                <span style={{ fontSize: 12, fontWeight: 800, color: isMap ? '#1A2421' : '#9BA8A0' }}>Mapa</span>
              </div>
              <div
                onClick={() => setMapView('list')}
                style={{ padding: '6px 14px', borderRadius: 8, cursor: 'pointer', background: !isMap ? 'white' : 'transparent', boxShadow: !isMap ? '0 1px 4px rgba(0,0,0,0.1)' : 'none' }}
              >
                <span style={{ fontSize: 12, fontWeight: 800, color: !isMap ? '#1A2421' : '#9BA8A0' }}>Lista</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', margin: '0 -16px', padding: '0 16px' }}>
          {CHIPS.map((chip, i) => (
            <div key={chip} style={{ background: i === 0 ? '#2A7A50' : '#F0F4F2', borderRadius: 20, padding: '6px 14px', whiteSpace: 'nowrap', flexShrink: 0 }}>
              <span style={{ fontSize: 12, fontWeight: i === 0 ? 700 : 600, color: i === 0 ? 'white' : '#5A7A70' }}>{chip}</span>
            </div>
          ))}
        </div>
      </div>

      {isMap ? (
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <MapArt />
        </div>
      ) : (
        <div style={{ flex: 1, overflowY: 'auto', padding: '14px 16px 90px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {LIST_ITEMS.map((item) => (
              <div key={item.id} style={{ background: 'white', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center' }}>
                <div style={{ width: 90, height: 80, flexShrink: 0, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  {item.art}
                </div>
                <div style={{ flex: 1, padding: '12px 14px' }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: '#1A2421', lineHeight: 1.2, whiteSpace: 'pre-line' }}>{item.name}</div>
                  {item.checkIn ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                      <StarRow rating={item.rating} />
                      <span style={{ background: '#E8834A', color: 'white', borderRadius: 8, padding: '4px 10px', fontSize: 11, fontWeight: 800 }}>Check-in</span>
                    </div>
                  ) : (
                    <div style={{ marginTop: 5 }}>
                      <StarRow rating={item.rating} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
