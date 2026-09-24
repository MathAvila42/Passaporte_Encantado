// Line icons used across the prototype (Lucide-style, 24px grid).
function Svg({ size = 24, color = 'currentColor', stroke = 2, children, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0, ...style }}>
      {children}
    </svg>
  );
}

export const ArrowLeft = (p) => (
  <Svg {...p}>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </Svg>
);
export const ArrowRight = (p) => (
  <Svg {...p}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </Svg>
);
export const ChevronRight = (p) => (
  <Svg {...p}>
    <path d="M9 18l6-6-6-6" />
  </Svg>
);
export const Close = (p) => (
  <Svg {...p}>
    <path d="M18 6L6 18M6 6l12 12" />
  </Svg>
);
export const Compass = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
  </Svg>
);
export const QrCode = (p) => (
  <Svg {...p}>
    <rect x="3" y="3" width="6" height="6" rx="1.5" />
    <rect x="15" y="3" width="6" height="6" rx="1.5" />
    <rect x="3" y="15" width="6" height="6" rx="1.5" />
    <path d="M21 15h-3a2 2 0 00-2 2v4M21 21v.01M12 7v3a2 2 0 01-2 2H7M3 12h.01M12 3h.01M12 16v.01M16 12h1M21 12v.01M12 21v-1" />
  </Svg>
);
export const User = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="8" r="5" />
    <path d="M20 21a8 8 0 00-16 0" />
  </Svg>
);
export const MapIcon = (p) => (
  <Svg {...p}>
    <path d="M14.1 5.9L9.9 3.8a2 2 0 00-1.8 0L3.6 6A1 1 0 003 7v12.8a1 1 0 001.4.9l3.7-1.9a2 2 0 011.8 0l4.2 2.1a2 2 0 001.8 0l4.5-2.2a1 1 0 00.6-.9V4.2a1 1 0 00-1.4-.9l-3.7 1.9a2 2 0 01-1.8 0z" />
    <path d="M15 5.8v15M9 3.2v15" />
  </Svg>
);
export const ListIcon = (p) => (
  <Svg {...p}>
    <path d="M3 5h.01M3 12h.01M3 19h.01M8 5h13M8 12h13M8 19h13" />
  </Svg>
);
export const MapPin = (p) => (
  <Svg {...p}>
    <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 01-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0116 0" />
    <circle cx="12" cy="10" r="3" />
  </Svg>
);
export const Navigation = (p) => (
  <Svg {...p}>
    <path d="M12 2L4.5 20.3l.7.7L12 18l6.8 3 .7-.7z" />
  </Svg>
);
export const Clock = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </Svg>
);
export const Help = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
  </Svg>
);
export const Heart = ({ filled, ...p }) => (
  <Svg {...p}>
    <path fill={filled ? 'currentColor' : 'none'} d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" />
  </Svg>
);
export const Share = (p) => (
  <Svg {...p}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
  </Svg>
);
export const CheckCircle = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </Svg>
);
export const Check = (p) => (
  <Svg {...p}>
    <path d="M20 6L9 17l-5-5" />
  </Svg>
);
export const Search = (p) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.3-4.3" />
  </Svg>
);
export const Trophy = (p) => (
  <Svg {...p}>
    <path d="M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0012 0V2z" />
  </Svg>
);
export const Bell = (p) => (
  <Svg {...p}>
    <path d="M10.27 21a2 2 0 003.46 0M3.26 15.33A1 1 0 004 17h16a1 1 0 00.74-1.67C19.41 13.96 18 12.5 18 8A6 6 0 006 8c0 4.5-1.41 5.96-2.74 7.33" />
  </Svg>
);
export const Settings = (p) => (
  <Svg {...p}>
    <path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </Svg>
);
export const Zap = (p) => (
  <Svg {...p}>
    <path d="M4 14a1 1 0 01-.78-1.63l9.9-10.2a.5.5 0 01.86.46l-1.92 6.02A1 1 0 0013 10h7a1 1 0 01.78 1.63l-9.9 10.2a.5.5 0 01-.86-.46l1.92-6.02A1 1 0 0011 14z" />
  </Svg>
);
export const Home = (p) => (
  <Svg {...p}>
    <path d="M15 21v-8a1 1 0 00-1-1h-4a1 1 0 00-1 1v8" />
    <path d="M3 10a2 2 0 01.71-1.53l7-6a2 2 0 012.58 0l7 6A2 2 0 0121 10v9a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
  </Svg>
);
export const Users = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="10" r="3.2" />
    <path d="M6.5 20c.6-3 2.9-4.8 5.5-4.8s4.9 1.8 5.5 4.8" />
    <circle cx="5.5" cy="7.5" r="2.3" />
    <path d="M2 14.5c.4-1.9 1.8-3.1 3.5-3.1" />
    <circle cx="18.5" cy="7.5" r="2.3" />
    <path d="M22 14.5c-.4-1.9-1.8-3.1-3.5-3.1" />
  </Svg>
);
export const Binoculars = (p) => (
  <Svg {...p}>
    <circle cx="6.5" cy="16.5" r="3.8" />
    <circle cx="17.5" cy="16.5" r="3.8" />
    <path d="M2.8 16L5 6.2a2 2 0 013.9.1L10.2 13M21.2 16L19 6.2a2 2 0 00-3.9.1L13.8 13M10.2 11.5h3.6" />
  </Svg>
);
