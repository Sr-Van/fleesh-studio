import { getTranslations, type Locale, type PortfolioId } from '../i18n';

export type ThumbnailCategory = 'roblox' | 'minecraft' | 'gaming';

export interface PortfolioBaseItem {
  id: PortfolioId;
  category: ThumbnailCategory;
  src: string;
  thumbSrc: string;
  featured: boolean;
  dominantPalette: string;
}

export interface PortfolioItem extends PortfolioBaseItem {
  title: string;
  categoryLabel: string;
  alt: string;
  contrastFocus: string;
  whatsappPrompt: string;
}

export const STUDIO_INFO = {
  name: 'Fleesh Studios',
  shortName: 'Fleesh',
  email: 'fleeshworks@gmail.com',
  discordHandle: '/Fleesh',
  twitterUrl: 'https://twitter.com/FleeshStudios',
  twitterHandle: '@FleeshStudios',
  behanceMainUrl: 'https://t.co/I7APly42VD',
  behanceCollections: [
    {
      id: 'roblox' as const,
      label: 'Roblox Thumbs',
      url: 'https://www.behance.net/gallery/175253473/Roblox-Youtube-Thumbnails',
      count: 12,
    },
    {
      id: 'minecraft' as const,
      label: 'Minecraft Thumbs',
      url: 'https://www.behance.net/gallery/176175057/Minecraft-Thumbnails',
      count: 8,
    },
    {
      id: 'variety' as const,
      label: 'Variety Games',
      url: 'https://www.behance.net/gallery/175326089/Variety-Games-Thumbnails',
      count: 2,
    },
  ],
  copyrightYear: 2026,
} as const;

