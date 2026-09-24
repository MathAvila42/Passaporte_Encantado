import cristoRedentor from '../assets/photos/cristo-redentor.jpg';
import parqueMoinhos from '../assets/photos/parque-moinhos.jpg';
import cantinaBorghetti from '../assets/photos/cantina-borghetti.jpg';
import museuMunicipal from '../assets/photos/museu-municipal.jpg';
import vinicolaVejaLusa from '../assets/photos/vinicola-veja-lusa.jpg';
import igrejaMatriz from '../assets/photos/igreja-matriz.jpg';
import cascataVeuNoiva from '../assets/photos/cascata-veu-noiva.jpg';
import homeHero from '../assets/photos/home-hero.jpg';
import cristoProtetor from '../assets/photos/cristo-protetor.jpg';
import lagoaGaribaldi from '../assets/photos/lagoa-garibaldi.jpg';
import parqueMarchese from '../assets/photos/parque-marchese.jpg';
import museuHistorico from '../assets/photos/museu-historico.jpg';

export const HOME_HERO = homeHero;

// Points of interest listed in the Guia (list + map), in the prototype's order.
// `pin` is the map-pin tip position (px) inside the illustrated map area.
export const PLACES = [
  {
    id: 'cristo-redentor',
    name: 'Cristo Redentor — Morro do Cristo',
    detailTitle: 'Cristo Redentor: Morro do Cristo',
    mapLabel: 'Cristo Redentor',
    category: 'Mirante',
    tags: ['Vista', 'Mirante', 'Histórico'],
    rating: 4.9,
    distance: '2.3 km',
    hours: 'Livre, 24h',
    points: 10,
    address: 'Morro do Cristo, Encantado – RS, 95960-000',
    description:
      'O Cristo Redentor de Encantado está no topo do Morro do Cristo, oferecendo uma vista panorâmica deslumbrante de toda a cidade e da região serrana gaúcha. Um dos pontos mais fotografados e queridos pelos visitantes.',
    image: cristoRedentor,
    pin: { x: 230, y: 178 },
    reviews: [
      { name: 'Ana Paula R.', date: '15 mai 2025', rating: 5, text: 'Lugar incrível! Vale muito a visita, uma das experiências mais marcantes da viagem a Encantado.' },
      { name: 'Carlos M.', date: '2 mai 2025', rating: 4, text: 'Muito bem conservado. Ótimo para quem quer aprender sobre a história da cidade.' },
    ],
  },
  {
    id: 'parque-moinhos',
    name: 'Parque dos Moinhos',
    mapLabel: 'Parque dos Moinhos',
    category: 'Natureza',
    tags: ['Natureza', 'Família', 'Ar livre'],
    rating: 4.7,
    distance: '1.8 km',
    hours: 'Diariamente, 6h–20h',
    points: 10,
    address: 'Av. dos Moinhos, Encantado – RS, 95960-000',
    description:
      'Área verde no coração de Encantado, com calçadão, jardins e espaço para caminhadas. Ideal para um passeio tranquilo em família entre um ponto turístico e outro.',
    image: parqueMoinhos,
    pin: { x: 190, y: 408 },
    reviews: [
      { name: 'Fernanda T.', date: '28 abr 2025', rating: 5, text: 'Parque lindo e muito bem cuidado, perfeito para fotos.' },
      { name: 'Roberto D.', date: '10 abr 2025', rating: 4, text: 'Bom para caminhar com a família nos fins de semana.' },
    ],
  },
  {
    id: 'cantina-borghetti',
    name: 'Cantina Borghetti',
    mapLabel: 'Cantina Borghetti',
    category: 'Gastronomia',
    tags: ['Italiana', 'Gastronomia'],
    rating: 4.8,
    distance: '0.6 km',
    hours: 'Ter–dom, 11h30–15h e 19h–23h',
    points: 10,
    address: 'Rua Getúlio Vargas, 210, Encantado – RS, 95960-000',
    description:
      'Cantina tradicional de herança italiana, com massas artesanais, polenta e vinhos da região servidos em mesas fartas no estilo colonial.',
    image: cantinaBorghetti,
    pin: { x: 290, y: 486 },
    reviews: [
      { name: 'Marcos V.', date: '20 mai 2025', rating: 5, text: 'Comida maravilhosa, porções generosas e atendimento acolhedor.' },
      { name: 'Juliana P.', date: '5 mai 2025', rating: 5, text: 'A melhor cantina da região, sem dúvidas!' },
    ],
  },
  {
    id: 'museu-municipal',
    name: 'Museu Municipal de Encantado',
    mapLabel: 'Museu Municipal',
    category: 'Cultura',
    tags: ['Cultura', 'História', 'Imigração'],
    rating: 4.6,
    distance: '1.4 km',
    hours: 'Ter–sáb, 9h–17h',
    points: 10,
    address: 'Rua XV de Novembro, 480, Encantado – RS, 95960-000',
    description:
      'Acervo dedicado à história da imigração italiana no Vale do Taquari, com fotografias, utensílios de época e exposições sobre a formação de Encantado.',
    image: museuMunicipal,
    pin: { x: 300, y: 278 },
    reviews: [
      { name: 'Beatriz L.', date: '18 abr 2025', rating: 5, text: 'Muito bem curado. Aprendi bastante sobre a colonização da região.' },
      { name: 'Otávio S.', date: '1 abr 2025', rating: 4, text: 'Vale a visita, principalmente para quem gosta de história local.' },
    ],
  },
  {
    id: 'vinicola-veja-lusa',
    name: 'Vinícola Veja Lusa',
    mapLabel: 'Vinícola Veja Lusa',
    category: 'Gastronomia',
    tags: ['Vinho', 'Gastronomia', 'Degustação'],
    rating: 4.8,
    distance: '4.2 km',
    hours: 'Qui–dom, 10h–18h',
    points: 10,
    address: 'Linha Palmeiro, s/n, Encantado – RS, 95960-000',
    description:
      'Vinícola familiar cercada por parreirais, com degustação guiada de vinhos e sucos coloniais produzidos pela própria família há três gerações.',
    image: vinicolaVejaLusa,
    pin: { x: 74, y: 148 },
    reviews: [
      { name: 'Camila R.', date: '22 mai 2025', rating: 5, text: 'Degustação excelente e a vista dos parreirais é linda.' },
      { name: 'Diego F.', date: '9 mai 2025', rating: 5, text: 'Vinhos ótimos, recomendo o passeio guiado.' },
    ],
  },
  {
    id: 'igreja-matriz',
    name: 'Igreja Matriz São Luís',
    mapLabel: 'Igreja Matriz São Luís',
    category: 'Histórico',
    tags: ['Histórico', 'Arquitetura', 'Fé'],
    rating: 4.5,
    distance: '0.8 km',
    hours: 'Diariamente, 7h–19h',
    points: 10,
    address: 'Praça Central, s/n, Encantado – RS, 95960-000',
    description:
      'Arquitetura de herança italiana do século XIX, com vitrais coloridos e uma das fachadas mais fotografadas da praça central de Encantado.',
    image: igrejaMatriz,
    pin: { x: 90, y: 328 },
    reviews: [
      { name: 'Helena C.', date: '30 abr 2025', rating: 5, text: 'Fachada linda, vale a visita mesmo fora dos horários de missa.' },
      { name: 'Paulo A.', date: '14 abr 2025', rating: 4, text: 'Igreja bem cuidada, praça agradável ao redor.' },
    ],
  },
  {
    id: 'cascata-veu-noiva',
    name: 'Cascata Véu da Noiva',
    mapLabel: 'Cascata Véu da Noiva',
    category: 'Natureza',
    tags: ['Natureza', 'Cachoeira', 'Trilha'],
    rating: 4.7,
    distance: '28 km',
    hours: 'Diariamente, 8h–18h',
    points: 10,
    address: 'Estrada do Véu da Noiva, Encantado – RS, 95960-000',
    description:
      'Cachoeira cercada por mata nativa preservada, com trilha curta e acesso a uma piscina natural — um respiro de natureza na região.',
    image: cascataVeuNoiva,
    pin: { x: 130, y: 60 },
    reviews: [
      { name: 'Renata M.', date: '25 mai 2025', rating: 5, text: 'Água gelada e cristalina, trilha tranquila até para crianças.' },
      { name: 'Igor B.', date: '11 mai 2025', rating: 4, text: 'Muito bonita, leve calçado apropriado para a trilha.' },
    ],
  },
  {
    id: 'feira-colonial',
    name: 'Feira Colonial — Praça Central',
    mapLabel: 'Feira Colonial',
    category: 'Gastronomia',
    tags: ['Colonial', 'Gastronomia'],
    rating: 4.6,
    distance: '1.1 km',
    hours: 'Sábados de manhã',
    points: 10,
    address: 'Praça Central, Encantado – RS, 95960-000',
    description:
      'Feira semanal com produtos coloniais, artesanato local e comidas típicas, direto dos pequenos produtores do Vale do Taquari.',
    image: null,
    pin: { x: 100, y: 547 },
    reviews: [
      { name: 'Sandra K.', date: '17 mai 2025', rating: 5, text: 'Produtos frescos e preços justos, sempre volto aos sábados.' },
      { name: 'Adão G.', date: '3 mai 2025', rating: 4, text: 'Boa variedade de queijos e embutidos coloniais.' },
    ],
  },
  {
    id: 'jardim-encantado',
    name: 'Jardim Encantado',
    mapLabel: 'Jardim Encantado',
    category: 'Natureza',
    tags: ['Natureza', 'Sensorial'],
    rating: 4.9,
    distance: '3.1 km',
    hours: 'Diariamente, 9h–18h',
    points: 10,
    address: 'Encantado – RS, 95960-000',
    description:
      'Jardim sensorial com lagos, pontes de madeira e trilhas entre pedras e vegetação nativa — um espaço pensado para estimular todos os sentidos.',
    image: homeHero,
    pin: { x: 252, y: 590 },
    reviews: [
      { name: 'Luiza F.', date: '12 mai 2025', rating: 5, text: 'Um lugar mágico, perfeito para desacelerar.' },
    ],
  },
];

