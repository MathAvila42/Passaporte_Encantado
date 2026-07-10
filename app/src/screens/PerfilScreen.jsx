import { useAppState, getLevelInfo } from '../state/AppState';
import { getPlace } from '../data/places';
import { BADGES } from '../data/badges';
import PhotoImg from '../components/PhotoImg';

const CONFIG_OPTIONS = [
  { key: 'notificacoes', label: 'Notificações' },
  { key: 'privacidade', label: 'Privacidade' },
  { key: 'configuracoes', label: 'Configurações' },
];

export default function PerfilScreen() {
  const { setTab, points, visitedIds, badgeIds, history, openConquistas } = useAppState();
  const visited = visitedIds.map(getPlace).filter(Boolean);
  const { current } = getLevelInfo(points);
  const shownBadges = BADGES.slice(0, 6);

  return (
    <div style={{ position: 'absolute', inset: 0, overflowY: 'auto', background: '#F8FAF9' }}>
      <div style={{ background: 'white', padding: '52px 18px 20px', borderBottom: '1px solid #EEF4F0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div onClick={() => setTab('guia')} style={{ width: 34, height: 34, background: '#F0F4F2', borderRadius: 17, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                <path d="M12 3l-6 6 6 6" stroke="#1A2421" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#1A2421', fontFamily: "'Playfair Display', Georgia, serif" }}>Meu Perfil</div>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3" stroke="#2A7A50" strokeWidth="2" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#2A7A50" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <div style={{ background: '#F0F6F2', borderRadius: 16, padding: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
            <div style={{ width: 60, height: 60, borderRadius: 16, background: 'linear-gradient(145deg,#2A7A50,#1A5A38)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8" />
                <path d="M15.2 8.8l-2 4.4-4.4 2 2-4.4z" fill="white" fillOpacity="0.85" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#1A2421' }}>Viajante</div>
              <div style={{ fontSize: 13, color: '#7A9A8E', marginTop: 1 }}>📍 Encantado – RS</div>
              <span style={{ display: 'inline-block', marginTop: 6, background: '#2A7A50', color: 'white', borderRadius: 10, padding: '3px 10px', fontSize: 11, fontWeight: 800 }}>⚡ {current.label}</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', background: 'white', borderTop: '1px solid #EEF4F0', borderBottom: '1px solid #EEF4F0' }}>
        <div style={{ flex: 1, padding: '18px 0', textAlign: 'center', borderRight: '1px solid #EEF4F0' }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: '#1A2421' }}>{points}</div>
          <div style={{ fontSize: 12, color: '#7A9A8E', fontWeight: 700, marginTop: 2 }}>Pontos</div>
        </div>
        <div style={{ flex: 1, padding: '18px 0', textAlign: 'center', borderRight: '1px solid #EEF4F0' }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: '#1A2421' }}>{visitedIds.length}</div>
          <div style={{ fontSize: 12, color: '#7A9A8E', fontWeight: 700, marginTop: 2 }}>Visitados</div>
        </div>
        <div onClick={openConquistas} style={{ flex: 1, padding: '18px 0', textAlign: 'center', cursor: 'pointer' }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: '#1A2421' }}>{badgeIds.length}</div>
          <div style={{ fontSize: 12, color: '#7A9A8E', fontWeight: 700, marginTop: 2 }}>Badges</div>
        </div>
      </div>

      <div style={{ padding: '18px 16px 8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ fontSize: 17, fontWeight: 800, color: '#1A2421', fontFamily: "'Playfair Display', Georgia, serif" }}>Badges Conquistados</div>
          <span onClick={openConquistas} style={{ fontSize: 13, color: '#2A7A50', fontWeight: 700, cursor: 'pointer' }}>Ver todos ›</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 20 }}>
          {shownBadges.map((badge) => {
            const unlocked = badgeIds.includes(badge.id);
            return (
              <div key={badge.id} style={{ background: unlocked ? '#EDF3EC' : '#F3F3F3', borderRadius: 14, padding: '14px 8px', textAlign: 'center' }}>
                <div style={{ fontSize: 26, marginBottom: 6, filter: unlocked ? 'none' : 'grayscale(1)', opacity: unlocked ? 1 : 0.4 }}>{badge.emoji}</div>
                <div style={{ fontSize: 11, fontWeight: unlocked ? 800 : 700, color: unlocked ? '#1A2421' : '#9BA8A0', lineHeight: 1.3 }}>{badge.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ padding: '0 16px 8px' }}>
        <div style={{ fontSize: 17, fontWeight: 800, color: '#1A2421', marginBottom: 12, fontFamily: "'Playfair Display', Georgia, serif" }}>Atividade Recente</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
          {history.slice(0, 4).map((entry) => (
            <div key={entry.id} style={{ background: 'white', borderRadius: 14, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 1px 8px rgba(0,0,0,0.05)' }}>
              <div style={{ width: 32, height: 32, borderRadius: 16, background: '#EEF7F2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#2A7A50', fontSize: 15 }}>★</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#1A2421' }}>{entry.label}</div>
                <div style={{ fontSize: 12, color: '#9BA8A0', marginTop: 1 }}>{entry.when}</div>
              </div>
              <span style={{ fontSize: 14, fontWeight: 800, color: '#2A7A50' }}>+{entry.delta}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '0 16px 8px' }}>
        <div style={{ fontSize: 17, fontWeight: 800, color: '#1A2421', marginBottom: 12, fontFamily: "'Playfair Display', Georgia, serif" }}>Locais visitados</div>
        <div style={{ display: 'flex', gap: 14, overflowX: 'auto', marginBottom: 20 }}>
          {visited.map((place) => (
            <div key={place.id} style={{ textAlign: 'center', flexShrink: 0, width: 70 }}>
              <PhotoImg src={place.image} alt={place.name} style={{ width: 60, height: 60, borderRadius: 30, margin: '0 auto 6px' }} />
              <div style={{ fontSize: 11, color: '#425048', fontWeight: 700, lineHeight: 1.25 }}>{place.shortName}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '0 16px 24px' }}>
        <div style={{ fontSize: 17, fontWeight: 800, color: '#1A2421', marginBottom: 12, fontFamily: "'Playfair Display', Georgia, serif" }}>Configurações</div>
        <div style={{ background: 'white', borderRadius: 16, overflow: 'hidden', boxShadow: '0 1px 8px rgba(0,0,0,0.05)', marginBottom: 16 }}>
          {CONFIG_OPTIONS.map((opt, i) => (
            <div
              key={opt.key}
              style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: i < CONFIG_OPTIONS.length - 1 ? '1px solid #F0F4F2' : 'none', cursor: 'pointer' }}
            >
              <span style={{ fontSize: 15, fontWeight: 700, color: '#1A2421' }}>{opt.label}</span>
              <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                <path d="M6 3l6 6-6 6" stroke="#C8D8D0" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          ))}
        </div>
        <div style={{ border: '1.5px solid #F0B8B8', borderRadius: 14, padding: 14, textAlign: 'center', cursor: 'pointer' }}>
          <span style={{ fontSize: 14.5, fontWeight: 800, color: '#D64545' }}>⇥ Sair da conta</span>
        </div>
      </div>
    </div>
  );
}
