import { useState } from 'react';

// Real photo with a graceful gradient fallback if the remote image fails to load.
export default function PhotoImg({ src, alt = '', style, fallbackFrom = '#8AAA90', fallbackTo = '#2D6A40' }) {
  const [failed, setFailed] = useState(false);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...style }}>
      {!failed && src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <div style={{ width: '100%', height: '100%', background: `linear-gradient(135deg, ${fallbackFrom}, ${fallbackTo})` }} />
      )}
    </div>
  );
}
