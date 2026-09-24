import { useState } from 'react';
import { useAppState } from '../state/AppState';
import { HOME_FEATURED, HOME_HERO } from '../data/places';
import { C, FONT_HEAD } from '../theme';
import { ArrowRight, Bell, ChevronRight, MapPin, Search, Trophy } from '../components/Icons';

const CHIPS = [
  { label: 'Todos' },
  { label: 'Natureza', emoji: '🌿' },
  { label: 'Gastronomia', emoji: '🍽️' },
  { label: 'Cultura', emoji: '🏛️' },
  { label: 'Religião', emoji: '⛪' },
];

const CHIP_MATCH = {
  Natureza: ['Natura', 'Natureza', 'Lazer'],
  Gastronomia: ['Gastronomia'],
  Cultura: ['Cultura'],
  Religião: ['Religião'],
};

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Bom dia';
  if (h < 18) return 'Boa tarde';
  return 'Boa noite';
}

function HeroButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        position: 'relative',
        width: 39,
        height: 39,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.6)',
        background: 'rgba(255,255,255,0.14)',
        backdropFilter: 'blur(2px)',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}

export default function InicioScreen() {
  const { openPlace, setTab, setGuiaView } = useAppState();
  const [chip, setChip] = useState('Todos');
  const [query, setQuery] = useState('');

  const items = HOME_FEATURED.filter((p) => chip === 'Todos' || CHIP_MATCH[chip]?.includes(p.category)).filter((p) =>
    p.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  const openMap = () => {
    setGuiaView('mapa');
    setTab('guia');
  };

  return (
    <div className="screen" style={{ background: C.bg }}>
      <div style={{ position: 'relative', height: 260 }}>
        <img src={HOME_HERO} alt="" style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', top: 28.5, right: 24.5, display: 'flex', gap: 9 }}>
          <HeroButton onClick={() => setTab('perfil')}>
            <Trophy size={16} stroke={1.5} />
          </HeroButton>
          <HeroButton>
            <Bell size={16} stroke={1.5} />
            <span style={{ position: 'absolute', top: 9, right: 9, width: 6, height: 6, borderRadius: 3, background: '#FFFFFF' }} />
          </HeroButton>
        </div>
      </div>

      <div style={{ padding: '0 24px' }}>
        <h1 style={{ margin: '27px 0 0', fontFamily: FONT_HEAD, fontWeight: 400, fontSize: 29.5, lineHeight: '36px', color: C.greenDark }}>
          {greeting()}, Viajante
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 9, fontSize: 13, color: C.muted }}>
          <MapPin size={13} stroke={2} />
          <span>Encantado · RS</span>
          <span style={{ margin: '0 2px' }}>·</span>
          <span style={{ color: C.green, fontWeight: 600 }}>22°C ⛅</span>
        </div>

        <label
          style={{
            marginTop: 31,
            height: 51,
            borderRadius: 20,
            background: C.greenSoft,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '0 20px',
            color: C.muted,
          }}
        >
          <Search size={15} stroke={2} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar lugares, eventos, atrações..."
            style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: 15, color: C.ink }}
          />
        </label>
      </div>

      <div className="hscroll" style={{ gap: 10, padding: '19px 24px 0' }}>
        {CHIPS.map(({ label, emoji }) => {
          const active = chip === label;
          return (
            <button
              key={label}
              type="button"
              onClick={() => setChip(label)}
              style={{
                flexShrink: 0,
                height: 40,
                borderRadius: 20,
                padding: emoji ? '0 17px 0 16px' : '0 18px',
                border: active ? 'none' : `1px solid ${C.line}`,
                background: active ? C.green : C.surface,
                color: active ? '#FFFFFF' : C.greenDark,
                fontSize: 15,
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                cursor: 'pointer',
              }}
            >
              {emoji && <span style={{ fontSize: 14 }}>{emoji}</span>}
              {label}
            </button>
          );
        })}
      </div>

      <div style={{ padding: '0 39px 0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 28, marginRight: -15 }}>
          <h2 style={{ margin: 0, fontFamily: FONT_HEAD, fontWeight: 400, fontSize: 21, color: C.ink, lineHeight: '26px' }}>Em destaque</h2>
          <button
            type="button"
            onClick={openMap}
            style={{ border: 'none', background: 'none', padding: 0, color: C.green, fontSize: 13, display: 'flex', alignItems: 'center', gap: 3, cursor: 'pointer' }}
          >
            Ver mapa <ArrowRight size={13} stroke={2} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20, paddingBottom: 140 }}>
          {items.map((place) => (
            <div
              key={place.id}
              onClick={() => openPlace(place.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                height: 88,
                padding: '0 13px',
                background: C.surface,
                border: `1px solid ${C.line}`,
                borderRadius: 18,
                cursor: 'pointer',
              }}
            >
              <img src={place.image} alt="" style={{ width: 62, height: 62, borderRadius: 14, objectFit: 'cover', flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 15.5, fontWeight: 500, color: C.ink, lineHeight: '20px', marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{place.name}</div>
                <div style={{ fontSize: 14, color: C.muted, lineHeight: '19px', marginTop: 0 }}>{place.category}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 13.5, lineHeight: '19px', marginTop: 4 }}>
                  <span style={{ color: C.ink, fontWeight: 500 }}>★ {place.rating.toFixed(1)}</span>
                  <span style={{ color: C.muted }}>
                    <span style={{ fontSize: 12 }}>🚶</span> {place.distance}
                  </span>
                </div>
              </div>
              <ChevronRight size={16} color="#C3CCB8" stroke={2} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
