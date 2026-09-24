import { useState } from 'react';
import { useAppState } from '../state/AppState';
import { C, FONT_HEAD } from '../theme';
import { ArrowLeft, ArrowRight, Compass } from '../components/Icons';

const FAQS = [
  {
    q: 'Onde fica o Cristo Redentor de Encantado?',
    a: 'O Cristo Redentor fica no topo do Morro do Cristo, a 2,3 km do centro. A vista panorâmica da cidade e da região serrana vale muito a subida!',
  },
  {
    q: 'Como funciona o Passaporte Encantado?',
    a: 'Visite os locais turísticos de Encantado, escaneie o QR Code de cada lugar (ou confirme manualmente) e ganhe +10 pts por visita. Com os pontos você sobe de nível e desbloqueia badges.',
  },
  {
    q: 'O que é o Jardim Encantado?',
    a: 'Um jardim sensorial com lagos, pontes de madeira e trilhas entre pedras e vegetação nativa — um espaço pensado para estimular todos os sentidos.',
  },
  {
    q: 'Quais os horários de funcionamento dos atrativos?',
    a: 'Cristo Redentor: livre, 24h. Museu Municipal: ter–sáb, 9h–17h. Vinícola Veja Lusa: qui–dom, 10h–18h. Feira Colonial: sábados de manhã.',
  },
  {
    q: 'Onde comer bem em Encantado?',
    a: 'A Cantina Borghetti é parada obrigatória, com massas artesanais e vinhos da região. A Vinícola Veja Lusa oferece degustação guiada entre os parreirais.',
  },
];

export default function DuvidasScreen() {
  const { setShowDuvidas } = useAppState();
  const [open, setOpen] = useState(0);

  return (
    <div className="screen" style={{ background: C.bg, zIndex: 70 }}>
      <div style={{ height: 101, borderBottom: `1px solid ${C.line}`, display: 'flex', alignItems: 'flex-start', padding: '44px 16px 0 22px' }}>
        <button type="button" onClick={() => setShowDuvidas(false)} style={{ border: 'none', background: 'none', padding: 0, marginTop: 13, color: C.inkSoft, cursor: 'pointer' }}>
          <ArrowLeft size={24} stroke={1.8} />
        </button>
        <div style={{ marginLeft: 19 }}>
          <div style={{ fontFamily: FONT_HEAD, fontSize: 21, lineHeight: '26px', color: C.ink }}>Central de Dúvidas</div>
          <div style={{ fontSize: 12.5, color: C.muted, marginTop: 1 }}>Passaporte Encantado · Encantado – RS</div>
        </div>
      </div>

      <div style={{ padding: '20px 16px 60px' }}>
        <div style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: 1.6, color: C.muted, textTransform: 'uppercase' }}>Perguntas frequentes</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
          {FAQS.map((faq, i) => {
            const expanded = open === i;
            return (
              <div
                key={faq.q}
                onClick={() => setOpen(expanded ? -1 : i)}
                style={{ borderRadius: 18, border: `1px solid ${C.line}`, background: C.surface, padding: '14px 16px', cursor: 'pointer' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ flex: 1, fontSize: 15, fontWeight: 500, color: C.ink }}>{faq.q}</span>
                  <span style={{ color: C.muted, transform: expanded ? 'rotate(90deg)' : 'none', transition: 'transform .15s' }}>
                    <ArrowRight size={15} stroke={2} />
                  </span>
                </div>
                {expanded && (
                  <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
                    <span style={{ width: 28, height: 28, borderRadius: '50%', background: C.green, color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Compass size={15} stroke={1.8} />
                    </span>
                    <div style={{ flex: 1, background: C.greenSoft, borderRadius: '4px 14px 14px 14px', padding: '10px 12px', fontSize: 14, lineHeight: '20px', color: C.inkSoft }}>{faq.a}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
