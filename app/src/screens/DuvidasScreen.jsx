import { useAppState } from '../state/AppState';

const FAQS = [
  {
    q: 'Onde fica o Cristo Redentor de Encantado?',
    a: 'O Cristo Redentor fica no Morro do Cristo, a 2,3 km do centro. Para chegar, siga pela Rua Getúlio Vargas e depois suba a estrada do morro. Vale muito a pena — a vista de lá é incrível! ✨',
  },
  {
    q: 'Como funciona o Passaporte Encantado?',
    a: 'É simples! Visite os locais turísticos de Encantado, escaneie o QR Code de cada lugar e acumule pontos. Com pontos, você ganha descontos e ingressos gratuitos. Visite 3 locais e desbloqueie o Jardim Encantado! 🌟',
  },
  {
    q: 'O que é o Jardim Encantado?',
    a: 'O Jardim Encantado é um jardim sensorial exclusivo, liberado como recompensa ao completar o Passaporte Encantado! Um espaço pensado para estimular todos os sentidos — aromas de flores, texturas de plantas, cores vibrantes. 🌸',
  },
  {
    q: 'Quais os horários de funcionamento dos atrativos?',
    a: 'Cristo Redentor: livre, 24h. Museu Municipal: ter–sáb, 9h–17h. Vinícola Veja Lusa: qui–dom, 10h–18h. Feira Colonial: sábados de manhã. Para mais detalhes, veja cada local no mapa! 🕐',
  },
  {
    q: 'Onde comer bem em Encantado?',
    a: 'A Cantina Borghetti é uma parada obrigatória, com massas artesanais e vinhos da região. Já a Vinícola Veja Lusa oferece degustação guiada entre os parreirais. 🍝',
  },
];

const QUICK_REPLIES = [
  { q: 'Como chegar ao Cristo Redentor?', a: FAQS[0].a },
  { q: 'Onde fica o Jardim Encantado?', a: FAQS[2].a },
];

function CompassIcon({ width = 20, height = 20 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8" />
      <path d="M15.2 8.8l-2 4.4-4.4 2 2-4.4z" fill="white" fillOpacity="0.9" />
    </svg>
  );
}

export default function DuvidasScreen() {
  const { chatQ, chatA, askQuestion } = useAppState();

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#F8FAF9', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ background: 'white', padding: '52px 18px 14px', borderBottom: '1px solid #EEF4F0', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg,#2A7A50,#1A5A38)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CompassIcon />
          </div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 800, color: '#1A2421', fontFamily: "'Playfair Display', Georgia, serif" }}>Central de Dúvidas</div>
            <div style={{ fontSize: 12, color: '#7A9A8E', marginTop: 1 }}>Passaporte Encantado · Encantado – RS</div>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 12, color: '#9BA8A0', fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>Perguntas frequentes</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                onClick={() => askQuestion(faq.q, faq.a)}
                style={{
                  background: 'white',
                  border: '1.5px solid #E0EDE6',
                  borderRadius: 12,
                  padding: '12px 14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 600, color: '#1A2421' }}>{faq.q}</span>
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M4 7l5 5 5-5" stroke="#C8D8D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {chatQ && (
          <div style={{ animation: 'slideUp 0.35s ease both' }}>
            <div style={{ fontSize: 12, color: '#9BA8A0', fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', margin: '4px 0 10px', textAlign: 'center' }}>
              OU PERGUNTE DIRETAMENTE
            </div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
              <div style={{ width: 30, height: 30, background: 'linear-gradient(135deg,#2A7A50,#1A5A38)', borderRadius: 15, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 4 }}>
                <CompassIcon width={14} height={14} />
              </div>
              <div style={{ background: 'white', borderRadius: '4px 16px 16px 16px', padding: '12px 14px', maxWidth: '78%', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
                <div style={{ fontSize: 14, color: '#1A2421', lineHeight: 1.5, fontWeight: 600 }}>{chatA}</div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
              <div style={{ background: '#2A7A50', borderRadius: '16px 16px 4px 16px', padding: '12px 16px', maxWidth: '75%' }}>
                <div style={{ fontSize: 14, color: 'white', fontWeight: 600, lineHeight: 1.45 }}>{chatQ}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick replies + input bar */}
      <div style={{ background: 'white', borderTop: '1px solid #EEF4F0', flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '10px 16px 0' }}>
          {QUICK_REPLIES.map((item) => (
            <div
              key={item.q}
              onClick={() => askQuestion(item.q, item.a)}
              style={{ border: '1.5px solid #E0EDE6', borderRadius: 20, padding: '7px 14px', whiteSpace: 'nowrap', flexShrink: 0, cursor: 'pointer' }}
            >
              <span style={{ fontSize: 12.5, fontWeight: 700, color: '#2A7A50' }}>{item.q}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: '10px 16px 30px', display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{ flex: 1, background: '#F0F4F2', borderRadius: 22, padding: '10px 16px' }}>
            <span style={{ fontSize: 14, color: '#9BA8A0' }}>Sua dúvida sobre Encantado...</span>
          </div>
          <div style={{ width: 40, height: 40, background: '#2A7A50', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
