import { useAppState } from '../state/AppState';
import { getPlace } from '../data/places';
import { C, FONT_HEAD } from '../theme';
import { ArrowLeft, CheckCircle, ChevronRight, Clock, Heart, Help, MapPin, Navigation, Share } from '../components/Icons';
import { Stars } from '../components/ui';

function RoundButton({ children, onClick, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: 'none',
        background: 'rgba(245,255,246,0.94)',
        color: '#1A1F16',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}

const CHECKER =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Crect width='4' height='4' fill='%23E9E9E9'/%3E%3Crect x='4' y='4' width='4' height='4' fill='%23E9E9E9'/%3E%3C/svg%3E\")";

export default function DetalheScreen() {
  const { detailId, closePlace, visitedIds, favoriteIds, toggleFavorite, markVisited, setShowDuvidas, setGuiaView, setTab } = useAppState();
  const place = getPlace(detailId);
  if (!place) return null;

  const visited = visitedIds.includes(place.id);
  const favorite = favoriteIds.includes(place.id);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.address)}`;

  const share = () => {
    if (navigator.share) navigator.share({ title: place.name, text: place.description }).catch(() => {});
  };

  return (
    <div className="screen" style={{ background: C.bg, zIndex: 60 }}>
      {/* Hero */}
      <div style={{ position: 'relative', height: 360, background: C.greenTint }}>
        {place.image && <img src={place.image} alt="" style={{ width: '100%', height: 360, objectFit: 'cover', display: 'block' }} />}
        <div style={{ position: 'absolute', top: 48, left: 16 }}>
          <RoundButton label="Voltar" onClick={closePlace}>
            <ArrowLeft size={21} stroke={2} />
          </RoundButton>
        </div>
        <div style={{ position: 'absolute', top: 48, right: 16, display: 'flex', gap: 8 }}>
          <RoundButton label="Dúvidas" onClick={() => setShowDuvidas(true)}>
            <Help size={21} stroke={1.9} />
          </RoundButton>
          <RoundButton label="Favoritar" onClick={() => toggleFavorite(place.id)}>
            <span style={{ color: favorite ? C.coral : 'inherit' }}>
              <Heart size={20} stroke={1.9} filled={favorite} />
            </span>
          </RoundButton>
          <RoundButton label="Compartilhar" onClick={share}>
            <Share size={19} stroke={1.9} />
          </RoundButton>
        </div>

        <div style={{ position: 'absolute', left: 16, top: 224.5 }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: 22.5,
              padding: '0 10px',
              borderRadius: 12,
              background: 'rgba(255,255,255,0.9)',
              color: C.green,
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            {place.category}
          </span>
        </div>
        <h1
          style={{
            position: 'absolute',
            left: 16,
            top: 254,
            width: 270,
            margin: 0,
            fontFamily: FONT_HEAD,
            fontWeight: 400,
            fontSize: 23.3,
            lineHeight: '25px',
            color: '#FFFFFF',
            textShadow: '0 1px 8px rgba(0,0,0,0.25)',
          }}
        >
          {place.detailTitle ?? place.name}
        </h1>
        <span
          style={{
            position: 'absolute',
            right: 16,
            top: 314,
            height: 30,
            padding: '0 11px 0 10px',
            borderRadius: 15,
            border: visited ? 'none' : '1px solid rgba(255,255,255,0.75)',
            background: visited ? C.green : 'rgba(40,42,36,0.45)',
            color: '#FFFFFF',
            fontSize: 13,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          {visited ? <CheckCircle size={13} stroke={2} /> : <MapPin size={13} stroke={2} />}
          {visited ? 'Visitado' : 'Não visitado'}
        </span>
      </div>

      <div style={{ padding: '16px 16px 0' }}>
        {/* Tour guiado */}
        <div
          onClick={() => {
            setGuiaView('mapa');
            setTab('guia');
          }}
          style={{
            height: 83,
            borderRadius: 18,
            border: `1px solid ${C.line}`,
            background: C.surface,
            display: 'flex',
            alignItems: 'center',
            padding: '0 14px 0 15px',
            gap: 12,
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: `1.5px solid ${C.coral}`,
              backgroundColor: '#F4F4F4',
              backgroundImage: CHECKER,
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14.5, fontWeight: 600, color: C.ink, lineHeight: '20px' }}>Tour guiado do percurso</div>
            <div style={{ fontSize: 13, color: C.muted, lineHeight: '16px', marginTop: 3 }}>Um guia passo a passo te acompanha pelos pontos deste local</div>
          </div>
          <ChevronRight size={16} color="#B8C1AE" stroke={2} />
        </div>

        {/* Rating / distance / hours */}
        <div style={{ display: 'flex', alignItems: 'center', height: 31, marginTop: 16 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <Stars rating={place.rating} size={12} gap={1} />
            <span style={{ fontSize: 12.5, fontWeight: 700, color: C.ink, lineHeight: '15px' }}>{place.rating.toFixed(1)}</span>
          </div>
          <span style={{ width: 1, height: 31, background: C.line }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, color: C.green }}>
            <Navigation size={14} stroke={1.8} />
            <span style={{ fontSize: 13, color: C.muted, lineHeight: '15px' }}>{place.distance}</span>
          </div>
          <span style={{ width: 1, height: 31, background: C.line }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, color: C.green }}>
            <Clock size={14} stroke={1.8} />
            <span style={{ fontSize: 11, color: C.muted, lineHeight: '15px' }}>{place.hours}</span>
          </div>
        </div>
      </div>

      <div style={{ height: 1, background: C.line, marginTop: 17 }} />

      <div style={{ padding: '16px 16px 0' }}>
        <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
          {place.tags.map((tag) => (
            <span
              key={tag}
              style={{ height: 23.5, padding: '0 12px', borderRadius: 12, background: C.greenSoft, color: C.green, fontSize: 13.3, fontWeight: 500, display: 'flex', alignItems: 'center' }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 style={{ margin: '14px 0 0', fontFamily: FONT_HEAD, fontWeight: 400, fontSize: 16.5, lineHeight: '22px', color: C.ink }}>Sobre o local</h2>
        <p style={{ margin: '8px 0 0', fontSize: 14.8, lineHeight: '22.7px', color: '#52554F' }}>{place.description}</p>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            marginTop: 20,
            height: 45,
            borderRadius: 16,
            border: `1px solid ${C.line}`,
            background: C.greenSoft,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '0 16px',
            color: '#595E55',
            fontSize: 12.6,
            textDecoration: 'none',
          }}
        >
          <span style={{ color: C.green }}>
            <MapPin size={14} stroke={2} />
          </span>
          {place.address}
        </a>
      </div>

      {/* Visit call-to-action on a white band */}
      <div style={{ background: C.surface, padding: '20px 16px 20px', marginTop: 0 }}>
        <button
          type="button"
          disabled={visited}
          onClick={() => markVisited(place.id)}
          style={{
            width: '100%',
            height: 52,
            borderRadius: 20,
            border: 'none',
            background: visited ? C.greenSoft : C.coral,
            color: visited ? C.green : '#FFFFFF',
            fontSize: 15.5,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            cursor: visited ? 'default' : 'pointer',
            boxShadow: visited ? 'none' : '0 8px 18px rgba(0,0,0,0.18)',
          }}
        >
          <CheckCircle size={18} stroke={2} />
          {visited ? 'Você já visitou este local' : 'Marcar como visitado'}
        </button>
        <div style={{ textAlign: 'center', fontSize: 12.7, color: C.muted, marginTop: 10 }}>
          {visited ? '+10 pts adicionados ao seu passaporte' : 'Escaneie o QR Code no local ou confirme manualmente'}
        </div>
      </div>

      {place.reviews.length > 0 && (
        <div style={{ padding: '17px 16px 40px' }}>
          <h2 style={{ margin: 0, fontFamily: FONT_HEAD, fontWeight: 400, fontSize: 16.3, lineHeight: '22px', color: C.ink }}>Avaliações</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 13 }}>
            {place.reviews.map((r) => (
              <div key={r.name} style={{ border: `1px solid ${C.line}`, borderRadius: 18, padding: '15px 17px 17px', background: C.bg }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 14.7, fontWeight: 600, color: C.ink, lineHeight: '20px' }}>{r.name}</span>
                  <Stars rating={r.rating} size={11} gap={1} />
                </div>
                <div style={{ fontSize: 10.7, color: C.muted, marginTop: 2 }}>{r.date}</div>
                <div style={{ fontSize: 13, lineHeight: '19.5px', color: '#5C6059', marginTop: 9 }}>{r.text}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
