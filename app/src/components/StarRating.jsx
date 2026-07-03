const STAR_PATH = 'M6 1l1.4 2.8 3.1.4-2.25 2.2.53 3.1L6 8l-2.78 1.5.53-3.1L1.5 4.2l3.1-.4L6 1z';

function Star({ filled, size = 11 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12">
      <path d={STAR_PATH} fill={filled ? '#E8834A' : '#D0D8D4'} />
    </svg>
  );
}

// Five-star row + numeric label, used throughout list/card items.
export function StarRow({ rating, size = 11 }) {
  const filled = Math.round(rating);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} filled={i < filled} size={size} />
      ))}
      <span style={{ fontSize: 12, color: '#7A9A8E', marginLeft: 2, fontWeight: 600 }}>{rating.toFixed(1)}</span>
    </div>
  );
}

// Single-star rating chip used on the Explorar featured card.
export function RatingPill({ rating }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: '#FFF8F0', borderRadius: 8, padding: '5px 9px' }}>
      <svg width="13" height="13" viewBox="0 0 12 12">
        <path d={STAR_PATH} fill="#E8834A" />
      </svg>
      <span style={{ fontSize: 13, fontWeight: 800, color: '#E8834A' }}>{rating.toFixed(1)}</span>
    </div>
  );
}
