import { C, FONT_BODY, categoryStyle } from '../theme';
import { Check, Home, MapPin } from './Icons';

export function CategoryPill({ category, size = 'sm', style }) {
  const s = categoryStyle(category);
  const big = size === 'md';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: big ? 23 : 18.5,
        padding: big ? '0 12px' : '0 8px',
        borderRadius: 12,
        background: s.bg,
        color: s.fg,
        fontSize: big ? 13 : 11,
        fontWeight: 500,
        fontFamily: FONT_BODY,
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {category}
    </span>
  );
}

const STAR_PATH = 'M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z';

export function Star({ size = 12, color = C.green, filled = true }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'block', flexShrink: 0 }}>
      <path d={STAR_PATH} fill={filled ? color : 'none'} stroke={color} strokeWidth={filled ? 0 : 1.8} strokeLinejoin="round" />
    </svg>
  );
}

export function Stars({ rating, size = 13, gap = 1 }) {
  const full = Math.round(rating);
  return (
    <div style={{ display: 'flex', gap }}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={size} filled={i < full} />
      ))}
    </div>
  );
}

export function Rating({ value }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 13, fontWeight: 600, color: C.ink }}>
      <Star size={11} />
      {value.toFixed(1)}
    </span>
  );
}

export function PointsPill({ points = 10, tone = 'pending', style }) {
  const tones = {
    pending: { bg: C.coralPtsBg, fg: C.coralPts },
    earned: { bg: C.greenSoft, fg: C.green },
    active: { bg: C.coral, fg: '#FFFFFF' },
  };
  const t = tones[tone];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: 23,
        padding: '0 8px',
        borderRadius: 12,
        background: t.bg,
        color: t.fg,
        fontSize: 13,
        fontWeight: 600,
        whiteSpace: 'nowrap',
        flexShrink: 0,
        ...style,
      }}
    >
      +{points} pts
    </span>
  );
}

function CheckBadge({ size = 18 }) {
  return (
    <span
      style={{
        position: 'absolute',
        right: -3,
        bottom: -3,
        width: size,
        height: size,
        borderRadius: '50%',
        background: C.green,
        border: '1.5px solid #FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        boxSizing: 'border-box',
      }}
    >
      <Check size={size * 0.62} stroke={2.6} />
    </span>
  );
}

// Rounded photo; places without a photo get the prototype's tinted placeholder.
export function PlacePhoto({ place, size = 56, radius = 18, visited = false, round = false, style }) {
  const s = categoryStyle(place.category);
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0, ...style }}>
      {place.image ? (
        <img
          src={place.image}
          alt=""
          style={{ width: size, height: size, borderRadius: round ? '50%' : radius, objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <div
          style={{
            width: size,
            height: size,
            borderRadius: round ? '50%' : radius,
            background: s.bg,
            color: s.fg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Home size={size * 0.42} stroke={1.8} />
        </div>
      )}
      {visited && <CheckBadge />}
    </div>
  );
}

export function Distance({ value, size = 13 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: size, color: C.muted }}>
      <MapPin size={size - 1} stroke={2} />
      {value}
    </span>
  );
}

// Card row used by the Guia list and the Perfil "Já visitados" / "Próximas visitas" lists.
export function PlaceRow({ place, visited, footer, right, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative',
        background: C.surface,
        border: `1px solid ${C.line}`,
        borderRadius: 18,
        padding: '14.5px 15px 13px',
        display: 'flex',
        alignItems: 'center',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <PlacePhoto place={place} visited={visited} style={{ alignSelf: 'flex-start', marginTop: 4, marginRight: 14.5 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 500, color: C.ink, lineHeight: '20px' }}>{place.name}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 3 }}>
          <CategoryPill category={place.category} />
          <Rating value={place.rating} />
        </div>
        <div style={{ marginTop: 2.5, lineHeight: '19px' }}>{footer ?? <Distance value={place.distance} />}</div>
      </div>
      {right && <div style={{ marginLeft: -4 }}>{right}</div>}
    </div>
  );
}
