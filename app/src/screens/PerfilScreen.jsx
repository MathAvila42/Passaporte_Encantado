import { useAppState } from '../state/AppState';
import { PLACES } from '../data/places';
import { BADGES } from '../data/badges';
import { C, FONT_HEAD } from '../theme';
import { ArrowLeft, Check, MapPin, Settings, Zap } from '../components/Icons';
import { Distance, PlaceRow, PointsPill } from '../components/ui';

function Heading({ title, subtitle, top }) {
  return (
    <div style={{ marginTop: top }}>
      <h2 style={{ margin: 0, fontFamily: FONT_HEAD, fontWeight: 400, fontSize: 21, lineHeight: '26px', color: C.ink }}>{title}</h2>
      <div style={{ fontSize: 12.6, color: C.muted, marginTop: 1 }}>{subtitle}</div>
    </div>
  );
}

function BadgeCard({ badge, unlocked }) {
  return (
    <div
      style={{
        position: 'relative',
        height: 131,
        borderRadius: 18,
        border: `1px solid ${C.line}`,
        background: unlocked ? C.surface : C.greenSoft,
        textAlign: 'center',
        padding: '15.5px 6px 0',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: 10,
          right: 11,
          width: 18,
          height: 18,
          borderRadius: '50%',
          background: unlocked ? C.green : C.line,
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 9,
        }}
      >
        {unlocked ? <Check size={11} stroke={2.8} /> : '🔒'}
      </span>
      <div style={{ fontSize: 21, lineHeight: '27px', opacity: unlocked ? 1 : 0.55 }}>{badge.emoji}</div>
      <div style={{ fontSize: 12.8, fontWeight: 600, lineHeight: '15.5px', color: unlocked ? C.ink : '#8A9A7E', marginTop: 5 }}>{badge.label}</div>
      <div style={{ fontSize: 10.8, lineHeight: '13px', color: C.muted, marginTop: 4 }}>{badge.desc}</div>
    </div>
  );
}

