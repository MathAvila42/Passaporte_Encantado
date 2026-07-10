import { useAppState } from '../state/AppState';
import { PLACES, CATEGORY_COLORS } from '../data/places';
import { StarRow } from '../components/StarRating';
import PhotoImg from '../components/PhotoImg';

const CHIPS = ['Todos', 'Mirante', 'Natureza', 'Gastronomia', 'Cultura', 'Histórico'];

const MAP_POSITIONS = {
  'cascata-veu-noiva': { top: '10%', left: '52%' },
  'vinicola-veja-lusa': { top: '24%', left: '26%' },
  'cristo-redentor': { top: '37%', left: '58%' },
  'parque-moinhos': { top: '60%', left: '22%' },
  'cantina-borghetti': { top: '66%', left: '50%' },
  'museu-municipal': { top: '68%', left: '68%' },
  'igreja-matriz': { top: '76%', left: '58%' },
  'feira-colonial': { top: '82%', left: '42%' },
};

const MAP_EMBED_SRC = 'https://www.google.com/maps?q=Encantado,+RS,+Brasil&z=13&output=embed';

export default function MapaScreen() {
  const { mapView, setMapView, activeCategory, setActiveCategory, backToGuiaHome, openPlace, visitedIds } = useAppState();
  const isMap = mapView === 'map';
  const mappable = PLACES.filter((p) => !p.locked);
  const filtered = mappable.filter((p) => activeCategory === 'Todos' || p.category === activeCategory);

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ padding: '52px 16px 12px', borderBottom: '1px solid #F0F4F2', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div onClick={backToGuiaHome} style={{ width: 34, height: 34, background: '#F0F4F2', borderRadius: 17, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                <path d="M12 3l-6 6 6 6" stroke="#1A2421" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 19, fontWeight: 800, color: '#1A2421', fontFamily: "'Playfair Display', Georgia, serif" }}>Mapa Turístico</div>
              <div style={{ fontSize: 12, color: '#7A9A8E' }}>Encantado – RS</div>
            </div>
          </div>
          <div style={{ background: '#F0F4F2', borderRadius: 10, padding: 2, display: 'flex', gap: 0 }}>
            <div
              onClick={() => setMapView('map')}
              style={{ padding: '6px 14px', borderRadius: 8, cursor: 'pointer', background: isMap ? 'white' : 'transparent', boxShadow: isMap ? '0 1px 4px rgba(0,0,0,0.1)' : 'none' }}
            >
              <span style={{ fontSize: 12, fontWeight: 800, color: isMap ? '#1A2421' : '#9BA8A0' }}>Mapa</span>
            </div>
            <div
              onClick={() => setMapView('list')}
              style={{ padding: '6px 14px', borderRadius: 8, cursor: 'pointer', background: !isMap ? 'white' : 'transparent', boxShadow: !isMap ? '0 1px 4px rgba(0,0,0,0.1)' : 'none' }}
            >
              <span style={{ fontSize: 12, fontWeight: 800, color: !isMap ? '#1A2421' : '#9BA8A0' }}>Lista</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', margin: '0 -16px', padding: '0 16px' }}>
          {CHIPS.map((chip) => (
            <div
              key={chip}
              onClick={() => setActiveCategory(chip)}
              style={{ background: activeCategory === chip ? '#2A7A50' : '#F0F4F2', borderRadius: 20, padding: '6px 14px', whiteSpace: 'nowrap', flexShrink: 0, cursor: 'pointer' }}
            >
              <span style={{ fontSize: 12, fontWeight: activeCategory === chip ? 700 : 600, color: activeCategory === chip ? 'white' : '#5A7A70' }}>{chip}</span>
            </div>
          ))}
        </div>
      </div>

      {isMap ? (
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#E8F0E4' }}>
          <iframe
            title="Mapa de Encantado, RS"
            src={MAP_EMBED_SRC}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            {filtered.map((place) => {
              const pos = MAP_POSITIONS[place.id];
              if (!pos) return null;
              const visited = visitedIds.includes(place.id);
              const color = CATEGORY_COLORS[place.category] ?? '#2A7A50';
              return (
                <div
                  key={place.id}
                  onClick={() => openPlace(place.id)}
                  style={{
                    position: 'absolute',
                    top: pos.top,
                    left: pos.left,
                    transform: 'translate(-50%,-100%)',
                    background: color,
                    color: 'white',
                    borderRadius: 16,
                    padding: '6px 12px',
                    fontSize: 11,
                    fontWeight: 800,
                    whiteSpace: 'nowrap',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
                    cursor: 'pointer',
                    pointerEvents: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  {visited && '✓ '}{place.shortName}
                  <div style={{ position: 'absolute', bottom: -5, left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: `5px solid ${color}` }} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div style={{ flex: 1, overflowY: 'auto', padding: '14px 16px 90px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {filtered.map((place) => {
              const visited = visitedIds.includes(place.id);
              return (
                <div
                  key={place.id}
                  onClick={() => openPlace(place.id)}
                  style={{ background: 'white', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                >
                  <div style={{ position: 'relative', width: 90, height: 80, flexShrink: 0 }}>
                    <PhotoImg src={place.image} alt={place.name} style={{ position: 'absolute', inset: 0 }} />
                    {visited && (
                      <div style={{ position: 'absolute', top: 6, left: 6, width: 20, height: 20, borderRadius: 10, background: '#2A7A50', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="9" height="7" viewBox="0 0 10 8"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                      </div>
                    )}
                  </div>
                  <div style={{ flex: 1, padding: '12px 14px', minWidth: 0 }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: '#1A2421', lineHeight: 1.2 }}>{place.shortName}</div>
                    <div style={{ fontSize: 12, color: '#7A9A8E', margin: '3px 0' }}>{place.category}</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <StarRow rating={place.rating} />
                      {!visited && (
                        <span style={{ background: '#E8F5EE', color: '#2A7A50', borderRadius: 8, padding: '3px 8px', fontSize: 11, fontWeight: 800 }}>+{place.points} pts</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
