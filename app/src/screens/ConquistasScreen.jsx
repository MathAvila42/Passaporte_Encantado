import { useAppState } from '../state/AppState';
import { BADGES } from '../data/badges';

function CheckDot() {
  return (
    <div style={{ position: 'absolute', bottom: -2, right: -2, width: 22, height: 22, background: '#2A7A50', borderRadius: 11, border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="10" height="8" viewBox="0 0 10 8">
        <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function ConquistasScreen() {
  const { setTab, badgeIds } = useAppState();
  const unlockedCount = badgeIds.length;
  const progressPct = Math.round((unlockedCount / BADGES.length) * 100);

  return (
    <div style={{ position: 'absolute', inset: 0, overflowY: 'auto', background: '#F8FAF9' }}>
      <div style={{ padding: '62px 18px 20px', background: 'white', borderBottom: '1px solid #EEF4F0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <div
            onClick={() => setTab('perfil')}
            style={{ width: 36, height: 36, background: '#F0F4F2', borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M12 3l-6 6 6 6" stroke="#1A2421" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 22, fontWeight: 900, color: '#1A2421' }}>Conquistas</div>
            <div style={{ fontSize: 13, color: '#7A9A8E' }}>{unlockedCount} de {BADGES.length} desbloqueadas</div>
          </div>
        </div>
        <div style={{ height: 6, background: '#EEF4F0', borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ width: `${progressPct}%`, height: '100%', background: 'linear-gradient(90deg,#2A7A50,#E8834A)', borderRadius: 3 }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, padding: '20px 16px 90px' }}>
        {BADGES.map((badge) => {
          const unlocked = badgeIds.includes(badge.id);
          return (
            <div key={badge.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              {unlocked ? (
                <div style={{ position: 'relative', width: 74, height: 74 }}>
                  <div
                    style={{
                      width: 74,
                      height: 74,
                      borderRadius: 37,
                      background: `linear-gradient(135deg,${badge.bgFrom},${badge.bgTo})`,
                      border: `2.5px solid ${badge.ring}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 30,
                    }}
                  >
                    {badge.emoji}
                  </div>
                  <CheckDot />
                </div>
              ) : (
                <div
                  style={{
                    width: 74,
                    height: 74,
                    borderRadius: 37,
                    background: '#EAEFED',
                    border: '2px solid #D8E0DC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 30,
                    filter: 'grayscale(1)',
                    opacity: 0.4,
                  }}
                >
                  {badge.emoji}
                </div>
              )}
              <div
                style={{
                  fontSize: 11,
                  fontWeight: unlocked ? 800 : 700,
                  color: unlocked ? '#1A2421' : '#9BA8A0',
                  textAlign: 'center',
                  lineHeight: 1.3,
                  whiteSpace: 'pre-line',
                }}
              >
                {badge.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
