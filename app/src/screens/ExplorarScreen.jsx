import { useAppState } from '../state/AppState';
import { PLACES } from '../data/places';
import { StarRow, RatingPill } from '../components/StarRating';

const CHIPS = ['Todos', 'Restaurantes', 'Atrações', 'Natureza', 'Eventos'];

function HeroPhoto() {
  return (
    <svg viewBox="0 0 362 178" width="362" height="178" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#B8DFF0" />
        </linearGradient>
        <linearGradient id="mtnG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A8C5C" />
          <stop offset="100%" stopColor="#2D6A40" />
        </linearGradient>
        <linearGradient id="waterG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5B9EC9" />
          <stop offset="100%" stopColor="#3A7EA8" />
        </linearGradient>
      </defs>
      <rect width="362" height="178" fill="url(#skyG)" />
      <ellipse cx="60" cy="35" rx="35" ry="14" fill="white" opacity="0.7" />
      <ellipse cx="85" cy="28" rx="28" ry="12" fill="white" opacity="0.8" />
      <ellipse cx="280" cy="25" rx="30" ry="11" fill="white" opacity="0.6" />
      <ellipse cx="310" cy="18" rx="22" ry="9" fill="white" opacity="0.7" />
      <path d="M0 120 L60 55 L120 100 L180 50 L240 90 L300 45 L362 80 L362 178 L0 178Z" fill="#6BA575" opacity="0.6" />
      <path d="M0 140 L80 75 L160 120 L220 65 L290 100 L362 70 L362 178 L0 178Z" fill="url(#mtnG)" />
      <ellipse cx="181" cy="160" rx="160" ry="28" fill="url(#waterG)" opacity="0.85" />
      <path d="M30 155 Q90 148 150 158 Q220 168 290 155 Q330 150 362 158" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
      <rect x="18" y="128" width="5" height="20" fill="#2D5A30" />
      <polygon points="20,108 12,130 28,130" fill="#3A7A3E" />
      <rect x="38" y="132" width="4" height="16" fill="#2D5A30" />
      <polygon points="40,115 33,135 47,135" fill="#3A7A3E" />
      <rect x="320" y="125" width="5" height="22" fill="#2D5A30" />
      <polygon points="322,105 314,127 330,127" fill="#3A7A3E" />
      <rect x="340" y="130" width="4" height="18" fill="#2D5A30" />
      <polygon points="342,112 335,132 349,132" fill="#3A7A3E" />
      <ellipse cx="240" cy="155" rx="30" ry="6" fill="rgba(255,220,100,0.25)" />
      <rect x="12" y="148" width="120" height="22" rx="11" fill="rgba(0,0,0,0.45)" />
      <circle cx="24" cy="159" r="5" fill="#E8834A" />
      <text x="33" y="163" fontFamily="Nunito,sans-serif" fontSize="10" fill="white" fontWeight="700">Encantado, RS</text>
    </svg>
  );
}

function FeaturedPhoto() {
  return (
    <svg viewBox="0 0 362 160" width="100%" height="160" style={{ display: 'block' }}>
      <rect width="362" height="160" fill="#87CEEB" />
      <path d="M0 100 L70 50 L140 90 L200 40 L270 80 L362 50 L362 160 L0 160Z" fill="#4A8C5C" />
      <path d="M0 115 L80 65 L170 105 L240 60 L320 95 L362 65 L362 160 L0 160Z" fill="#2D6A40" />
      <ellipse cx="181" cy="148" rx="160" ry="22" fill="#5B9EC9" opacity="0.8" />
      <ellipse cx="80" cy="35" rx="28" ry="11" fill="white" opacity="0.75" />
      <ellipse cx="280" cy="28" rx="24" ry="9" fill="white" opacity="0.65" />
    </svg>
  );
}

const THUMBS = {
  'jardim-sentidos': (
    <svg viewBox="0 0 56 56" width="56" height="56">
      <rect width="56" height="56" fill="#A8D8B8" />
      <ellipse cx="28" cy="38" rx="22" ry="8" fill="#5B9EC9" opacity="0.7" />
      <path d="M6 36 L20 18 L28 26 L36 14 L50 36Z" fill="#2D6A40" />
      <ellipse cx="14" cy="18" rx="9" ry="5" fill="white" opacity="0.6" />
    </svg>
  ),
  'cristo-protetor': (
    <svg viewBox="0 0 56 56" width="56" height="56">
      <rect width="56" height="56" fill="#C8A878" />
      <path d="M10 42 L28 12 L46 42Z" fill="rgba(255,255,255,0.3)" />
      <rect x="24" y="20" width="8" height="22" fill="rgba(255,255,255,0.35)" />
      <rect x="22" y="36" width="12" height="6" fill="rgba(255,255,255,0.2)" />
    </svg>
  ),
  'museu-imigrante': (
    <svg viewBox="0 0 56 56" width="56" height="56">
      <rect width="56" height="56" fill="#C89060" />
      <rect x="8" y="20" width="40" height="26" rx="3" fill="rgba(255,255,255,0.2)" />
      <rect x="14" y="28" width="10" height="8" rx="1" fill="rgba(255,255,255,0.35)" />
      <rect x="32" y="28" width="10" height="8" rx="1" fill="rgba(255,255,255,0.35)" />
      <rect x="22" y="34" width="12" height="12" rx="1" fill="rgba(255,255,255,0.25)" />
      <rect x="14" y="14" width="28" height="8" rx="2" fill="rgba(255,255,255,0.15)" />
    </svg>
  ),
  'cantina-segaloni': (
    <svg viewBox="0 0 56 56" width="56" height="56">
      <rect width="56" height="56" fill="#8090C0" />
      <ellipse cx="28" cy="40" rx="18" ry="10" fill="rgba(255,255,255,0.2)" />
      <rect x="20" y="18" width="16" height="24" rx="2" fill="rgba(255,255,255,0.25)" />
      <rect x="24" y="12" width="8" height="8" rx="1" fill="rgba(255,255,255,0.2)" />
    </svg>
  ),
};

