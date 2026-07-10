import { useMemo } from 'react';
import { useAppState } from '../state/AppState';
import { PLACES, CATEGORY_COLORS } from '../data/places';
import { RatingPill, StarRow } from '../components/StarRating';
import PhotoImg from '../components/PhotoImg';

const CHIPS = ['Todos', 'Mirante', 'Natureza', 'Gastronomia', 'Cultura', 'Histórico'];
const TOTAL_TO_UNLOCK = 3;

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Bom dia';
  if (h < 18) return 'Boa tarde';
  return 'Boa noite';
}

function CategoryTag({ category }) {
  return (
    <span
      style={{
        background: 'rgba(255,255,255,0.92)',
        color: CATEGORY_COLORS[category] ?? '#2A7A50',
        borderRadius: 8,
        padding: '4px 10px',
        fontSize: 11,
        fontWeight: 800,
      }}
    >
      {category}
    </span>
  );
}

export default function GuiaScreen() {
  const { openPlace, openMapa, visitedIds, favoriteIds, toggleFavorite, search, setSearch, activeCategory, setActiveCategory } = useAppState();

  const browsable = PLACES.filter((p) => !p.locked);
  const featured = [browsable.find((p) => p.id === 'cristo-redentor'), browsable.find((p) => p.id === 'vinicola-veja-lusa')].filter(Boolean);

  const nearby = useMemo(() => {
    return browsable
      .filter((p) => !featured.some((f) => f.id === p.id))
      .filter((p) => activeCategory === 'Todos' || p.category === activeCategory)
      .filter((p) => p.name.toLowerCase().includes(search.trim().toLowerCase()))
      .slice(0, 5);
  }, [search, activeCategory]); // eslint-disable-line react-hooks/exhaustive-deps

  const visitedCount = visitedIds.length;
  const unlocked = visitedCount >= TOTAL_TO_UNLOCK;

  return (
    <div style={{ position: 'absolute', inset: 0, overflowY: 'auto', background: '#fff' }}>
      {/* Header photo */}
      <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
        <PhotoImg src={PLACES.find((p) => p.id === 'vinicola-veja-lusa').image} style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(20,50,30,0.35),rgba(15,35,22,0.65))', backdropFilter: 'blur(1px)' }} />
        <div style={{ position: 'relative', padding: '52px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.85)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
            </svg>
            <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' }}>Guia Local</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div onClick={openMapa} style={{ width: 34, height: 34, borderRadius: 17, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 4L3 7.5V19l6-3 6 3 6-3V4.5l-6 3-6-3z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{ position: 'relative', padding: '46px 20px 20px' }}>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>{greeting()}, Viajante</div>
          <div style={{ fontSize: 28, fontWeight: 800, color: 'white', fontFamily: "'Playfair Display', Georgia, serif" }}>Passaporte Encantado</div>
        </div>
      </div>

      <div style={{ padding: '16px 16px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" stroke="#7A9A8E" strokeWidth="1.8" />
            <circle cx="12" cy="10" r="2.4" stroke="#7A9A8E" strokeWidth="1.8" />
          </svg>
          <span style={{ fontSize: 13, color: '#7A9A8E', fontWeight: 700 }}>Encantado · RS</span>
          <span style={{ fontSize: 13, color: '#7A9A8E' }}>·</span>
          <span style={{ fontSize: 13, color: '#7A9A8E', fontWeight: 700 }}>22°C ☁️</span>
        </div>

        {/* Prize banner */}
        <div style={{ background: '#F0F6F2', borderRadius: 16, padding: '14px 16px', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#1A2421' }}>
                {unlocked ? '🎉 Prêmio desbloqueado!' : '🔒 Continue explorando'}
              </div>
              <div style={{ fontSize: 12, color: '#5A7A70', marginTop: 2 }}>
                {unlocked ? 'Ingresso para o Jardim Encantado liberado!' : `Visite mais ${TOTAL_TO_UNLOCK - visitedCount} local(is) para desbloquear`}
              </div>
            </div>
            <div style={{ width: 36, height: 36, borderRadius: 18, background: '#2A7A50', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3 9a2 2 0 100 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 100-4V6a2 2 0 00-2-2H5a2 2 0 00-2 2z" stroke="white" strokeWidth="1.8" />
              </svg>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
            {Array.from({ length: TOTAL_TO_UNLOCK }, (_, i) => (
              <div key={i} style={{ flex: 1, height: 6, borderRadius: 3, background: i < visitedCount ? '#2A7A50' : '#DCE8E0' }} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12, color: '#5A7A70', fontWeight: 700 }}>{visitedCount} de {TOTAL_TO_UNLOCK} locais visitados</span>
            {unlocked && (
              <span onClick={() => openPlace('jardim-encantado')} style={{ fontSize: 12, color: '#2A7A50', fontWeight: 800, cursor: 'pointer' }}>Ver ingresso →</span>
            )}
          </div>
        </div>

        {/* Search */}
        <div style={{ background: '#F5F5F5', borderRadius: 14, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="10" cy="10" r="7" stroke="#9BA8A0" strokeWidth="2" />
            <path d="M15.5 15.5L21 21" stroke="#9BA8A0" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar lugares, eventos, atrações..."
            style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: 15, color: '#1A2421', fontWeight: 600, width: '100%', fontFamily: 'inherit' }}
          />
        </div>

        {/* Category chips */}
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 14, margin: '0 -16px', paddingLeft: 16, paddingRight: 16 }}>
          {CHIPS.map((chip) => (
            <div
              key={chip}
              onClick={() => setActiveCategory(chip)}
              style={{
                background: activeCategory === chip ? '#2A7A50' : '#F0F4F2',
                borderRadius: 20,
                padding: '7px 16px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: 13, fontWeight: activeCategory === chip ? 700 : 600, color: activeCategory === chip ? 'white' : '#5A7A70' }}>{chip}</span>
            </div>
          ))}
        </div>

        {/* Em destaque */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ fontSize: 19, fontWeight: 800, color: '#1A2421', fontFamily: "'Playfair Display', Georgia, serif" }}>Em Destaque</div>
          <span onClick={openMapa} style={{ fontSize: 13, color: '#2A7A50', fontWeight: 700, cursor: 'pointer' }}>Ver mapa ›</span>
        </div>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', margin: '0 -16px', padding: '0 16px 4px', marginBottom: 20 }}>
          {featured.map((place) => {
            const visited = visitedIds.includes(place.id);
            const fav = favoriteIds.includes(place.id);
            return (
              <div
                key={place.id}
                onClick={() => openPlace(place.id)}
                style={{ minWidth: 220, width: 220, background: 'white', borderRadius: 18, overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.10)', cursor: 'pointer', flexShrink: 0 }}
              >
                <div style={{ position: 'relative', height: 130 }}>
                  <PhotoImg src={place.image} alt={place.name} style={{ position: 'absolute', inset: 0 }} />
                  <div style={{ position: 'absolute', top: 8, left: 8 }}>
                    {visited && (
                      <div style={{ width: 24, height: 24, borderRadius: 12, background: '#2A7A50', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                      </div>
                    )}
                  </div>
                  <div
                    onClick={(e) => { e.stopPropagation(); toggleFavorite(place.id); }}
                    style={{ position: 'absolute', top: 8, right: 8, width: 26, height: 26, borderRadius: 13, background: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill={fav ? '#E8834A' : 'none'}>
                      <path d="M12 21s-7-4.5-9.5-9C.7 8.4 2 4.5 6 4c2.2-.3 4 1 6 3 2-2 3.8-3.3 6-3 4 0.5 5.3 4.4 3.5 8-2.5 4.5-9.5 9-9.5 9z" stroke="#E8834A" strokeWidth="1.6" />
                    </svg>
                  </div>
                  <div style={{ position: 'absolute', bottom: 8, left: 8 }}>
                    <CategoryTag category={place.category} />
                  </div>
                </div>
                <div style={{ padding: '10px 12px' }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#1A2421', lineHeight: 1.25 }}>{place.shortName}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
                    <RatingPill rating={place.rating} />
                    <span style={{ fontSize: 12, color: '#7A9A8E' }}>{place.distance}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Próximo a você */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ fontSize: 19, fontWeight: 800, color: '#1A2421', fontFamily: "'Playfair Display', Georgia, serif" }}>Próximo a você</div>
          <span onClick={openMapa} style={{ fontSize: 13, color: '#2A7A50', fontWeight: 700, cursor: 'pointer' }}>Ver mapa ›</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
          {nearby.map((place) => (
            <div
              key={place.id}
              onClick={() => openPlace(place.id)}
              style={{ background: 'white', border: '1px solid #EEF4F0', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
            >
              <PhotoImg src={place.image} alt={place.name} style={{ width: 52, height: 52, borderRadius: 12, flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#1A2421' }}>{place.shortName}</div>
                <div style={{ fontSize: 12, color: '#7A9A8E', marginTop: 2 }}>{place.category}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
                  <StarRow rating={place.rating} />
                  <span style={{ fontSize: 12, color: '#7A9A8E' }}>· {place.distance}</span>
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M6 3l6 6-6 6" stroke="#C8D8D0" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          ))}
          {nearby.length === 0 && (
            <div style={{ fontSize: 13, color: '#9BA8A0', textAlign: 'center', padding: '20px 0' }}>Nenhum local encontrado.</div>
          )}
        </div>

        <div style={{ height: 90 }} />
      </div>
    </div>
  );
}
