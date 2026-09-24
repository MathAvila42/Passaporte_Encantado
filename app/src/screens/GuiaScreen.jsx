import { useState } from 'react';
import { useAppState } from '../state/AppState';
import { PLACES } from '../data/places';
import { C, FONT_HEAD, categoryStyle } from '../theme';
import { ArrowLeft, ArrowRight, ListIcon, MapIcon } from '../components/Icons';
import { PlaceRow, PointsPill } from '../components/ui';

const CHIPS = ['Todos', 'Mirante', 'Natureza', 'Gastronomia', 'Cultura', 'Histórico'];

function Header({ view, setView, onBack }) {
  const seg = (key, label, Icon) => {
    const active = view === key;
    return (
      <button
        type="button"
        onClick={() => setView(key)}
        style={{
          height: '100%',
          padding: key === 'mapa' ? '0 11px 0 12px' : '0 12px 0 11px',
          border: 'none',
          background: active ? C.green : 'transparent',
          color: active ? '#FFFFFF' : C.greenDark,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 12.5,
          fontWeight: 500,
          cursor: 'pointer',
        }}
      >
        <Icon size={14} stroke={1.8} />
        {label}
      </button>
    );
  };

  return (
    <div style={{ height: 101, borderBottom: `1px solid ${C.line}`, display: 'flex', alignItems: 'flex-start', padding: '44px 16px 0 22px' }}>
      <button type="button" onClick={onBack} style={{ border: 'none', background: 'none', padding: 0, marginTop: 13, color: C.inkSoft, cursor: 'pointer' }}>
        <ArrowLeft size={24} stroke={1.8} />
      </button>
      <div style={{ marginLeft: 19, flex: 1, marginTop: 1 }}>
        <div style={{ fontFamily: FONT_HEAD, fontSize: 21, lineHeight: '26px', color: C.ink }}>Guia</div>
        <div style={{ fontSize: 12.5, color: C.muted, marginTop: 2 }}>Encantado – RS</div>
      </div>
      <div
        style={{
          marginTop: 9,
          height: 29,
          borderRadius: 15,
          border: `1px solid ${C.line}`,
          background: C.surface,
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        {seg('mapa', 'Mapa', MapIcon)}
        {seg('lista', 'Lista', ListIcon)}
      </div>
    </div>
  );
}

function Chips({ value, onChange }) {
  return (
    <div className="hscroll" style={{ gap: 8, padding: '10px 16px 9px', borderBottom: `1px solid ${C.line}` }}>
      {CHIPS.map((chip) => {
        const active = value === chip;
        return (
          <button
            key={chip}
            type="button"
            onClick={() => onChange(chip)}
            style={{
              flexShrink: 0,
              height: 30,
              padding: '0 11px',
              borderRadius: 15,
              border: active ? `1px solid ${C.green}` : `1px solid ${C.line}`,
              background: active ? C.green : C.surface,
              color: active ? '#FFFFFF' : C.greenDark,
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            {chip}
          </button>
        );
      })}
    </div>
  );
}

function MapPreview({ onOpen }) {
  const filled = [
    [83, 31],
    [153, 67],
    [113, 107],
  ];
  const hollow = [
    [213, 27],
    [273, 77],
    [353, 47],
    [323, 116],
  ];
  return (
    <div style={{ position: 'relative', height: 150, borderRadius: 16, overflow: 'hidden', background: C.greenTint }}>
      <svg width="100%" height="150" viewBox="0 0 370 150" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
        <circle cx="49" cy="51" r="81" fill={C.greenCircle} />
        <circle cx="309" cy="146" r="86" fill={C.greenCircle} />
        <path d="M0 40 C 40 44, 90 44, 140 36 S 220 26, 260 44 S 310 100, 318 150" fill="none" stroke="#C7D4BC" strokeWidth="5" strokeLinecap="round" />
      </svg>
      {filled.map(([x, y], i) => (
        <span key={`f${i}`} style={{ position: 'absolute', left: x - 6.5, top: y - 6.5, width: 13, height: 13, borderRadius: '50%', background: C.green, border: '2px solid #FFFFFF', boxSizing: 'border-box' }} />
      ))}
      {hollow.map(([x, y], i) => (
        <span key={`h${i}`} style={{ position: 'absolute', left: x - 6.5, top: y - 6.5, width: 13, height: 13, borderRadius: '50%', background: '#FFFFFF', border: `2px solid ${C.green}`, boxSizing: 'border-box' }} />
      ))}
      <button
        type="button"
        onClick={onOpen}
        style={{
          position: 'absolute',
          right: 16,
          top: 110,
          whiteSpace: 'nowrap',
          height: 28.5,
          padding: '0 12px',
          borderRadius: 14.5,
          border: 'none',
          background: '#FFFFFF',
          boxShadow: '0 3px 10px rgba(46,64,34,0.16)',
          color: C.green,
          fontSize: 12,
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: 3,
          cursor: 'pointer',
        }}
      >
        Ver mapa completo <ArrowRight size={13} stroke={2.2} />
      </button>
    </div>
  );
}

function Pin({ color, visited }) {
  return (
    <svg width="23" height="30" viewBox="0 0 23 30" style={{ display: 'block', overflow: 'visible' }}>
      <path
        d="M11.5 29C11.5 29 1 18.6 1 11.2A10.5 10.5 0 0 1 22 11.2C22 18.6 11.5 29 11.5 29Z"
        fill={visited ? color : '#FFFFFF'}
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {visited ? (
        <path d="M7.3 11.4l2.9 2.9 5.6-5.6" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <circle cx="11.5" cy="11" r="3.6" fill={color} />
      )}
    </svg>
  );
}

function MapView({ places, visitedIds, onOpen }) {
  return (
    <div style={{ position: 'relative', minHeight: 780, background: C.greenTint, overflow: 'hidden' }}>
      <svg width="402" height="780" viewBox="0 0 402 780" style={{ position: 'absolute', inset: 0 }}>
        <circle cx="89" cy="141" r="110" fill={C.greenCircle} />
        <circle cx="338" cy="542" r="118" fill={C.greenCircle} />
        <circle cx="130" cy="609" r="90" fill="#E6E4D6" />
        <path
          d="M40 -4 C 41 40, 43 120, 36 174 C 40 210, 55 228, 75 239 C 110 262, 140 280, 170 300 C 195 318, 205 340, 208 380"
          fill="none"
          stroke="#C7D4BC"
          strokeWidth="6.5"
          strokeLinecap="round"
        />
        <path
          d="M-6 119 C 40 120, 90 104, 125 94 C 160 84, 215 80, 250 99 C 285 117, 305 160, 312 209 C 318 250, 305 290, 280 329 C 255 360, 215 375, 196 420 C 186 455, 205 490, 242 509 C 280 525, 305 545, 314 575 C 322 610, 322 680, 312 720 C 300 760, 250 770, 229 790"
          fill="none"
          stroke="#C7D4BC"
          strokeWidth="6.5"
          strokeLinecap="round"
        />
      </svg>
      {places.map((place) => {
        const visited = visitedIds.includes(place.id);
        const { pin } = categoryStyle(place.category);
        return (
          <div
            key={place.id}
            onClick={() => onOpen(place.id)}
            style={{ position: 'absolute', left: place.pin.x, top: place.pin.y - 27.5, transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
          >
            <Pin color={pin} visited={visited} />
            <span
              style={{
                marginTop: 2,
                height: 23,
                padding: '0 8px',
                borderRadius: 8,
                background: '#FFFFFF',
                boxShadow: '0 2px 7px rgba(26,31,22,0.14)',
                fontSize: 11.7,
                fontWeight: 600,
                color: C.ink,
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              {place.mapLabel}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function GuiaScreen() {
  const { guiaView, setGuiaView, setTab, openPlace, visitedIds } = useAppState();
  const [chip, setChip] = useState('Todos');
  const places = PLACES.filter((p) => chip === 'Todos' || p.category === chip);

  return (
    <div className="screen" style={{ background: guiaView === 'mapa' ? C.greenTint : C.bg }}>
      <div style={{ background: C.bg }}>
        <Header view={guiaView} setView={setGuiaView} onBack={() => setTab('inicio')} />
        <Chips value={chip} onChange={setChip} />
      </div>

      {guiaView === 'mapa' ? (
        <MapView places={places} visitedIds={visitedIds} onOpen={openPlace} />
      ) : (
        <div style={{ padding: '12.5px 16px 150px' }}>
          <MapPreview onOpen={() => setGuiaView('mapa')} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
            {places.map((place) => {
              const visited = visitedIds.includes(place.id);
              return (
                <PlaceRow
                  key={place.id}
                  place={place}
                  visited={visited}
                  onClick={() => openPlace(place.id)}
                  right={visited ? null : <PointsPill points={place.points} />}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
