import { useAppState } from '../state/AppState';
import { getPlace } from '../data/places';

export default function QrSuccessOverlay() {
  const { closeSuccess, points, lastCheckedInId } = useAppState();
  const place = getPlace(lastCheckedInId) ?? getPlace('cristo-redentor');

  const stop = (e) => e.stopPropagation();

  return (
    <div
      onClick={closeSuccess}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 200,
        background: 'rgba(10,30,20,0.88)',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <div
        onClick={stop}
        style={{
          background: 'white',
          borderRadius: '28px 28px 0 0',
          padding: '24px 22px 34px',
          width: '100%',
          boxSizing: 'border-box',
          animation: 'slideUp 0.4s cubic-bezier(.34,1.56,.64,1) both',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 14 }}>
          <div
            style={{
              display: 'inline-flex',
              width: 78,
              height: 78,
              background: '#E8F5EE',
              borderRadius: 39,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#2A7A50" strokeWidth="2" />
              <path d="M7.5 12.5l3 3 6-6.5" stroke="#2A7A50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <div style={{ fontSize: 13, color: '#7A9A8E', fontWeight: 700 }}>Check-in confirmado em</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: '#1A2421', marginTop: 2, fontFamily: "'Playfair Display', Georgia, serif" }}>{place.shortName}</div>
          <div style={{ fontSize: 14, color: '#7A9A8E', marginTop: 6, lineHeight: 1.5 }}>
            Continue explorando Encantado e desbloqueie novas recompensas.
          </div>
        </div>
        <div
          style={{
            background: 'linear-gradient(135deg,#2A7A50,#1A5038)',
            borderRadius: 14,
            padding: '14px 16px',
            marginBottom: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div style={{ fontSize: 32 }}>⭐</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>Você ganhou</div>
            <div style={{ fontSize: 26, fontWeight: 800, color: 'white', lineHeight: 1 }}>+{place.points} pontos!</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 10, padding: '8px 12px', textAlign: 'center' }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: 'white' }}>{points}</div>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.55)', fontWeight: 700 }}>total</div>
          </div>
        </div>
        <div
          onClick={closeSuccess}
          style={{
            background: '#2A7A50',
            borderRadius: 14,
            padding: 15,
            textAlign: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(42,122,80,0.35)',
          }}
        >
          <span style={{ fontSize: 16, fontWeight: 800, color: 'white' }}>Ver meu passaporte →</span>
        </div>
      </div>
    </div>
  );
}
