import { useAppState } from '../state/AppState';
import { C } from '../theme';
import { ArrowRight, Binoculars, Heart, Users } from '../components/Icons';
import Logo from '../components/Logo';

const SPARKLES = [
  { x: 67, y: 123, s: 12 },
  { x: 331, y: 201, s: 9 },
  { x: 353, y: 623, s: 12 },
  { x: 47, y: 700, s: 9 },
];

function Sparkle({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'block' }}>
      <path d="M12 0C12.5 8.6 15.4 11.5 24 12 15.4 12.5 12.5 15.4 12 24 11.5 15.4 8.6 12.5 0 12 8.6 11.5 11.5 8.6 12 0z" fill="rgba(247,251,242,0.55)" />
    </svg>
  );
}

// Brand mark: the three "senses" circles from the prototype.
export function BrandMark({ size = 55, gap = 11 }) {
  const icons = [Heart, Users, Binoculars];
  return (
    <div style={{ display: 'flex', gap, justifyContent: 'center' }}>
      {icons.map((Icon, i) => (
        <div
          key={i}
          style={{
            width: size,
            height: size,
            borderRadius: '50%',
            background: C.coralDeep,
            border: '2px solid #FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
          }}
        >
          <Icon size={size * 0.42} stroke={1.9} />
        </div>
      ))}
    </div>
  );
}

export default function SplashScreen() {
  const { startJourney } = useAppState();

  return (
    <div
      className="screen"
      style={{
        background: `linear-gradient(160deg, ${C.splashFrom} 0%, ${C.splashFrom} 30%, ${C.splashTo} 100%)`,
        zIndex: 100,
        overflow: 'hidden',
      }}
    >
      {SPARKLES.map((s, i) => (
        <div key={i} style={{ position: 'absolute', left: s.x - s.s / 2, top: s.y - s.s / 2 }}>
          <Sparkle size={s.s} />
        </div>
      ))}

      <div style={{ position: 'absolute', top: 207, left: 0, right: 0 }}>
        <BrandMark />
      </div>

      <h1 style={{ position: 'absolute', top: 355, left: 0, right: 0, margin: 0, display: 'flex', justifyContent: 'center' }}>
        <Logo height={68} color={C.cream} inner={C.splashFrom} />
      </h1>

      <p
        style={{
          position: 'absolute',
          top: 442.5,
          left: 0,
          right: 0,
          margin: '0 auto',
          maxWidth: 260,
          textAlign: 'center',
          fontSize: 15,
          lineHeight: '21px',
          color: 'rgba(247,251,242,0.82)',
        }}
      >
        Um guia turístico gamificado para descobrir Encantado (RS) sentido por sentido.
      </p>

      <button
        type="button"
        onClick={startJourney}
        style={{
          position: 'absolute',
          top: 561,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 215,
          height: 50,
          borderRadius: 25,
          border: 'none',
          background: C.coral,
          color: '#FFFFFF',
          fontSize: 15,
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 13,
          cursor: 'pointer',
          boxShadow: '0 10px 22px rgba(0,0,0,0.28)',
        }}
      >
        Começar jornada
        <ArrowRight size={17} stroke={2.2} />
      </button>

      <div
        style={{
          position: 'absolute',
          top: 627.5,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 12.3,
          color: 'rgba(247,251,242,0.55)',
        }}
      >
        Território · Turismo · Encantamento
      </div>
    </div>
  );
}