const THUMB_BG = {
  'jardim-sentidos': '#C8E8D8',
  'cristo-protetor': '#D8C8B8',
  'museu-imigrante': '#E8D0B8',
  'cantina-segaloni': '#B8D0E8',
};

export default function ExplorarScreen() {
  const { setTab } = useAppState();
  const featured = PLACES.find((p) => p.id === 'cristo-protetor');
  const listPlaces = PLACES;

  return (
    <div style={{ position: 'absolute', inset: 0, overflowY: 'auto', background: '#fff' }}>
      {/* Green hero header */}
      <div style={{ background: 'linear-gradient(180deg,#2A7A50 0%,#1E5E3C 100%)', padding: '58px 20px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, background: 'rgba(255,255,255,0.06)', borderRadius: 90 }} />
        <div style={{ position: 'absolute', top: 10, right: 50, width: 80, height: 80, background: 'rgba(255,255,255,0.05)', borderRadius: 40 }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
              Bem-vindo ao
            </div>
            <div style={{ fontSize: 22, fontWeight: 900, color: 'white', lineHeight: 1.1 }}>Passaporte Encantado</div>
          </div>
          <div style={{ width: 38, height: 38, background: 'rgba(255,255,255,0.15)', borderRadius: 19, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div style={{ borderRadius: '18px 18px 0 0', overflow: 'hidden', position: 'relative', height: 178 }}>
          <HeroPhoto />
        </div>
      </div>

      {/* White content */}
      <div style={{ background: 'white', padding: '16px 16px 0' }}>
        <div style={{ background: '#F5F5F5', borderRadius: 14, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="10" cy="10" r="7" stroke="#9BA8A0" strokeWidth="2" />
            <path d="M15.5 15.5L21 21" stroke="#9BA8A0" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: 16, color: '#9BA8A0', fontWeight: 600 }}>Buscar por...</span>
        </div>

        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 14, margin: '0 -16px', paddingLeft: 16, paddingRight: 16 }}>
          {CHIPS.map((chip, i) => (
            <div
              key={chip}
              style={{
                background: i === 0 ? '#2A7A50' : '#F0F4F2',
                borderRadius: 20,
                padding: '7px 16px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 13, fontWeight: i === 0 ? 700 : 600, color: i === 0 ? 'white' : '#5A7A70' }}>{chip}</span>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 18, fontWeight: 900, color: '#1A2421', marginBottom: 14 }}>Todos os locais</div>

        {/* Featured card */}
        <div
          onClick={() => setTab('mapa')}
          style={{ background: 'white', borderRadius: 18, overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.10)', marginBottom: 14, cursor: 'pointer' }}
        >
          <div style={{ position: 'relative', height: 160, overflow: 'hidden' }}>
            <FeaturedPhoto />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(transparent,rgba(0,0,0,0.45))' }} />
            <div style={{ position: 'absolute', top: 10, right: 10, background: '#E8834A', borderRadius: 10, padding: '4px 10px' }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: 'white' }}>Destaque</span>
            </div>
          </div>
          <div style={{ padding: '14px 16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: 17, fontWeight: 900, color: '#1A2421' }}>{featured.name}</div>
                <div style={{ fontSize: 13, color: '#7A9A8E', marginTop: 2 }}>{featured.category} · {featured.distance}</div>
              </div>
              <RatingPill rating={featured.rating} />
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
              <span style={{ background: '#EEF7F2', color: '#2A7A50', borderRadius: 8, padding: '4px 10px', fontSize: 12, fontWeight: 700 }}>Natureza</span>
              <span style={{ background: '#EEF7F2', color: '#2A7A50', borderRadius: 8, padding: '4px 10px', fontSize: 12, fontWeight: 700 }}>+{featured.points} pts</span>
            </div>
          </div>
        </div>

        {/* List items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: '#F0F4F2', borderRadius: 16, overflow: 'hidden', marginBottom: 16 }}>
          {listPlaces.map((place) => (
            <div key={place.id} style={{ background: 'white', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, overflow: 'hidden', flexShrink: 0, background: THUMB_BG[place.id], display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {THUMBS[place.id]}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#1A2421' }}>{place.name}</div>
                <div style={{ fontSize: 13, color: '#7A9A8E', marginTop: 2 }}>{place.category} · {place.distance}</div>
                <div style={{ marginTop: 5 }}>
                  <StarRow rating={place.rating} />
                </div>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6 3l6 6-6 6" stroke="#C8D8D0" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          ))}
        </div>

        <div style={{ height: 90 }} />
      </div>
    </div>
  );
}
