// Design tokens sampled from the "Guia _ Lista 2" prototype.
export const C = {
  bg: '#FAFAFA',
  surface: '#FFFFFF',
  ink: '#1A1F16',
  inkSoft: '#4D5448',
  muted: '#7A8C6E',
  green: '#567040',
  greenDark: '#2E4023',
  line: '#DDE8D2',
  greenSoft: '#F0F4EC',
  greenTint: '#EAF0E1',
  greenCircle: '#CED7C4',
  coral: '#C15C56',
  coralDeep: '#B74E4B',
  coralSoft: '#FBEAE9',
  coralPts: '#D38C88',
  coralPtsBg: '#FCF0EF',
  amber: '#B8863B',
  amberSoft: '#F5EBDA',
  blue: '#4E7A8C',
  blueSoft: '#E3EDF0',
  tabBg: '#F5FFF6',
  tabActive: '#DBE6DA',
  splashFrom: '#3C4A32',
  splashTo: '#2B3723',
  cream: '#F7FBF2',
  scanner: '#0D1A0A',
  scannerCorner: '#4F673A',
};

export const FONT_BODY = "'DM Sans Variable', system-ui, sans-serif";
export const FONT_HEAD = "'PT Sans', 'DM Sans Variable', system-ui, sans-serif";

// Pill colors per category (bg / text) and map-pin color.
export const CATEGORY_STYLE = {
  Mirante: { bg: C.greenSoft, fg: C.green, pin: C.green },
  Natureza: { bg: C.greenSoft, fg: C.green, pin: C.green },
  Gastronomia: { bg: C.coralSoft, fg: C.coral, pin: C.coral },
  Cultura: { bg: C.amberSoft, fg: C.amber, pin: C.amber },
  Histórico: { bg: C.blueSoft, fg: C.blue, pin: C.blue },
};

export function categoryStyle(category) {
  return CATEGORY_STYLE[category] ?? CATEGORY_STYLE.Natureza;
}