// "Em destaque" list on the Início screen.
export const HOME_FEATURED = [
  {
    id: 'cristo-protetor',
    name: 'Cristo Protetor',
    category: 'Religião',
    tags: ['Religião', 'Mirante'],
    rating: 4.9,
    distance: '2.1 km',
    hours: 'Ter–dom, 9h–17h',
    points: 10,
    address: 'Morro das Antenas, Encantado – RS, 95960-000',
    description:
      'Com 43,5 metros de altura, o Cristo Protetor é a maior estátua de Cristo do Brasil. O complexo tem mirante, capela e uma vista espetacular do Vale do Taquari.',
    image: cristoProtetor,
    reviews: [
      { name: 'Ana Paula R.', date: '15 mai 2025', rating: 5, text: 'Impressionante de perto, e o pôr do sol lá de cima é inesquecível.' },
    ],
  },
  {
    id: 'lagoa-garibaldi',
    name: 'Lagoa da Garibaldi',
    category: 'Natura',
    tags: ['Natureza', 'Lazer'],
    rating: 4.7,
    distance: '3.8 km',
    hours: 'Livre, 24h',
    points: 10,
    address: 'Lagoa da Garibaldi, Encantado – RS, 95960-000',
    description:
      'A mais bela paisagem natural do município, cercada por morros verdes. Ótima para caminhadas, esportes náuticos e fim de tarde à beira d’água.',
    image: lagoaGaribaldi,
    reviews: [
      { name: 'Carlos M.', date: '2 mai 2025', rating: 5, text: 'Paisagem linda e tranquila, vale muito o passeio.' },
    ],
  },
  {
    id: 'parque-marchese',
    name: 'Parque João Batista Marchese',
    category: 'Lazer',
    tags: ['Lazer', 'Família'],
    rating: 4.6,
    distance: '1.2 km',
    hours: 'Diariamente, 6h–22h',
    points: 10,
    address: 'Encantado – RS, 95960-000',
    description:
      'Parque urbano com playground, pista de caminhada e muito verde — ponto de encontro das famílias de Encantado.',
    image: parqueMarchese,
    reviews: [
      { name: 'Fernanda T.', date: '28 abr 2025', rating: 5, text: 'Ótimo para levar as crianças.' },
    ],
  },
  {
    id: 'museu-historico',
    name: 'Museu Municipal de Encantado',
    category: 'Cultura',
    tags: ['Cultura', 'História'],
    rating: 4.8,
    distance: '0.8 km',
    hours: 'Ter–sáb, 9h–17h',
    points: 10,
    address: 'Encantado – RS, 95960-000',
    description:
      'Casarão histórico que abriga o acervo sobre a imigração italiana e a formação de Encantado.',
    image: museuHistorico,
    reviews: [
      { name: 'Beatriz L.', date: '18 abr 2025', rating: 5, text: 'Prédio lindo e acervo muito interessante.' },
    ],
  },
];

const ALL = [...PLACES, ...HOME_FEATURED];

export function getPlace(id) {
  return ALL.find((p) => p.id === id);
}
