import { useAppState } from '../state/AppState';
import { FairyHeader, FairyMini } from '../components/Fairy';

const FAQS = [
  {
    q: 'Onde fica o Cristo Redentor de Encantado?',
    a: 'O Cristo Protetor fica no Morro do Cristo, a 2,1 km do centro. Para chegar, siga pela Rua Getúlio Vargas e depois suba a estrada do morro. Vale muito a pena — a vista de lá é incrível! ✨',
  },
  {
    q: 'Como funciona o Passaporte Encantado?',
    a: 'É simples! Visite os locais turísticos de Encantado, escaneie o QR Code de cada lugar e acumule pontos. Com pontos, você ganha descontos e ingressos gratuitos. Já visitou 2 locais — continue explorando! 🌟',
  },
  {
    q: 'O que é o Jardim dos Sentidos?',
    a: 'O Jardim dos Sentidos é uma floricultura sensorial única em Encantado! Um espaço pensado para estimular todos os sentidos — aromas de flores, texturas de plantas, cores vibrantes. Ideal para todas as idades, inclusive pessoas com mobilidade reduzida. 🌸',
  },
  {
    q: 'Quais os horários das atrações?',
    a: 'Jardim dos Sentidos: seg–sáb 8h–18h, dom 9h–17h. Cristo Protetor: aberto todos os dias, 7h–20h. Museu Municipal: ter–sáb 9h–17h. Para mais detalhes, clique em cada local no mapa! 🕐',
  },
];

export default function DuvidasScreen() {
  const { chatQ, chatA, askQuestion } = useAppState();

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#F8FAF9', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ background: 'white', padding: '62px 18px 14px', borderBottom: '1px solid #EEF4F0', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 40,
              height: 40,
              background: 'linear-gradient(135deg,#2A7A50,#1A5A38)',
              borderRadius: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'floatFairy 3s ease-in-out infinite',
            }}
          >
            <FairyHeader />
          </div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 900, color: '#1A2421' }}>Central de Dúvidas</div>
            <div style={{ fontSize: 12, color: '#7A9A8E', marginTop: 1 }}>Fada Encantado está aqui para ajudar</div>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 13, color: '#7A9A8E', fontWeight: 700, marginBottom: 10 }}>Perguntas frequentes</div>
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
                  <path d="M6 3l6 6-6 6" stroke="#C8D8D0" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {chatQ && (
          <div style={{ animation: 'slideUp 0.35s ease both' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
              <div style={{ background: '#2A7A50', borderRadius: '16px 16px 4px 16px', padding: '12px 16px', maxWidth: '75%' }}>
                <div style={{ fontSize: 14, color: 'white', fontWeight: 600, lineHeight: 1.45 }}>{chatQ}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  background: 'linear-gradient(135deg,#2A7A50,#1A5A38)',
                  borderRadius: 17,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 4,
                }}
              >
                <FairyMini />
              </div>
              <div style={{ background: 'white', borderRadius: '4px 16px 16px 16px', padding: '12px 14px', maxWidth: '78%', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
                <div style={{ fontSize: 14, color: '#1A2421', lineHeight: 1.5, fontWeight: 600 }}>{chatA}</div>
              </div>
            </div>
          </div>
        )}

        <div style={{ marginTop: 8 }}>
          <div style={{ background: 'linear-gradient(135deg,#2A7A50,#E8834A)', borderRadius: 14, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
            <div style={{ width: 32, height: 32, background: 'rgba(255,255,255,0.2)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>
              🧚
            </div>
            <span style={{ fontSize: 15, fontWeight: 800, color: 'white' }}>Falar com a Fada Encantado</span>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div style={{ background: 'white', borderTop: '1px solid #EEF4F0', padding: '12px 16px 30px', flexShrink: 0, display: 'flex', gap: 10, alignItems: 'center' }}>
        <div style={{ flex: 1, background: '#F0F4F2', borderRadius: 22, padding: '10px 16px' }}>
          <span style={{ fontSize: 14, color: '#9BA8A0' }}>Como posso te ajudar hoje?</span>
        </div>
        <div style={{ width: 40, height: 40, background: '#2A7A50', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
