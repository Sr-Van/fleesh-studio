import { getTranslations, type Locale, type PortfolioId } from '../i18n';

export type ThumbnailCategory = 'roblox' | 'minecraft' | 'variety';

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
    id: 'roblox-rainbow-friends',
    category: 'roblox',
    src: '/thumbs/roblox-rainbow-friends.webp',
    thumbSrc: '/thumbs/sm/roblox-rainbow-friends.webp',
    featured: true,
    dominantPalette: '#8358FF',
  },
  {
    id: 'minecraft-love-tester',
    category: 'minecraft',
    src: '/thumbs/minecraft-love-tester.webp',
    thumbSrc: '/thumbs/sm/minecraft-love-tester.webp',
    featured: true,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'roblox-doors-crucifix',
    category: 'roblox',
    src: '/thumbs/roblox-doors-crucifix.webp',
    thumbSrc: '/thumbs/sm/roblox-doors-crucifix.webp',
    featured: true,
    dominantPalette: '#8358FF',
  },
  {
    id: 'variety-welcome-to-ohio',
    category: 'variety',
    src: '/thumbs/variety-welcome-to-ohio.webp',
    thumbSrc: '/thumbs/sm/variety-welcome-to-ohio.webp',
    featured: true,
    dominantPalette: '#FF6AD5',
  },
  {
    id: 'roblox-icy-road-supercars',
    category: 'roblox',
    src: '/thumbs/roblox-icy-road-supercars.webp',
    thumbSrc: '/thumbs/sm/roblox-icy-road-supercars.webp',
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
    id: 'minecraft-sleepover',
    category: 'minecraft',
    src: '/thumbs/minecraft-sleepover.webp',
    thumbSrc: '/thumbs/sm/minecraft-sleepover.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'roblox-doors-seek-fire',
    category: 'roblox',
    src: '/thumbs/roblox-doors-seek-fire.webp',
    thumbSrc: '/thumbs/sm/roblox-doors-seek-fire.webp',
    featured: false,
    dominantPalette: '#8358FF',
  },
  {
    id: 'roblox-dunk-simulator',
    category: 'roblox',
    src: '/thumbs/roblox-dunk-simulator.webp',
    thumbSrc: '/thumbs/sm/roblox-dunk-simulator.webp',
    featured: false,
    dominantPalette: '#8358FF',
  },
  {
    id: 'minecraft-premier-rendez-vous',
    category: 'minecraft',
    src: '/thumbs/minecraft-premier-rendez-vous.webp',
    thumbSrc: '/thumbs/sm/minecraft-premier-rendez-vous.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'roblox-arm-wrestle-crack',
    category: 'roblox',
    src: '/thumbs/roblox-arm-wrestle-crack.webp',
    thumbSrc: '/thumbs/sm/roblox-arm-wrestle-crack.webp',
    featured: false,
    dominantPalette: '#8358FF',
  },
  {
    id: 'variety-jeffy-megaphone',
    category: 'variety',
    src: '/thumbs/variety-jeffy-megaphone.webp',
    thumbSrc: '/thumbs/sm/variety-jeffy-megaphone.webp',
    featured: false,
    dominantPalette: '#FF6AD5',
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
    id: 'minecraft-grimace-shake',
    category: 'minecraft',
    src: '/thumbs/minecraft-grimace-shake.webp',
    thumbSrc: '/thumbs/sm/minecraft-grimace-shake.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'roblox-skibidi-choice',
    category: 'roblox',
    src: '/thumbs/roblox-skibidi-choice.webp',
    thumbSrc: '/thumbs/sm/roblox-skibidi-choice.webp',
    featured: false,
    dominantPalette: '#8358FF',
  },
  {
    id: 'minecraft-caught-stealing',
    category: 'minecraft',
    src: '/thumbs/minecraft-caught-stealing.webp',
    thumbSrc: '/thumbs/sm/minecraft-caught-stealing.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
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
    id: 'roblox-giant-baby-daycare',
    category: 'roblox',
    src: '/thumbs/roblox-giant-baby-daycare.webp',
    thumbSrc: '/thumbs/sm/roblox-giant-baby-daycare.webp',
    featured: false,
    dominantPalette: '#8358FF',
  },
  {
    id: 'minecraft-secret-fanboy',
    category: 'minecraft',
    src: '/thumbs/minecraft-secret-fanboy.webp',
    thumbSrc: '/thumbs/sm/minecraft-secret-fanboy.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'roblox-hospital-nightmare',
    category: 'roblox',
    src: '/thumbs/roblox-hospital-nightmare.webp',
    thumbSrc: '/thumbs/sm/roblox-hospital-nightmare.webp',
    featured: false,
    dominantPalette: '#8358FF',
  },
  {
    id: 'minecraft-grimace-park',
    category: 'minecraft',
    src: '/thumbs/minecraft-grimace-park.webp',
    thumbSrc: '/thumbs/sm/minecraft-grimace-park.webp',
    featured: false,
    dominantPalette: '#7FE3F5',
  },
  {
    id: 'minecraft-stole-boyfriend',
    category: 'minecraft',
    src: '/thumbs/minecraft-stole-boyfriend.webp',
    thumbSrc: '/thumbs/sm/minecraft-stole-boyfriend.webp',
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
