export type Locale = 'en' | 'pt';

export type PortfolioId =
  | 'minecraft-shenron-dragon'
  | 'roblox-legendary-scythe'
  | 'gaming-pink-kaiju'
  | 'minecraft-cobblemon-400-days'
  | 'roblox-the-throne'
  | 'minecraft-knight-hardcore'
  | 'gaming-secret-turtle-base'
  | 'roblox-forge-blade'
  | 'roblox-butcher-chef'
  | 'minecraft-hardcore-inferno'
  | 'gaming-tnt-ufo'
  | 'roblox-hidden-eye'
  | 'minecraft-soulrend'
  | 'gaming-me-in-roblox'
  | 'roblox-no-digging'
  | 'minecraft-oceanblock'
  | 'gaming-run'
  | 'roblox-spider-mutation'
  | 'roblox-hour-23'
  | 'minecraft-better-minecraft'
  | 'gaming-tornado'
  | 'roblox-day-99'
  | 'minecraft-arcane-frontier'
  | 'gaming-living-village'
  | 'roblox-supreme-egg'
  | 'minecraft-dino-rider'
  | 'roblox-toxic-foot-monster'
  | 'gaming-brick-pit'
  | 'roblox-supermarket-hide'
  | 'minecraft-monster-squad'
  | 'gaming-red-eyes'
  | 'roblox-forbidden-pit'
  | 'minecraft-100-days-zombies'
  | 'minecraft-pocket-monsters'
  | 'minecraft-infinite-hearts'
  | 'minecraft-casket-of-reveries'
  | 'minecraft-100-players'
  | 'minecraft-legendary-birds';

export interface PortfolioCopy {
  title: string;
  categoryLabel: string;
  alt: string;
  contrastFocus: string;
  whatsappPrompt: string;
}

export interface TranslationDictionary {
  htmlLang: 'en' | 'pt-BR';
  ogLocale: 'en_US' | 'pt_BR';
  seo: {
    title: string;
    description: string;
    schemaDescription: string;
    skipToContent: string;
  };
  header: {
    homeAria: string;
    navAria: string;
    menuWord: string;
    closeWord: string;
    openSrPrefix: string;
    links: {
      top: string;
      manifesto: string;
      gallery: string;
      contact: string;
    };
    collectionsTitle: string;
    socialTitle: string;
    languageTitle: string;
    emailLabel: string;
    langSwitcherAria: string;
  };
  hero: {
    eyebrow: string;
    subtitle: string;
    cta: string;
  };
  manifesto: {
    eyebrow: string;
    body: string;
    cursorLabel: string;
    openPieceLabel: (title: string) => string;
  };
  marquee: {
    ariaLabel: string;
    words: string[];
  };
  gallery: {
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    description: string;
    filtersAria: string;
    filterAll: string;
    piecePrefix: string;
    cursorLabel: string;
    openPieceAria: (index: number, title: string) => string;
    behancePrefix: string;
    lightbox: {
      ariaLabel: string;
      closeAria: string;
      prevAria: string;
      nextAria: string;
      techniqueLabel: string;
      ctaLabel: string;
    };
  };
  contact: {
    headingLine1: string;
    headingLine2Prefix: string;
    headingLine2Accent: string;
    behanceValue: string;
    copiedLabel: string;
    footerTag: string;
  };
  portfolio: Record<PortfolioId, PortfolioCopy>;
}
