import { useAppState } from '../state/AppState';
import { getPlace, PLACES } from '../data/places';
import { C, FONT_HEAD } from '../theme';
import { Close, QrCode } from '../components/Icons';
import { Distance, PlacePhoto, PointsPill } from '../components/ui';

const CORNERS = [
  { top: 23.5, left: 23.5, borderTop: true, borderLeft: true, radius: '14px 0 0 0' },
  { top: 23.5, right: 23.5, borderTop: true, borderRight: true, radius: '0 14px 0 0' },
  { bottom: 23.5, left: 23.5, borderBottom: true, borderLeft: true, radius: '0 0 0 14px' },
  { bottom: 23.5, right: 23.5, borderBottom: true, borderRight: true, radius: '0 0 14px 0' },
];

function Label({ children, color, top }) {
  return <div style={{ marginTop: top, fontSize: 11.85, fontWeight: 600, letterSpacing: 1.6, color, textTransform: 'uppercase' }}>{children}</div>;
}

export default function QrScreen() {
  const { closeQr, confirmingId, qrStatus, simulateScan, visitedIds } = useAppState();
  const confirming = getPlace(confirmingId);
  const scanning = qrStatus === 'scanning';
  const confirmed = qrStatus === 'done';
  const nearby = PLACES.filter((p) => p.id !== confirmingId && !visitedIds.includes(p.id)).slice(0, 3);

  return (
    <div className="screen" style={{ background: C.bg }}>
      <div style={{ padding: '47px 20px 150px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <h1 style={{ margin: '8px 0 0', fontFamily: FONT_HEAD, fontWeight: 400, fontSize: 21.5, lineHeight: '30px', color: C.ink }}>Ler QR Code</h1>
          <button
            type="button"
            aria-label="Fechar"
            onClick={closeQr}
            style={{
              width: 36,
              height: 36,
              marginTop: 9,
              marginRight: 1,
              borderRadius: '50%',
              border: 'none',
              background: C.greenSoft,
              color: C.ink,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            <Close size={17} stroke={2} />
          </button>
        </div>
        <p style={{ margin: '5px 0 0', maxWidth: 330, fontSize: 15, lineHeight: '18px', color: C.muted }}>Aponte para o QR code do local para registrar sua visita</p>

        {/* Scanner */}
        <div
          style={{
            position: 'relative',
            height: 388.5,
            marginTop: 25,
            borderRadius: 28,
            background: `radial-gradient(circle at 50% 46%, #15240F 0%, ${C.scanner} 55%)`,
            overflow: 'hidden',
          }}
        >
          {CORNERS.map((c, i) => (
            <span
              key={i}
              style={{
                position: 'absolute',
                width: 40,
                height: 40,
                top: c.top,
                left: c.left,
                right: c.right,
                bottom: c.bottom,
                borderColor: C.green,
                borderStyle: 'solid',
                borderWidth: 0,
                borderTopWidth: c.borderTop ? 2.5 : 0,
                borderLeftWidth: c.borderLeft ? 2.5 : 0,
                borderRightWidth: c.borderRight ? 2.5 : 0,
                borderBottomWidth: c.borderBottom ? 2.5 : 0,
                borderRadius: c.radius,
              }}
            />
          ))}
          <div
            style={{
              position: 'absolute',
              left: 26,
              right: 26,
              top: 176,
              height: 1.5,
              background: `linear-gradient(90deg, transparent, ${C.green} 30%, #6E8C55 50%, ${C.green} 70%, transparent)`,
              animation: scanning ? 'scanLine 2.2s ease-in-out infinite' : 'none',
            }}
          />
          <div style={{ position: 'absolute', left: 0, right: 0, top: 156, display: 'flex', justifyContent: 'center', color: C.green }}>
            <QrCode size={48} stroke={1.4} />
          </div>
          <div style={{ position: 'absolute', left: 0, right: 0, top: 216, textAlign: 'center', fontSize: 12.8, color: '#6DB85A' }}>
            {scanning ? 'Lendo QR code...' : confirmed ? 'Visita confirmada!' : 'Aguardando QR code...'}
          </div>
        </div>

        {confirming && (
          <>
            <Label color={confirmed ? C.green : C.coral} top={25}>
              {confirmed ? 'Visita confirmada' : 'Confirmando visita'}
            </Label>
            <div
              onClick={() => qrStatus === 'pending' && simulateScan(confirming.id)}
              style={{
                cursor: qrStatus === 'pending' ? 'pointer' : 'default',
                marginTop: 10,
                minHeight: 91,
                borderRadius: 20,
                border: `1.5px solid ${confirmed ? C.green : C.coral}`,
                background: C.surface,
                display: 'flex',
                alignItems: 'center',
                gap: 12.5,
                padding: '0 18px 0 18.5px',
              }}
            >
              <PlacePhoto place={confirming} size={48} radius={14} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 15, fontWeight: 600, lineHeight: '18px', color: C.ink }}>{confirming.name}</div>
                <div style={{ fontSize: 13, color: C.muted, marginTop: 3 }}>
                  <span style={{ fontSize: 11 }}>📍</span> {confirming.distance}
                </div>
              </div>
              <PointsPill points={confirming.points} tone={confirmed ? 'earned' : 'active'} style={{ height: 24, padding: '0 10px', borderRadius: 12, marginLeft: -8 }} />
            </div>
          </>
        )}

        {nearby.length > 0 && (
          <>
            <Label color={C.muted} top={48}>
              Simular leitura — locais próximos
            </Label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 10, marginRight: -30 }}>
              {nearby.map((place) => (
                <div
                  key={place.id}
                  onClick={() => !scanning && simulateScan(place.id)}
                  style={{
                    height: 82,
                    borderRadius: 20,
                    border: `1px solid ${C.line}`,
                    background: C.surface,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 11,
                    padding: '0 18px 0 17px',
                    cursor: scanning ? 'default' : 'pointer',
                  }}
                >
                  <PlacePhoto place={place} size={48} radius={20} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14.7, fontWeight: 600, lineHeight: '20px', color: C.ink }}>{place.name}</div>
                    <div style={{ marginTop: 2 }}>
                      <Distance value={place.distance} size={13} />
                    </div>
                  </div>
                  <PointsPill points={place.points} tone="earned" style={{ height: 24, padding: '0 10px', borderRadius: 12 }} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
