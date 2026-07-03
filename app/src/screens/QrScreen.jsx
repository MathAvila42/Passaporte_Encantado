import { useAppState } from '../state/AppState';
import { FairyWatermark } from '../components/Fairy';

const RECENT = [
  { id: 'museu-municipal', name: 'Museu Municipal', when: 'Ontem · 10h30', emoji: '🏛️', bg: '#D8C8E8' },
  { id: 'vinicola-sega-luos', name: 'Vinícola Sega Luos', when: 'Anteontem · 15h00', emoji: '🍷', bg: '#E0D0B8' },
];

export default function QrScreen() {
  const { scanning, startScan } = useAppState();

  return (
    <div style={{ position: 'absolute', inset: 0, background: 'white', overflowY: 'auto' }}>
      <div style={{ padding: '62px 20px 20px' }}>
        <div style={{ fontSize: 24, fontWeight: 900, color: '#1A2421', marginBottom: 4 }}>Ler QR Code</div>
        <div style={{ fontSize: 14, color: '#7A9A8E', marginBottom: 22 }}>Aponte para o QR Code do local</div>

        {/* Camera viewfinder */}
        <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', background: '#1A2C24', height: 260, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 362 260" width="362" height="260" style={{ position: 'absolute', inset: 0, display: 'block' }}>
            <rect width="362" height="260" fill="#1E3028" />
            <line x1="120" y1="0" x2="120" y2="260" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="241" y1="0" x2="241" y2="260" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="0" y1="87" x2="362" y2="87" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="0" y1="174" x2="362" y2="174" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <rect x="0" y="0" width="70" height="260" fill="rgba(0,0,0,0.3)" />
            <rect x="292" y="0" width="70" height="260" fill="rgba(0,0,0,0.3)" />
            <rect x="0" y="0" width="362" height="40" fill="rgba(0,0,0,0.3)" />
            <rect x="0" y="220" width="362" height="40" fill="rgba(0,0,0,0.3)" />
          </svg>
          <div style={{ position: 'absolute', top: 30, left: 70, width: 40, height: 40, borderTop: '3.5px solid #2A7A50', borderLeft: '3.5px solid #2A7A50', borderRadius: '6px 0 0 0' }} />
          <div style={{ position: 'absolute', top: 30, right: 70, width: 40, height: 40, borderTop: '3.5px solid #2A7A50', borderRight: '3.5px solid #2A7A50', borderRadius: '0 6px 0 0' }} />
          <div style={{ position: 'absolute', bottom: 30, left: 70, width: 40, height: 40, borderBottom: '3.5px solid #2A7A50', borderLeft: '3.5px solid #2A7A50', borderRadius: '0 0 0 6px' }} />
          <div style={{ position: 'absolute', bottom: 30, right: 70, width: 40, height: 40, borderBottom: '3.5px solid #2A7A50', borderRight: '3.5px solid #2A7A50', borderRadius: '0 0 6px 0' }} />
          <FairyWatermark />
          {scanning && (
            <div
              style={{
                position: 'absolute',
                top: 30,
                left: 70,
                right: 70,
                height: 2,
                background: 'linear-gradient(90deg,transparent,#2A7A50,rgba(168,220,168,0.9),#2A7A50,transparent)',
                borderRadius: 1,
                animation: 'scanBeam 1.4s ease-in-out infinite',
                boxShadow: '0 0 10px rgba(42,122,80,0.8)',
              }}
            />
          )}
        </div>

        {/* Scan button */}
        <div
          onClick={startScan}
          style={{
            background: '#2A7A50',
            borderRadius: 16,
            padding: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            cursor: 'pointer',
            marginBottom: 28,
            boxShadow: '0 4px 14px rgba(42,122,80,0.35)',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
            <rect x="2" y="2" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.8" />
            <rect x="12" y="2" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.8" />
            <rect x="2" y="12" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.8" />
            <rect x="4" y="4" width="4" height="4" fill="white" />
            <rect x="14" y="4" width="4" height="4" fill="white" />
            <rect x="4" y="14" width="4" height="4" fill="white" />
            <rect x="13" y="13" width="2" height="2" fill="white" />
            <rect x="17" y="13" width="2" height="2" fill="white" />
            <rect x="13" y="17" width="2" height="2" fill="white" />
            <rect x="17" y="17" width="2" height="2" fill="white" />
            <rect x="15" y="15" width="2" height="2" fill="white" />
          </svg>
          <span style={{ fontSize: 16, fontWeight: 800, color: 'white' }}>Simular: Jardim dos Sentidos</span>
        </div>

        {/* Recently visited */}
        <div style={{ fontSize: 17, fontWeight: 900, color: '#1A2421', marginBottom: 12 }}>Últimos locais visitados</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {RECENT.map((r) => (
            <div key={r.id} style={{ background: '#F8FAF9', borderRadius: 14, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: r.bg, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>
                {r.emoji}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#1A2421' }}>{r.name}</div>
                <div style={{ fontSize: 12, color: '#7A9A8E', marginTop: 1 }}>{r.when}</div>
              </div>
              <span style={{ background: '#E8F5EE', color: '#2A7A50', borderRadius: 8, padding: '4px 10px', fontSize: 12, fontWeight: 800 }}>check-in</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: 80 }} />
    </div>
  );
}