export const PORTFOLIO_BASE: PortfolioBaseItem[] = [
  {
    id: 'minecraft-shenron-dragon',
    category: 'minecraft',
    src: '/thumbs/minecraft-shenron-dragon.webp',
    thumbSrc: '/thumbs/sm/minecraft-shenron-dragon.webp',
    featured: true,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'roblox-legendary-scythe',
    category: 'roblox',
    src: '/thumbs/roblox-legendary-scythe.webp',
    thumbSrc: '/thumbs/sm/roblox-legendary-scythe.webp',
    featured: true,
    dominantPalette: '#8358FF',
  },
  {
    id: 'gaming-pink-kaiju',
    category: 'gaming',
    src: '/thumbs/gaming-pink-kaiju.webp',
    thumbSrc: '/thumbs/sm/gaming-pink-kaiju.webp',
    featured: true,
    dominantPalette: '#FFC83D',
  },
  {
    id: 'minecraft-cobblemon-400-days',
    category: 'minecraft',
    src: '/thumbs/minecraft-cobblemon-400-days.webp',
    thumbSrc: '/thumbs/sm/minecraft-cobblemon-400-days.webp',
    featured: true,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'roblox-the-throne',
    category: 'roblox',
    src: '/thumbs/roblox-the-throne.webp',
    thumbSrc: '/thumbs/sm/roblox-the-throne.webp',
    featured: false,
    dominantPalette: '#8358FF',
  },
  {
    id: 'minecraft-knight-hardcore',
    category: 'minecraft',
    src: '/thumbs/minecraft-knight-hardcore.webp',
    thumbSrc: '/thumbs/sm/minecraft-knight-hardcore.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'gaming-secret-turtle-base',
    category: 'gaming',
    src: '/thumbs/gaming-secret-turtle-base.webp',
    thumbSrc: '/thumbs/sm/gaming-secret-turtle-base.webp',
    featured: false,
    dominantPalette: '#FFC83D',
  },
  {
    id: 'minecraft-dino-rider',
    category: 'minecraft',
    src: '/thumbs/minecraft-dino-rider.webp',
    thumbSrc: '/thumbs/sm/minecraft-dino-rider.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'roblox-forge-blade',
    category: 'roblox',
    src: '/thumbs/roblox-forge-blade.webp',
    thumbSrc: '/thumbs/sm/roblox-forge-blade.webp',
    featured: false,
    dominantPalette: '#8358FF',
  },
  {
    id: 'roblox-butcher-chef',
    category: 'roblox',
    src: '/thumbs/roblox-butcher-chef.webp',
    thumbSrc: '/thumbs/sm/roblox-butcher-chef.webp',
    featured: false,
    dominantPalette: '#8358FF',
  },
  {
    id: 'minecraft-hardcore-inferno',
    category: 'minecraft',
    src: '/thumbs/minecraft-hardcore-inferno.webp',
    thumbSrc: '/thumbs/sm/minecraft-hardcore-inferno.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'gaming-tnt-ufo',
    category: 'gaming',
    src: '/thumbs/gaming-tnt-ufo.webp',
    thumbSrc: '/thumbs/sm/gaming-tnt-ufo.webp',
    featured: false,
    dominantPalette: '#FFC83D',
  },
  {
    id: 'roblox-hidden-eye',
    category: 'roblox',
    src: '/thumbs/roblox-hidden-eye.webp',
    thumbSrc: '/thumbs/sm/roblox-hidden-eye.webp',
    featured: false,
    dominantPalette: '#8358FF',
  },
  {
    id: 'minecraft-soulrend',
    category: 'minecraft',
    src: '/thumbs/minecraft-soulrend.webp',
    thumbSrc: '/thumbs/sm/minecraft-soulrend.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'minecraft-casket-of-reveries',
    category: 'minecraft',
    src: '/thumbs/minecraft-casket-of-reveries.webp',
    thumbSrc: '/thumbs/sm/minecraft-casket-of-reveries.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'gaming-me-in-roblox',
    category: 'gaming',
    src: '/thumbs/gaming-me-in-roblox.webp',
    thumbSrc: '/thumbs/sm/gaming-me-in-roblox.webp',
    featured: false,
    dominantPalette: '#FFC83D',
  },
  {
    id: 'roblox-no-digging',
    category: 'roblox',
    src: '/thumbs/roblox-no-digging.webp',
    thumbSrc: '/thumbs/sm/roblox-no-digging.webp',
    featured: false,
    dominantPalette: '#8358FF',
  },
  {
    id: 'minecraft-oceanblock',
    category: 'minecraft',
    src: '/thumbs/minecraft-oceanblock.webp',
    thumbSrc: '/thumbs/sm/minecraft-oceanblock.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'gaming-run',
    category: 'gaming',
    src: '/thumbs/gaming-run.webp',
    thumbSrc: '/thumbs/sm/gaming-run.webp',
    featured: false,
    dominantPalette: '#FFC83D',
  },
  {
    id: 'roblox-spider-mutation',
    category: 'roblox',
    src: '/thumbs/roblox-spider-mutation.webp',
    thumbSrc: '/thumbs/sm/roblox-spider-mutation.webp',
    featured: false,
    dominantPalette: '#8358FF',
  },
  {
    id: 'roblox-hour-23',
    category: 'roblox',
    src: '/thumbs/roblox-hour-23.webp',
    thumbSrc: '/thumbs/sm/roblox-hour-23.webp',
    featured: false,
    dominantPalette: '#8358FF',
  },
  {
    id: 'minecraft-arcane-frontier',
    category: 'minecraft',
    src: '/thumbs/minecraft-arcane-frontier.webp',
    thumbSrc: '/thumbs/sm/minecraft-arcane-frontier.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'minecraft-better-minecraft',
    category: 'minecraft',
    src: '/thumbs/minecraft-better-minecraft.webp',
    thumbSrc: '/thumbs/sm/minecraft-better-minecraft.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'gaming-tornado',
    category: 'gaming',
    src: '/thumbs/gaming-tornado.webp',
    thumbSrc: '/thumbs/sm/gaming-tornado.webp',
    featured: false,
    dominantPalette: '#FFC83D',
  },
  {
    id: 'roblox-day-99',
    category: 'roblox',
    src: '/thumbs/roblox-day-99.webp',
    thumbSrc: '/thumbs/sm/roblox-day-99.webp',
    featured: false,
    dominantPalette: '#8358FF',
  },
  {
    id: 'gaming-living-village',
    category: 'gaming',
    src: '/thumbs/gaming-living-village.webp',
    thumbSrc: '/thumbs/sm/gaming-living-village.webp',
    featured: false,
    dominantPalette: '#FFC83D',
  },
  {
    id: 'roblox-supreme-egg',
    category: 'roblox',
    src: '/thumbs/roblox-supreme-egg.webp',
    thumbSrc: '/thumbs/sm/roblox-supreme-egg.webp',
    featured: false,
    dominantPalette: '#8358FF',
  },
  {
    id: 'roblox-toxic-foot-monster',
    category: 'roblox',
    src: '/thumbs/roblox-toxic-foot-monster.webp',
    thumbSrc: '/thumbs/sm/roblox-toxic-foot-monster.webp',
    featured: false,
    dominantPalette: '#8358FF',
  },
  {
    id: 'gaming-brick-pit',
    category: 'gaming',
    src: '/thumbs/gaming-brick-pit.webp',
    thumbSrc: '/thumbs/sm/gaming-brick-pit.webp',
    featured: false,
    dominantPalette: '#FFC83D',
  },
  {
    id: 'roblox-supermarket-hide',
    category: 'roblox',
    src: '/thumbs/roblox-supermarket-hide.webp',
    thumbSrc: '/thumbs/sm/roblox-supermarket-hide.webp',
    featured: false,
    dominantPalette: '#8358FF',
  },
  {
    id: 'minecraft-monster-squad',
    category: 'minecraft',
    src: '/thumbs/minecraft-monster-squad.webp',
    thumbSrc: '/thumbs/sm/minecraft-monster-squad.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'gaming-red-eyes',
    category: 'gaming',
    src: '/thumbs/gaming-red-eyes.webp',
    thumbSrc: '/thumbs/sm/gaming-red-eyes.webp',
    featured: false,
    dominantPalette: '#FFC83D',
  },
  {
    id: 'roblox-forbidden-pit',
    category: 'roblox',
    src: '/thumbs/roblox-forbidden-pit.webp',
    thumbSrc: '/thumbs/sm/roblox-forbidden-pit.webp',
    featured: false,
    dominantPalette: '#8358FF',
  },
  {
    id: 'minecraft-100-days-zombies',
    category: 'minecraft',
    src: '/thumbs/minecraft-100-days-zombies.webp',
    thumbSrc: '/thumbs/sm/minecraft-100-days-zombies.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'minecraft-pocket-monsters',
    category: 'minecraft',
    src: '/thumbs/minecraft-pocket-monsters.webp',
    thumbSrc: '/thumbs/sm/minecraft-pocket-monsters.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'minecraft-infinite-hearts',
    category: 'minecraft',
    src: '/thumbs/minecraft-infinite-hearts.webp',
    thumbSrc: '/thumbs/sm/minecraft-infinite-hearts.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'minecraft-100-players',
    category: 'minecraft',
    src: '/thumbs/minecraft-100-players.webp',
    thumbSrc: '/thumbs/sm/minecraft-100-players.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'minecraft-legendary-birds',
    category: 'minecraft',
    src: '/thumbs/minecraft-legendary-birds.webp',
    thumbSrc: '/thumbs/sm/minecraft-legendary-birds.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
  },
];

export function getPortfolioItems(locale: Locale): PortfolioItem[] {
  const { portfolio } = getTranslations(locale);
  return PORTFOLIO_BASE.map((item) => ({
    ...item,
    ...portfolio[item.id],
  }));
}
