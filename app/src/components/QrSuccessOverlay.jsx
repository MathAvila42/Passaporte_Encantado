import { FairyGlow } from './Fairy';
import { useAppState } from '../state/AppState';
import { getPlace } from '../data/places';

export default function QrSuccessOverlay() {
  const { closeSuccess, points, lastCheckedInId } = useAppState();
  const place = getPlace(lastCheckedInId) ?? getPlace('jardim-sentidos');

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
              animation: 'floatFairy 3s ease-in-out infinite',
            }}
          >
            <FairyGlow width={48} height={56} />
          </div>
        </div>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <div style={{ fontSize: 13, color: '#7A9A8E', fontWeight: 700 }}>Que delícia! Você está no</div>
          <div style={{ fontSize: 22, fontWeight: 900, color: '#1A2421', marginTop: 2 }}>{place.name} {place.emoji}</div>
          <div style={{ fontSize: 14, color: '#7A9A8E', marginTop: 6, lineHeight: 1.5 }}>
            Explore aromas, texturas e cores únicas de Encantado.
          </div>
        </div>
        <div
          style={{
            background: 'linear-gradient(135deg,#2A7A50,#1A5038)',
            borderRadius: 14,
            padding: '14px 16px',
            marginBottom: 10,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div style={{ fontSize: 32 }}>⭐</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>Você ganhou</div>
            <div style={{ fontSize: 26, fontWeight: 900, color: 'white', lineHeight: 1 }}>+{place.points} pontos!</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 10, padding: '8px 12px', textAlign: 'center' }}>
            <div style={{ fontSize: 16, fontWeight: 900, color: 'white' }}>{points}</div>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.55)', fontWeight: 700 }}>total</div>
          </div>
        </div>
        <div
          style={{
            background: '#FFF5EF',
            border: '1.5px dashed #E8834A',
            borderRadius: 14,
            padding: '12px 16px',
            marginBottom: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div style={{ fontSize: 26 }}>🏷️</div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 900, color: '#E8834A' }}>15% de desconto</div>
            <div style={{ fontSize: 12, color: '#A06040', marginTop: 1 }}>Válido hoje na loja do jardim</div>
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
          <span style={{ fontSize: 16, fontWeight: 900, color: 'white' }}>Ver meu passaporte →</span>
        </div>
      </div>
    </div>
  );
}
