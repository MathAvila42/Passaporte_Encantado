// Fada Encantado — the app's fairy mascot, in the sizes/poses used across screens.

export function FairyGlow({ width = 28, height = 33 }) {
  return (
    <svg viewBox="0 0 36 42" width={width} height={height}>
      <ellipse cx="10" cy="24" rx="9.5" ry="5.5" fill="#C8F2E8" opacity="0.85" transform="rotate(-28,10,24)" />
      <ellipse cx="26" cy="24" rx="9.5" ry="5.5" fill="#C8F2E8" opacity="0.85" transform="rotate(28,26,24)" />
      <ellipse cx="18" cy="32" rx="5" ry="6.5" fill="#E8F7F4" />
      <circle cx="18" cy="17" r="7" fill="#F5C8A0" />
      <ellipse cx="18" cy="13" rx="7" ry="3.8" fill="#7A3C1A" />
      <path d="M11 15 Q18 8 25 15" fill="#7A3C1A" />
      <circle cx="15.5" cy="16" r="1.6" fill="#1A2421" />
      <circle cx="20.5" cy="16" r="1.6" fill="#1A2421" />
      <circle cx="16.2" cy="15.3" r="0.5" fill="white" />
      <circle cx="21.2" cy="15.3" r="0.5" fill="white" />
      <path d="M15 20 Q18 23 21 20" stroke="#9B4F20" strokeWidth="1" fill="none" strokeLinecap="round" />
      <line x1="24" y1="23" x2="31" y2="16" stroke="#E8834A" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="31" cy="16" r="3.5" fill="#E8834A" />
    </svg>
  );
}

export function FairyHeader({ width = 22, height = 26 }) {
  return (
    <svg viewBox="0 0 24 28" width={width} height={height}>
      <ellipse cx="6" cy="16" rx="6" ry="3.5" fill="#C8F2E8" opacity="0.8" transform="rotate(-28,6,16)" />
      <ellipse cx="18" cy="16" rx="6" ry="3.5" fill="#C8F2E8" opacity="0.8" transform="rotate(28,18,16)" />
      <circle cx="12" cy="11" r="6" fill="#F5C8A0" />
      <ellipse cx="12" cy="8" rx="6" ry="3" fill="#7A3C1A" />
      <circle cx="9.5" cy="11" r="1.5" fill="#1A2421" />
      <circle cx="14.5" cy="11" r="1.5" fill="#1A2421" />
      <path d="M9.5 14 Q12 16.5 14.5 14" stroke="#9B4F20" strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function FairyMini({ width = 16, height = 20 }) {
  return (
    <svg viewBox="0 0 18 22" width={width} height={height}>
      <ellipse cx="4" cy="12" rx="4" ry="2.5" fill="#C8F2E8" opacity="0.8" transform="rotate(-28,4,12)" />
      <ellipse cx="14" cy="12" rx="4" ry="2.5" fill="#C8F2E8" opacity="0.8" transform="rotate(28,14,12)" />
      <circle cx="9" cy="8" r="5" fill="#F5C8A0" />
      <ellipse cx="9" cy="5.5" rx="5" ry="2.5" fill="#7A3C1A" />
      <circle cx="7" cy="8" r="1.2" fill="#1A2421" />
      <circle cx="11" cy="8" r="1.2" fill="#1A2421" />
    </svg>
  );
}

export function FairyWatermark({ width = 60, height = 70, opacity = 0.18 }) {
  return (
    <div style={{ opacity }}>
      <svg viewBox="0 0 60 70" width={width} height={height}>
        <ellipse cx="16" cy="40" rx="16" ry="9" fill="#C8F2E8" transform="rotate(-28,16,40)" />
        <ellipse cx="44" cy="40" rx="16" ry="9" fill="#C8F2E8" transform="rotate(28,44,40)" />
        <ellipse cx="30" cy="52" rx="8" ry="10" fill="#E8F7F4" />
        <circle cx="30" cy="28" r="11" fill="#F5C8A0" />
        <ellipse cx="30" cy="21" rx="11" ry="6" fill="#7A3C1A" />
        <circle cx="25" cy="27" r="2.5" fill="#1A2421" />
        <circle cx="35" cy="27" r="2.5" fill="#1A2421" />
        <path d="M25 32 Q30 37 35 32" stroke="#9B4F20" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}
