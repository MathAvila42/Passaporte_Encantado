import { useId } from 'react';
import { C } from '../theme';

// Star arms [angle° clockwise from +x, width] radiating from the stamp's center.
const ARMS = [
  [-89.44, 9.81],
  [-138.53, 8.72],
  [-40.81, 8.44],
  [171.56, 8.75],
  [7.38, 10.09],
  [116.72, 9.81],
  [61.52, 8.94],
];
const CX = 51.5;
const CY = 54.24;
const PERFS = [15, 31.25, 47.5, 63.75, 80];

// Postage-stamp mark from the Passaporte Encantado logo (96 × 96 units).
function StampMark({ fg, inner, ids }) {
  return (
    <g>
      <defs>
        <mask id={ids.mask}>
          <rect x="0" y="0" width="96" height="96" fill="#fff" />
          {PERFS.map((p) => (
            <g key={p} fill="#000">
              <circle cx={p} cy="0.48" r="6.02" />
              <circle cx={p} cy="95.52" r="6.02" />
              <circle cx="0.48" cy={p} r="6.02" />
              <circle cx="95.52" cy={p} r="6.02" />
            </g>
          ))}
        </mask>
        <clipPath id={ids.clip}>
          <rect x="19" y="19.38" width="58" height="58.12" />
        </clipPath>
      </defs>
      <rect x="0" y="0" width="96" height="96" fill={fg} mask={`url(#${ids.mask})`} />
      <rect x="19" y="18" width="58" height="61" fill={inner} />
      <g clipPath={`url(#${ids.clip})`} fill={fg}>
        {ARMS.map(([angle, w]) => (
          <rect key={angle} x={CX} y={CY - w / 2} width="60" height={w} transform={`rotate(${angle} ${CX} ${CY})`} />
        ))}
        <circle cx={CX} cy={CY} r="6" />
      </g>
    </g>
  );
}

// Full lockup (stamp + wordmark) or just the stamp (`markOnly`).
export default function Logo({ height = 40, color = C.greenDark, inner = C.tabBg, markOnly = false, style }) {
  const uid = useId().replace(/:/g, '');
  const ids = { mask: `pe-perf-${uid}`, clip: `pe-star-${uid}` };
  const width = markOnly ? 96 : 373;
  return (
    <svg
      role="img"
      aria-label="Passaporte Encantado"
      viewBox={`0 0 ${width} 97`}
      height={height}
      width={(height * width) / 97}
      style={{ display: 'block', ...style }}
    >
      <g transform="translate(0 0.5)">
        <StampMark fg={color} inner={inner} ids={ids} />
      </g>
      {!markOnly && (
        <g fill={color} style={{ fontFamily: "'DM Sans Variable', 'DM Sans', sans-serif" }}>
          <text x="106.8" y="45" fontSize="51.4" fontWeight="400" style={{ fontVariationSettings: "'opsz' 24" }}>
            Passaporte
          </text>
          <text x="106.4" y="86" fontSize="51.4" fontWeight="800" style={{ fontVariationSettings: "'opsz' 32" }}>
            Encantado
          </text>
        </g>
      )}
    </svg>
  );
}
