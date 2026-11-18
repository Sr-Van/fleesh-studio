export type Locale = 'en' | 'pt';

export type PortfolioId =
  | 'roblox-rainbow-friends'
  | 'minecraft-love-tester'
  | 'roblox-doors-crucifix'
  | 'variety-welcome-to-ohio'
  | 'roblox-icy-road-supercars'
  | 'roblox-butcher-chef'
  | 'minecraft-sleepover'
  | 'roblox-doors-seek-fire'
  | 'roblox-dunk-simulator'
  | 'minecraft-premier-rendez-vous'
  | 'roblox-arm-wrestle-crack'
  | 'variety-jeffy-megaphone'
  | 'roblox-spider-mutation'
  | 'minecraft-grimace-shake'
  | 'roblox-skibidi-choice'
  | 'minecraft-caught-stealing'
  | 'roblox-toxic-foot-monster'
  | 'roblox-giant-baby-daycare'
  | 'minecraft-secret-fanboy'
  | 'roblox-hospital-nightmare'
  | 'minecraft-grimace-park'
  | 'minecraft-stole-boyfriend';

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
