// Mock catalogue of Encantado (RS) points of interest, matching the design prototype.
export const PLACES = [
  {
    id: 'jardim-sentidos',
    name: 'Jardim dos Sentidos',
    category: 'Natureza',
    distance: '330 m',
    rating: 4.5,
    points: 150,
    emoji: '🌸',
    emojiBg: '#C8E8D8',
    badgeId: 'jardim-sentidos',
  },
  {
    id: 'cristo-protetor',
    name: 'Cristo Protetor',
    category: 'Monumento',
    distance: '2,1 km',
    rating: 4.8,
    points: 120,
    emoji: '⛪',
    emojiBg: '#E8C8A0',
    badgeId: 'cristo-protetor',
  },
  {
    id: 'museu-imigrante',
    name: 'Museu do Imigrante',
    category: 'Cultura',
    distance: '1,8 km',
    rating: 4.4,
    points: 100,
    emoji: '🏛️',
    emojiBg: '#D8C8E8',
    badgeId: null,
  },
  {
    id: 'cantina-segaloni',
    name: 'Cantina Segaloni',
    category: 'Gastronomia',
    distance: '3,4 km',
    rating: 4.7,
    points: 90,
    emoji: '🍝',
    emojiBg: '#B8D0E8',
    badgeId: null,
  },
];

export function getPlace(id) {
  return PLACES.find((p) => p.id === id);
}