export default function PerfilScreen() {
  const { setTab, points, visitedIds, reviewedWhen, levelInfo, openPlace } = useAppState();
  const { current, next } = levelInfo;
  const visited = PLACES.filter((p) => visitedIds.includes(p.id));
  const upcoming = PLACES.filter((p) => !visitedIds.includes(p.id)).slice(0, 3);
  const unlockedBadges = BADGES.filter((b) => b.unlocked({ visitedIds, points }));
  const goal = next?.min ?? points;
  const progress = goal ? Math.min(1, points / goal) : 1;

  return (
    <div className="screen" style={{ background: C.bg }}>
      {/* Header */}
      <div style={{ height: 96.5, borderBottom: `1px solid ${C.line}`, display: 'flex', alignItems: 'flex-start', padding: '51px 24px 0 22px' }}>
        <button type="button" onClick={() => setTab('inicio')} style={{ border: 'none', background: 'none', padding: 0, marginTop: 1, color: C.inkSoft, cursor: 'pointer' }}>
          <ArrowLeft size={24} stroke={1.8} />
        </button>
        <div style={{ flex: 1, marginLeft: 19, fontFamily: FONT_HEAD, fontSize: 20, lineHeight: '26px', color: C.ink }}>Meu Perfil</div>
        <span style={{ color: C.inkSoft, marginTop: 1 }}>
          <Settings size={22} stroke={1.7} />
        </span>
      </div>

      <div style={{ padding: '17px 16px 150px' }}>
        {/* Profile card */}
        <div style={{ borderRadius: 24, border: `1px solid ${C.line}`, background: C.greenSoft, padding: '31px 20px 0', minHeight: 211 }}>
          <div style={{ display: 'flex', gap: 18 }}>
            <div
              style={{
                width: 63,
                height: 63,
                borderRadius: 14,
                background: C.green,
                border: '2.5px solid #FFFFFF',
                boxShadow: '0 2px 6px rgba(26,31,22,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 31,
                flexShrink: 0,
              }}
            >
              🧭
            </div>
            <div style={{ marginTop: -10 }}>
              <div style={{ fontFamily: FONT_HEAD, fontSize: 29.5, lineHeight: '34px', color: C.greenDark }}>Viajante</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12.6, color: C.muted, marginTop: 2 }}>
                <MapPin size={12} stroke={2} /> Encantado – RS
              </div>
              <span
                style={{
                  marginTop: 6,
                  height: 24,
                  padding: '0 10px 0 11px',
                  borderRadius: 12,
                  background: C.green,
                  color: '#FFFFFF',
                  fontSize: 12.6,
                  fontWeight: 500,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                }}
              >
                <Zap size={12} stroke={2} /> {current.label}
              </span>
            </div>
          </div>
          <div style={{ height: 1, background: C.line, margin: '15px 1px 0' }} />
          <div style={{ display: 'flex', padding: '18px 0 20px' }}>
            {[
              [points, 'Pontos'],
              [visitedIds.length, 'Visitados'],
              [unlockedBadges.length, 'Badges'],
            ].map(([value, label]) => (
              <div key={label} style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ fontFamily: FONT_HEAD, fontSize: 26.7, lineHeight: '30px', color: C.green }}>{value}</div>
                <div style={{ fontSize: 13, color: C.muted }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Conquistas */}
        <Heading title="Conquistas" subtitle="Explore e ganhe pontos em Encantado" top={25} />
        <div style={{ marginTop: 14, borderRadius: 18, border: `1px solid ${C.line}`, background: C.greenSoft, padding: '16px 16px 16px 17px' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ width: 133 }}>
              <div style={{ fontSize: 12.6, fontWeight: 600, color: C.ink, lineHeight: '17px' }}>Seus pontos</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 1 }}>
                <span style={{ fontFamily: FONT_HEAD, fontSize: 32.7, lineHeight: '36px', color: C.ink }}>{points}</span>
                <span style={{ fontSize: 13, color: C.muted }}>pts</span>
              </div>
              <div style={{ fontSize: 12.6, fontWeight: 600, color: C.green, marginTop: 0 }}>{current.label}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12.7, fontWeight: 500, color: C.greenDark, lineHeight: '17px' }}>{visitedIds.length} locais visitados</div>
              <div style={{ fontSize: 11.6, color: C.muted, marginTop: 5 }}>{next ? `Progresso para ${next.label}` : 'Nível máximo alcançado'}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 5 }}>
                <div style={{ flex: 1, height: 8, borderRadius: 4, background: C.line, overflow: 'hidden' }}>
                  <div style={{ width: `${progress * 100}%`, height: '100%', borderRadius: 4, background: C.green }} />
                </div>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: C.greenDark }}>
                  {points}/{goal}
                </span>
              </div>
            </div>
          </div>
          <div style={{ fontSize: 11.5, color: C.muted, marginTop: 12 }}>Ganhe +10 pts por visita confirmada e review de local turístico</div>
        </div>

        {/* Badges */}
        <Heading title="Badges" subtitle={`${unlockedBadges.length}/${BADGES.length} conquistados`} top={28} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '11px 12px', marginTop: 12 }}>
          {BADGES.map((badge) => (
            <BadgeCard key={badge.id} badge={badge} unlocked={unlockedBadges.includes(badge)} />
          ))}
        </div>

        {/* Já visitados */}
        <Heading title="Já visitados" subtitle={`${visited.length} locais`} top={27} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 16 }}>
          {visited.map((place) => (
            <PlaceRow
              key={place.id}
              place={place}
              visited
              onClick={() => openPlace(place.id)}
              footer={<span style={{ fontSize: 13, color: C.muted }}>Review feito {reviewedWhen[place.id] ?? 'recentemente'}</span>}
              right={<PointsPill points={place.points} tone="earned" />}
            />
          ))}
        </div>

        {/* Próximas visitas */}
        <Heading title="Próximas visitas" subtitle="+10 pts cada" top={28} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 16 }}>
          {upcoming.map((place) => (
            <PlaceRow
              key={place.id}
              place={place}
              onClick={() => openPlace(place.id)}
              footer={<Distance value={place.distance} />}
              right={<PointsPill points={place.points} />}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
