import { FairyGlow } from './Fairy';

export default function FairyFab() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 92,
        right: 14,
        zIndex: 55,
        animation: 'floatFairy 3.2s ease-in-out infinite',
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          background: 'linear-gradient(145deg,#2A7A50,#1A5A38)',
          borderRadius: 26,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(42,122,80,0.45), 0 2px 5px rgba(0,0,0,0.15)',
        }}
      >
        <FairyGlow />
      </div>
    </div>
  );
}
