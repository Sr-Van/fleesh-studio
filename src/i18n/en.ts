import type { TranslationDictionary } from './types';

export const en: TranslationDictionary = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  seo: {
    title: 'Fleesh Studios — YouTube Thumbnail Atelier',
    description:
      'Art direction atelier crafting 3D thumbnails for Roblox, Minecraft, and Variety Games creators. Color, expression, and instant feed readability.',
    schemaDescription:
      'Portfolio and studio specializing in YouTube thumbnails (Roblox, Minecraft, and Variety Games) focused on mobile-first readability, 3D expression, and high contrast.',
    skipToContent: 'Skip to content',
  },
  header: {
    homeAria: 'Fleesh Studios — home',
    navAria: 'Primary',
    menuWord: 'Menu',
    closeWord: 'Close',
    openSrPrefix: 'Open ',
    links: {
      top: 'Home',
      manifesto: 'Manifesto',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    collectionsTitle: 'Collections',
    socialTitle: 'Social',
    languageTitle: 'Language',
    emailLabel: 'Email',
    langSwitcherAria: 'Language selector',
  },
  hero: {
    eyebrow: '✦ Minecraft · Roblox · Gaming · Variety ✦',
    subtitle: 'The best way to hype up your videos.',
    cta: 'Enter',
  },
  manifesto: {
    eyebrow: '✦ Why thumbnails?',
    body: 'Thumbnails are the main driver behind your YouTube videos. Having a creative, eye-catching thumbnail makes more and more new viewers click on your video, while giving your channel a unique and stylish look.',
    cursorLabel: 'View',
    openPieceLabel: (title) => `Open artwork: ${title}`,
  },
  marquee: {
    ariaLabel: 'Manifesto in motion',
    words: [
      'Color',
      'Expression',
      'Rim light',
      'Drama',
      'Contrast',
      'Storytelling',
      'Scale',
      'Controlled chaos',
    ],
  },
  gallery: {
    eyebrow: '✦ Permanent exhibition',
    headingLead: 'The living',
    headingAccent: ' gallery.',
    description:
      'Twenty-two artworks built to command attention in the feed. Tap any piece to view it fullscreen and see the craft behind it.',
    filtersAria: 'Filter artworks by game',
    filterAll: 'All',
    piecePrefix: 'No.',
    cursorLabel: 'View',
    openPieceAria: (index, title) => `Open artwork ${index}: ${title}`,
    behancePrefix: 'Full collections on Behance:',
    lightbox: {
      ariaLabel: 'Artwork viewer',
      closeAria: 'Close',
      prevAria: 'Previous artwork',
      nextAria: 'Next artwork',
      techniqueLabel: 'Technique:',
      ctaLabel: 'I want something like this',
    },
  },
  contact: {
    headingLine1: "Let's create",
    headingLine2Prefix: 'something ',
    headingLine2Accent: 'unreal.',
    behanceValue: 'Full portfolio',
    copiedLabel: 'copied ✦',
    footerTag: '✦ made in 16:9 ✦',
  },
  portfolio: {
    'roblox-rainbow-friends': {
      title: 'Escape the Rainbow Friends',
      categoryLabel: 'Roblox',
      alt: 'Roblox thumbnail with character running away holding an item in front of the Blue, Green, Orange, and Red monsters',
      contrastFocus: '3D silhouette + Warm/cool rim light',
      whatsappPrompt:
        'Hi! I liked the "Escape the Rainbow Friends" (Roblox) thumbnail in the Fleesh Studios portfolio. I want to order a cover in this style.',
    },
    'minecraft-love-tester': {
      title: '100% Love Tester in Minecraft',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail with two expressive characters side by side and a central heart meter at 100%',
      contrastFocus: 'Reaction symmetry + High-contrast white outline',
      whatsappPrompt:
        'Hi! I liked the "100% Love Tester in Minecraft" thumbnail in the Fleesh Studios portfolio. I want a cover along these lines.',
    },
    'roblox-doors-crucifix': {
      title: 'DOORS: The Blue Crucifix',
      categoryLabel: 'Roblox',
      alt: 'Roblox DOORS thumbnail with character holding a glowing crucifix sealing a dark entity with blue chains',
      contrastFocus: 'Emissive cyan lighting + Confident expression',
      whatsappPrompt:
        'Hi! I liked the "DOORS: The Blue Crucifix" (Roblox) thumbnail in the portfolio. I want to order one in this style.',
    },
    'variety-welcome-to-ohio': {
      title: 'Chaos in Ohio (SML Style)',
      categoryLabel: 'Variety & SML',
      alt: 'Variety thumbnail with two panicked characters fleeing explosions and a meteor in front of a Welcome to Ohio sign',
      contrastFocus: 'Cinematic tension + Foreground signpost',
      whatsappPrompt:
        'Hi! I saw the "Chaos in Ohio" (Variety/SML) thumbnail in the Fleesh Studios portfolio and want a cover with that energy.',
    },
    'roblox-icy-road-supercars': {
      title: 'Icy Road: Supercars on Ice',
      categoryLabel: 'Roblox',
      alt: 'Roblox thumbnail with sports cars drifting across cracked ice and a character running in the foreground',
      contrastFocus: 'Dynamic diagonal composition + Motion blur',
      whatsappPrompt:
        'Hi! I liked the "Icy Road: Supercars on Ice" (Roblox) thumbnail. I want to make a cover with cars and action.',
    },
    'roblox-butcher-chef': {
      title: 'The Giant Butcher Chef',
      categoryLabel: 'Roblox',
      alt: 'Horror Roblox thumbnail with a giant red-eyed chef wielding a cleaver over a character in a chicken costume',
      contrastFocus: 'Exaggerated scale + Metallic gleam on the cleaver',
      whatsappPrompt:
        'Hi! I liked "The Giant Butcher Chef" (Roblox) thumbnail. I want a horror/suspense cover with this vibe.',
    },
    'minecraft-sleepover': {
      title: 'Minecraft Sleepover Party',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail showing three characters lying side by side with a startled expression in the center',
      contrastFocus: 'Three-block readability + Central comedic expression',
      whatsappPrompt:
        'Hi! I liked the "Minecraft Sleepover Party" thumbnail. I would like to order a roleplay cover.',
    },
    'roblox-doors-seek-fire': {
      title: 'Escaping Seek in Flames',
      categoryLabel: 'Roblox',
      alt: 'Roblox thumbnail featuring a burning hallway and two creators running from Seek silhouette',
      contrastFocus: 'Black silhouette against orange fire + Depth',
      whatsappPrompt:
        'Hi! I liked the "Escaping Seek in Flames" (Roblox) thumbnail. I want a chase/action cover.',
    },
    'roblox-dunk-simulator': {
      title: 'Dunk Beyond 999M',
      categoryLabel: 'Roblox',
      alt: 'Space basketball Roblox thumbnail showing a player dunking a flaming ball into a giant hoop with multiplier numbers',
      contrastFocus: 'Extreme wide-angle + Electric energy',
      whatsappPrompt:
        'Hi! I liked the "Dunk Beyond 999M" (Roblox Simulator) thumbnail. I want to order a cover like this.',
    },
    'minecraft-premier-rendez-vous': {
      title: 'First Date on the Boat',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail with a couple in a boat at a vibrant sunset and a pixelated heart bubble',
      contrastFocus: 'Warm sunset palette + Clean center framing',
      whatsappPrompt:
        'Hi! I liked the "First Date on the Boat" (Minecraft) thumbnail. I want a story/roleplay cover.',
    },
    'roblox-arm-wrestle-crack': {
      title: 'Extreme Arm Wrestle',
      categoryLabel: 'Roblox',
      alt: 'Roblox thumbnail of an exaggerated arm-wrestling match contrasting a victorious grin and pure shock',
      contrastFocus: 'Cartoonish exaggeration + Clear force contrast',
      whatsappPrompt:
        'Hi! I liked the "Extreme Arm Wrestle" (Roblox) thumbnail. I want to order a challenge cover.',
    },
    'variety-jeffy-megaphone': {
      title: 'Megaphone at Max Volume',
      categoryLabel: 'Variety & SML',
      alt: 'Variety thumbnail with a character shouting into a megaphone next to another character chilling with headphones',
      contrastFocus: 'Comedy contrast + Directional sound waves',
      whatsappPrompt:
        'Hi! I liked the "Megaphone at Max Volume" (Variety/SML) thumbnail. I want to order a comedy cover.',
    },
    'roblox-spider-mutation': {
      title: '50/50 Spider Mutation',
      categoryLabel: 'Roblox',
      alt: 'Roblox thumbnail showing a character split down the middle between human form and a mechanical spider creature with lightning',
      contrastFocus: 'Symmetrical split (Transformation) + Edge lightning',
      whatsappPrompt:
        'Hi! I liked the "50/50 Spider Mutation" (Roblox) thumbnail. I want a cover with a transformation effect.',
    },
    'minecraft-grimace-shake': {
      title: 'The Grimace Shake Mystery',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail with a purple character holding a cup and a suited duck lying on the ground with purple liquid',
      contrastFocus: 'Saturated purple silhouette against blue sky and green grass',
      whatsappPrompt:
        'Hi! I liked "The Grimace Shake Mystery" (Minecraft) thumbnail. I want to make a cover in this format.',
    },
    'roblox-skibidi-choice': {
      title: 'Right or Wrong Choice',
      categoryLabel: 'Roblox',
      alt: 'Roblox thumbnail with two scared characters on the left and three choices on the right marked with red X and green checkmarks',
      contrastFocus: 'Visual choice trigger (Red X vs Green check)',
      whatsappPrompt:
        'Hi! I liked the "Right or Wrong Choice" (Roblox) thumbnail. I want to order an interactive-style cover like this.',
    },
    'minecraft-caught-stealing': {
      title: 'Caught on Security Camera',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail split between a REC monitor showing chest theft and a character crying in shock on the right',
      contrastFocus: 'Narrative split-screen (Cause and Reaction)',
      whatsappPrompt:
        'Hi! I liked the "Caught on Security Camera" (Minecraft) thumbnail. I want a split-screen cover like this.',
    },
    'roblox-toxic-foot-monster': {
      title: 'Toxic Sewer Monster',
      categoryLabel: 'Roblox',
      alt: 'Humor and chase Roblox thumbnail with a giant orange creature in a hallway covered in neon green slime',
      contrastFocus: 'Orange vs acid green complementary contrast',
      whatsappPrompt:
        'Hi! I liked the "Toxic Sewer Monster" (Roblox) thumbnail. I want a cover in this cartoonish style.',
    },
    'roblox-giant-baby-daycare': {
      title: 'Chaotic Giant Baby Daycare',
      categoryLabel: 'Roblox',
      alt: 'Roblox thumbnail with a giant baby in the center holding two crying characters with glow effects and green smoke',
      contrastFocus: 'Central pyramid + Extreme size contrast',
      whatsappPrompt:
        'Hi! I liked the "Chaotic Giant Baby Daycare" (Roblox) thumbnail. I want to make a humor/adventure cover.',
    },
    'minecraft-secret-fanboy': {
      title: 'The Secret Fanboy in the Dungeon',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail featuring a dramatic roleplay scene in a stone dungeon with contrasting red hearts',
      contrastFocus: 'Instant storytelling without relying on long text',
      whatsappPrompt:
        'Hi! I liked "The Secret Fanboy in the Dungeon" (Minecraft) thumbnail. I want to order a story cover.',
    },
    'roblox-hospital-nightmare': {
      title: 'Hospital Nightmare',
      categoryLabel: 'Roblox',
      alt: 'Hospital horror Roblox thumbnail with emergency yellow lighting and dramatic contrast',
      contrastFocus: 'Warm/cool clinical lighting + Frame tension',
      whatsappPrompt:
        'Hi! I liked the "Hospital Nightmare" (Roblox) thumbnail. I want a cover in this suspenseful direction.',
    },
    'minecraft-grimace-park': {
      title: 'Minecraft Park Hangout',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail in a sunny park with three characters arranged in depth perspective',
      contrastFocus: 'Three-plane depth + Saturated colors',
      whatsappPrompt:
        'Hi! I liked the "Minecraft Park Hangout" thumbnail. I want to order a cover for a series.',
    },
    'minecraft-stole-boyfriend': {
      title: 'Minecraft Love Triangle',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail showing a happy couple on the center-left and a crying character on the right with headline text',
      contrastFocus: 'Left-to-right reading flow + Clear emotional conflict',
      whatsappPrompt:
        'Hi! I liked the "Minecraft Love Triangle" thumbnail. I want a roleplay cover focused on expression.',
    },
  },
};
