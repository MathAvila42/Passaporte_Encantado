import { useAppState } from '../state/AppState';
import { getPlace } from '../data/places';
import { StarRow } from '../components/StarRating';

const TOTAL_PLACES = 6;

const ACCESSIBILITY_OPTIONS = [
  { key: 'textoGrande', label: 'Texto grande' },
  { key: 'rotaAcessivel', label: 'Rota acessível' },
  { key: 'altoContraste', label: 'Alto contraste' },
];

function Toggle({ on, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: 46,
        height: 26,
        background: on ? '#2A7A50' : '#D8E4E0',
        borderRadius: 13,
        position: 'relative',
        cursor: 'pointer',
        transition: 'background 0.15s ease',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 2,
          left: on ? 'auto' : 2,
          right: on ? 2 : 'auto',
          width: 22,
          height: 22,
          background: 'white',
          borderRadius: 11,
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
          transition: 'left 0.15s ease, right 0.15s ease',
        }}
      />
    </div>
  );
}

export default function PerfilScreen() {
  const { setTab, points, visitedIds, badgeIds, accessibility, toggleAccessibility } = useAppState();
  const visited = visitedIds.map(getPlace).filter(Boolean);
  const progressPct = Math.round((visitedIds.length / TOTAL_PLACES) * 100);

  return (
    <div style={{ position: 'absolute', inset: 0, overflowY: 'auto', background: '#F8FAF9' }}>
      {/* Header */}
      <div style={{ background: 'white', padding: '62px 18px 20px', borderBottom: '1px solid #EEF4F0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div style={{ fontSize: 22, fontWeight: 900, color: '#1A2421' }}>Seu Perfil</div>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3" stroke="#2A7A50" strokeWidth="2" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#2A7A50" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
          <div style={{ width: 68, height: 68, borderRadius: 34, background: 'linear-gradient(135deg,#E8834A,#C86020)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 900, color: 'white', border: '3px solid #EEF4F0' }}>
            AS
          </div>
          <div>
            <div style={{ fontSize: 14, color: '#7A9A8E', fontWeight: 600 }}>Olá,</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: '#1A2421' }}>Ana Silva!</div>
            <div style={{ fontSize: 13, color: '#7A9A8E', marginTop: 1 }}>📍 Encantado, RS</div>
          </div>
        </div>
        <div style={{ background: '#F0F6F2', borderRadius: 14, padding: '14px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#1A2421' }}>Passaporte Encantado</div>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#2A7A50' }}>{visitedIds.length} / {TOTAL_PLACES} locais</div>
          </div>
          <div style={{ height: 7, background: '#D8EAE0', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ width: `${progressPct}%`, height: '100%', background: 'linear-gradient(90deg,#2A7A50,#E8834A)', borderRadius: 4 }} />
          </div>
          <div style={{ fontSize: 12, color: '#7A9A8E', marginTop: 6 }}>Complete {TOTAL_PLACES} locais para ganhar recompensas especiais</div>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: 'flex', background: 'white', marginTop: 10, borderTop: '1px solid #EEF4F0', borderBottom: '1px solid #EEF4F0' }}>
        <div style={{ flex: 1, padding: '18px 0', textAlign: 'center', borderRight: '1px solid #EEF4F0' }}>
          <div style={{ fontSize: 24, fontWeight: 900, color: '#1A2421' }}>{visitedIds.length}</div>
          <div style={{ fontSize: 12, color: '#7A9A8E', fontWeight: 700, marginTop: 2 }}>Locais</div>
        </div>
        <div onClick={() => setTab('conquistas')} style={{ flex: 1, padding: '18px 0', textAlign: 'center', cursor: 'pointer', borderRight: '1px solid #EEF4F0' }}>
          <div style={{ fontSize: 24, fontWeight: 900, color: '#1A2421' }}>{badgeIds.length}</div>
          <div style={{ fontSize: 12, color: '#7A9A8E', fontWeight: 700, marginTop: 2 }}>Conquistas</div>
        </div>
        <div onClick={() => setTab('pontos')} style={{ flex: 1, padding: '18px 0', textAlign: 'center', cursor: 'pointer' }}>
          <div style={{ fontSize: 24, fontWeight: 900, color: '#1A2421' }}>{points}</div>
          <div style={{ fontSize: 12, color: '#7A9A8E', fontWeight: 700, marginTop: 2 }}>Pontos</div>
        </div>
      </div>

      {/* Visited places */}
      <div style={{ padding: '18px 16px 8px' }}>
        <div style={{ fontSize: 17, fontWeight: 900, color: '#1A2421', marginBottom: 12 }}>Locais visitados</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {visited.map((place) => (
            <div key={place.id} style={{ background: 'white', borderRadius: 14, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: place.emojiBg, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>
                {place.emoji}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#1A2421' }}>{place.name}</div>
                <div style={{ marginTop: 4 }}>
                  <StarRow rating={place.rating} />
                </div>
              </div>
              <div style={{ background: '#E8F5EE', borderRadius: 8, padding: '4px 10px' }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: '#2A7A50' }}>+{place.points} pts</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessibility */}
      <div style={{ padding: '18px 16px 28px' }}>
        <div style={{ fontSize: 17, fontWeight: 900, color: '#1A2421', marginBottom: 12 }}>Acessibilidade</div>
        <div style={{ background: 'white', borderRadius: 16, overflow: 'hidden', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
          {ACCESSIBILITY_OPTIONS.map((opt, i) => (
            <div
              key={opt.key}
              style={{
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: i < ACCESSIBILITY_OPTIONS.length - 1 ? '1px solid #F0F4F2' : 'none',
              }}
            >
              <div style={{ fontSize: 15, fontWeight: 700, color: '#1A2421' }}>{opt.label}</div>
              <Toggle on={accessibility[opt.key]} onClick={() => toggleAccessibility(opt.key)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
