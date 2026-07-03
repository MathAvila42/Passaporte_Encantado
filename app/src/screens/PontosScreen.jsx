import { useAppState } from '../state/AppState';

export default function PontosScreen() {
  const { points, visitedIds, history } = useAppState();
  const rewardProgress = Math.min(visitedIds.length, 5);
  const rewardPct = Math.round((rewardProgress / 5) * 100);

  return (
    <div style={{ position: 'absolute', inset: 0, overflowY: 'auto', background: '#F8FAF9' }}>
      <div style={{ background: 'linear-gradient(155deg,#2A7A50,#1A5038)', padding: '62px 20px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, background: 'rgba(255,255,255,0.05)', borderRadius: 90 }} />
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>
          PASSAPORTE ENCANTADO
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}>
          <div style={{ fontSize: 62, fontWeight: 900, color: 'white', lineHeight: 1 }}>{points}</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: 'rgba(255,255,255,0.65)', paddingBottom: 9 }}>pontos</div>
        </div>
        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>Ana Silva · {visitedIds.length} locais visitados</div>
        <div style={{ marginTop: 18, background: 'rgba(0,0,0,0.15)', borderRadius: 14, padding: '12px 14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'white' }}>🎫 Ingresso Grátis – Museu</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 700 }}>{rewardProgress}/5</span>
          </div>
          <div style={{ height: 6, background: 'rgba(255,255,255,0.15)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ width: `${rewardPct}%`, height: '100%', background: '#E8834A', borderRadius: 3 }} />
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 5 }}>Visite 3 locais para desbloquear</div>
        </div>
      </div>
      <div style={{ padding: '18px 16px 90px' }}>
        <div style={{ fontSize: 17, fontWeight: 900, color: '#1A2421', marginBottom: 12 }}>Histórico</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {history.map((entry) => (
            <div key={entry.id} style={{ background: 'white', borderRadius: 14, padding: 14, display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ width: 44, height: 44, background: entry.emojiBg, borderRadius: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                {entry.emoji}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#1A2421' }}>{entry.label}</div>
                <div style={{ fontSize: 12, color: '#7A9A8E', marginTop: 1 }}>{entry.when}</div>
              </div>
              <span style={{ fontSize: 17, fontWeight: 900, color: '#2A7A50' }}>+{entry.delta}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
