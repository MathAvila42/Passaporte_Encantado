import { useAppState } from '../state/AppState';
import { getPlace, CATEGORY_COLORS } from '../data/places';
import { StarRow } from '../components/StarRating';
import PhotoImg from '../components/PhotoImg';

function IconButton({ children, onClick, style }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: 38,
        height: 38,
        borderRadius: 19,
        background: 'rgba(255,255,255,0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function DetalheScreen() {
  const { selectedPlaceId, backToGuiaHome, visitedIds, favoriteIds, toggleFavorite, setTab } = useAppState();
  const place = getPlace(selectedPlaceId);
  if (!place) return null;

  const visited = visitedIds.includes(place.id);
  const fav = favoriteIds.includes(place.id);
  const color = CATEGORY_COLORS[place.category] ?? '#2A7A50';

  return (
    <div style={{ position: 'absolute', inset: 0, overflowY: 'auto', background: '#fff' }}>
      <div style={{ position: 'relative', height: 300 }}>
        <PhotoImg src={place.image} alt={place.name} style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,0.15) 0%,transparent 30%,transparent 60%,rgba(0,0,0,0.55) 100%)' }} />
        <div style={{ position: 'relative', padding: '52px 16px 0', display: 'flex', justifyContent: 'space-between' }}>
          <IconButton onClick={backToGuiaHome}>
            <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
              <path d="M12 3l-6 6 6 6" stroke="#1A2421" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </IconButton>
          <div style={{ display: 'flex', gap: 8 }}>
            <IconButton onClick={() => toggleFavorite(place.id)}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill={fav ? '#E8834A' : 'none'}>
                <path d="M12 21s-7-4.5-9.5-9C.7 8.4 2 4.5 6 4c2.2-.3 4 1 6 3 2-2 3.8-3.3 6-3 4 0.5 5.3 4.4 3.5 8-2.5 4.5-9.5 9-9.5 9z" stroke="#E8834A" strokeWidth="1.6" />
              </svg>
            </IconButton>
            <IconButton>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <circle cx="18" cy="5" r="2.5" stroke="#1A2421" strokeWidth="1.6" />
                <circle cx="6" cy="12" r="2.5" stroke="#1A2421" strokeWidth="1.6" />
                <circle cx="18" cy="19" r="2.5" stroke="#1A2421" strokeWidth="1.6" />
                <path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4" stroke="#1A2421" strokeWidth="1.6" />
              </svg>
            </IconButton>
          </div>
        </div>
        <div style={{ position: 'absolute', left: 16, right: 16, bottom: 16, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 10 }}>
          <div>
            <span style={{ background: 'rgba(255,255,255,0.92)', color, borderRadius: 8, padding: '4px 10px', fontSize: 11, fontWeight: 800 }}>{place.category}</span>
            <div style={{ fontSize: 24, fontWeight: 800, color: 'white', marginTop: 8, lineHeight: 1.2, fontFamily: "'Playfair Display', Georgia, serif" }}>{place.name}</div>
          </div>
          {visited && (
            <span style={{ background: '#2A7A50', color: 'white', borderRadius: 10, padding: '5px 10px', fontSize: 11, fontWeight: 800, whiteSpace: 'nowrap', flexShrink: 0 }}>
              ✓ Visitado
            </span>
          )}
        </div>
      </div>

      <div style={{ padding: '16px' }}>
        {place.rating != null && (
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <StarRow rating={place.rating} size={13} />
            </div>
            <div style={{ width: 1, height: 28, background: '#EEF4F0' }} />
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#1A2421' }}>{place.distance}</div>
            </div>
            <div style={{ width: 1, height: 28, background: '#EEF4F0' }} />
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#1A2421' }}>{place.hours}</div>
            </div>
          </div>
        )}

        <div style={{ height: 1, background: '#EEF4F0', margin: '0 -16px 16px' }} />

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
          {place.tags.map((tag) => (
            <span key={tag} style={{ background: '#EEF7F2', color: '#2A7A50', borderRadius: 20, padding: '6px 14px', fontSize: 13, fontWeight: 700 }}>{tag}</span>
          ))}
        </div>

        <div style={{ fontSize: 17, fontWeight: 800, color: '#1A2421', marginBottom: 8, fontFamily: "'Playfair Display', Georgia, serif" }}>Sobre o local</div>
        <div style={{ fontSize: 14.5, color: '#425048', lineHeight: 1.6, marginBottom: 18 }}>{place.description}</div>

        <div style={{ background: '#F0F6F2', borderRadius: 14, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" stroke="#2A7A50" strokeWidth="1.8" />
            <circle cx="12" cy="10" r="2.4" stroke="#2A7A50" strokeWidth="1.8" />
          </svg>
          <span style={{ fontSize: 13.5, color: '#2A6E48', fontWeight: 700 }}>{place.address}</span>
        </div>

        {visited ? (
          <div style={{ background: '#F0F6F2', borderRadius: 14, padding: 14, textAlign: 'center', marginBottom: 22 }}>
            <span style={{ fontSize: 14.5, fontWeight: 800, color: '#2A7A50' }}>✓ Você já visitou este local</span>
          </div>
        ) : (
          <div onClick={() => setTab('qr')} style={{ background: '#2A7A50', borderRadius: 14, padding: 14, textAlign: 'center', marginBottom: 22, cursor: 'pointer' }}>
            <span style={{ fontSize: 14.5, fontWeight: 800, color: 'white' }}>Fazer check-in com QR Code</span>
          </div>
        )}

        {place.reviews.length > 0 && (
          <>
            <div style={{ fontSize: 17, fontWeight: 800, color: '#1A2421', marginBottom: 12, fontFamily: "'Playfair Display', Georgia, serif" }}>Avaliações</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
              {place.reviews.map((r) => (
                <div key={r.name} style={{ border: '1px solid #EEF4F0', borderRadius: 14, padding: '12px 14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 14, fontWeight: 800, color: '#1A2421' }}>{r.name}</span>
                    <StarRow rating={r.rating} />
                  </div>
                  <div style={{ fontSize: 12, color: '#9BA8A0', marginTop: 2, marginBottom: 6 }}>{r.date}</div>
                  <div style={{ fontSize: 13.5, color: '#425048', lineHeight: 1.5 }}>{r.text}</div>
                </div>
              ))}
            </div>
          </>
        )}

        <div style={{ height: 90 }} />
      </div>
    </div>
  );
}
