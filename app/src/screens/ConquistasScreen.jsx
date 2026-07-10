import { useAppState, getLevelInfo } from '../state/AppState';
import { BADGES } from '../data/badges';
import { PLACES } from '../data/places';
import { StarRow } from '../components/StarRating';
import PhotoImg from '../components/PhotoImg';

const TOTAL_TO_UNLOCK = 3;

export default function ConquistasScreen() {
  const { backToPerfil, points, visitedIds, badgeIds } = useAppState();
  const { current, next } = getLevelInfo(points);
  const progressPct = next ? Math.min(100, Math.round((points / next.min) * 100)) : 100;
  const unlocked = visitedIds.length >= TOTAL_TO_UNLOCK;

  const mappable = PLACES.filter((p) => !p.locked);
  const visited = mappable.filter((p) => visitedIds.includes(p.id));
  const upcoming = mappable.filter((p) => !visitedIds.includes(p.id));

  return (
    <div style={{ position: 'absolute', inset: 0, overflowY: 'auto', background: '#F8FAF9' }}>
      <div style={{ padding: '52px 18px 18px', background: 'white', borderBottom: '1px solid #EEF4F0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div onClick={backToPerfil} style={{ width: 34, height: 34, background: '#F0F4F2', borderRadius: 17, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                <path d="M12 3l-6 6 6 6" stroke="#1A2421" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 21, fontWeight: 800, color: '#1A2421', fontFamily: "'Playfair Display', Georgia, serif" }}>Conquistas</div>
              <div style={{ fontSize: 12.5, color: '#7A9A8E' }}>Explore e ganhe pontos em Encantado</div>
            </div>
          </div>
          <div style={{ width: 38, height: 38, background: '#2A7A50', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M8 4h8v4a4 4 0 01-8 0V4z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M8 5H5a3 3 0 003 4M16 5h3a3 3 0 01-3 4" stroke="white" strokeWidth="1.8" />
              <path d="M12 12v4M9 20h6M10 16h4v2a2 2 0 01-2 2 2 2 0 01-2-2v-2z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <div style={{ padding: '18px 16px 0' }}>
        <div style={{ background: '#F0F6F2', borderRadius: 16, padding: 16, marginBottom: 14 }}>
          <div style={{ fontSize: 12, color: '#7A9A8E', fontWeight: 700, marginBottom: 4 }}>SEUS PONTOS</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6 }}>
              <span style={{ fontSize: 34, fontWeight: 800, color: '#1A2421' }}>{points}</span>
              <span style={{ fontSize: 14, color: '#7A9A8E', fontWeight: 700, paddingBottom: 4 }}>pts</span>
            </div>
            <span style={{ background: '#2A7A50', color: 'white', borderRadius: 10, padding: '4px 10px', fontSize: 11, fontWeight: 800 }}>⚡ {current.label}</span>
          </div>
          <div style={{ fontSize: 12, color: '#5A7A70', marginBottom: 6, display: 'flex', justifyContent: 'space-between' }}>
            <span>{next ? `Progresso para ${next.label}` : 'Nível máximo atingido'}</span>
            {next && <span style={{ fontWeight: 800 }}>{points}/{next.min}</span>}
          </div>
          <div style={{ height: 7, background: '#DCE8E0', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ width: `${progressPct}%`, height: '100%', background: 'linear-gradient(90deg,#2A7A50,#E8834A)', borderRadius: 4 }} />
          </div>
          <div style={{ fontSize: 12, color: '#7A9A8E', marginTop: 8 }}>
            <span style={{ background: 'white', borderRadius: 8, padding: '2px 6px', marginRight: 4 }}>📍</span>
            Ganhe +10 pts por visita confirmada e review de local turístico
          </div>
        </div>

        {unlocked && (
          <div style={{ background: '#FEF6E0', border: '1px solid #F0D890', borderRadius: 14, padding: '12px 14px', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 24 }}>🎫</span>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#1A2421' }}>Ingresso desbloqueado! 🎉</div>
              <div style={{ fontSize: 12.5, color: '#8A7020', marginTop: 1 }}>Jardim Encantado — jardim sensorial exclusivo</div>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: '#1A2421', fontFamily: "'Playfair Display', Georgia, serif" }}>Badges</div>
          <span style={{ fontSize: 13, color: '#7A9A8E', fontWeight: 700 }}>{badgeIds.length}/{BADGES.length} conquistados</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 22 }}>
          {BADGES.map((badge) => {
            const has = badgeIds.includes(badge.id);
            return (
              <div key={badge.id} style={{ background: has ? '#EDF3EC' : '#F3F3F3', borderRadius: 14, padding: '14px 8px', textAlign: 'center' }}>
                <div style={{ fontSize: 26, marginBottom: 6, filter: has ? 'none' : 'grayscale(1)', opacity: has ? 1 : 0.4 }}>{badge.emoji}</div>
                <div style={{ fontSize: 11.5, fontWeight: has ? 800 : 700, color: has ? '#1A2421' : '#9BA8A0', lineHeight: 1.25, marginBottom: 2 }}>{badge.label}</div>
                <div style={{ fontSize: 9.5, color: has ? '#5A7A70' : '#B8C0BC', lineHeight: 1.2 }}>{badge.desc}</div>
              </div>
            );
          })}
        </div>

        <div style={{ fontSize: 18, fontWeight: 800, color: '#1A2421', marginBottom: 12, fontFamily: "'Playfair Display', Georgia, serif" }}>Já visitados</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
          {visited.map((place) => (
            <div key={place.id} style={{ background: 'white', borderRadius: 14, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 1px 8px rgba(0,0,0,0.05)' }}>
              <PhotoImg src={place.image} alt={place.name} style={{ width: 48, height: 48, borderRadius: 12, flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14.5, fontWeight: 800, color: '#1A2421' }}>{place.shortName}</div>
                <div style={{ fontSize: 12, color: '#7A9A8E', margin: '2px 0' }}>{place.category}</div>
                <StarRow rating={place.rating} />
              </div>
              <span style={{ background: '#E8F5EE', color: '#2A7A50', borderRadius: 8, padding: '4px 9px', fontSize: 11, fontWeight: 800, whiteSpace: 'nowrap' }}>+{place.points} pts</span>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 18, fontWeight: 800, color: '#1A2421', marginBottom: 12, fontFamily: "'Playfair Display', Georgia, serif" }}>Próximas visitas</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 90 }}>
          {upcoming.map((place) => (
            <div key={place.id} style={{ background: 'white', borderRadius: 14, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 1px 8px rgba(0,0,0,0.05)' }}>
              <div style={{ position: 'relative', width: 48, height: 48, flexShrink: 0 }}>
                <PhotoImg src={place.image} alt={place.name} style={{ width: 48, height: 48, borderRadius: 12, filter: 'grayscale(0.3)', opacity: 0.75 }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 16 }}>🔒</span>
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14.5, fontWeight: 800, color: '#1A2421' }}>{place.shortName}</div>
                <div style={{ fontSize: 12, color: '#9BA8A0', margin: '2px 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{place.description}</div>
                <div style={{ fontSize: 11.5, color: '#7A9A8E' }}>{place.category} · {place.distance}</div>
              </div>
              <span style={{ background: '#F0F4F2', color: '#5A7A70', borderRadius: 8, padding: '4px 9px', fontSize: 11, fontWeight: 800, whiteSpace: 'nowrap' }}>+{place.points} pts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
