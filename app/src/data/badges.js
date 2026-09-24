import { PLACES } from './places';

const visitedIn = (visitedIds, category) => PLACES.some((p) => p.category === category && visitedIds.includes(p.id));

// Achievement catalogue shown in Perfil → Badges.
export const BADGES = [
  {
    id: 'primeira-vista',
    label: 'Primeira Vista',
    desc: 'Visitou o Cristo Redentor',
    emoji: '🌄',
    unlocked: ({ visitedIds }) => visitedIds.includes('cristo-redentor'),
  },
  {
    id: 'gastronauta',
    label: 'Gastronauta',
    desc: 'Visitou um restaurante local',
    emoji: '🍝',
    unlocked: ({ visitedIds }) => visitedIn(visitedIds, 'Gastronomia'),
  },
  {
    id: 'amigo-natureza',
    label: 'Amigo da Natureza',
    desc: 'Explorou uma área verde',
    emoji: '🌿',
    unlocked: ({ visitedIds }) => visitedIn(visitedIds, 'Natureza'),
  },
  {
    id: 'passaporte-encantado',
    label: 'Passaporte Encantado',
    desc: 'Visitou 3 pontos turísticos',
    emoji: '🎟️',
    unlocked: ({ visitedIds }) => visitedIds.length >= 3,
  },
  {
    id: 'historiador',
    label: 'Historiador',
    desc: 'Visite todos os locais históricos',
    emoji: '🏛️',
    unlocked: ({ visitedIds }) => PLACES.filter((p) => p.category === 'Histórico').every((p) => visitedIds.includes(p.id)),
  },
  {
    id: 'embaixador',
    label: 'Embaixador',
    desc: 'Alcance 100 pontos',
    emoji: '⭐',
    unlocked: ({ points }) => points >= 100,
  },
];
