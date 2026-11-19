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
    behanceValue: 'Full portfolio',
    copiedLabel: 'copied ✦',
    footerTag: '✦ made in 16:9 ✦',
  },
  portfolio: {
    'minecraft-shenron-dragon': {
      title: 'Summoning the Dragon',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail with a giant green dragon coiled in a stormy sky above a small character glowing with energy',
      contrastFocus: 'Epic scale + Lightning glow',
      whatsappPrompt:
        'Hi! I liked the "Summoning the Dragon" (Minecraft) thumbnail. I want an epic cover in this style.',
    },
    'roblox-legendary-scythe': {
      title: 'The 0.01% Scythe',
      categoryLabel: 'Roblox',
      alt: 'Roblox thumbnail with a festive character next to a glowing red legendary scythe and a "0.01%" label',
      contrastFocus: 'Red neon aura + Rarity callout',
      whatsappPrompt:
        'Hi! I liked the "The 0.01% Scythe" (Roblox) thumbnail. I want a rare-item cover in this style.',
    },
    'gaming-pink-kaiju': {
      title: 'Pink Kaiju in the City',
      categoryLabel: 'Gaming',
      alt: 'Gaming thumbnail with a shocked creator in front of a giant pink-spiked kaiju destroying a blocky city',
      contrastFocus: 'Face reaction + Giant-scale threat',
      whatsappPrompt:
        'Hi! I liked the "Pink Kaiju in the City" (Gaming) thumbnail. I want a reaction cover in this style.',
    },
    'minecraft-cobblemon-400-days': {
      title: '400 Days of Cobblemon',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail with legendary creatures surrounding a golden titan and the "400 Days Cobblemon" title',
      contrastFocus: 'Radial composition + Divine backlight',
      whatsappPrompt:
        'Hi! I liked the "400 Days of Cobblemon" (Minecraft) thumbnail. I want a 100-days cover in this style.',
    },
    'roblox-the-throne': {
      title: 'Bayoshin\'s Throne',
      categoryLabel: 'Roblox',
      alt: 'Roblox thumbnail with a character sitting on a dark throne in a red hellish hall under skull icons',
      contrastFocus: 'Symmetry + Red fog',
      whatsappPrompt:
        'Hi! I liked the "Bayoshin\'s Throne" (Roblox) thumbnail. I want a dark cover in this style.',
    },
    'minecraft-knight-hardcore': {
      title: 'The Knight\'s Hardcore',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft Hardcore thumbnail with an armored knight on horseback leading allies in front of a burning castle',
      contrastFocus: 'Heroic pose + Fire backlight',
      whatsappPrompt:
        'Hi! I liked the "The Knight\'s Hardcore" (Minecraft) thumbnail. I want a hardcore cover in this style.',
    },
    'gaming-secret-turtle-base': {
      title: 'The Secret Turtle Base',
      categoryLabel: 'Gaming',
      alt: 'Gaming thumbnail with a smiling creator making a shush gesture beside a turtle hiding a secret ladder',
      contrastFocus: 'Secret hook + Clean colour blocking',
      whatsappPrompt:
        'Hi! I liked the "The Secret Turtle Base" (Gaming) thumbnail. I want a secret-build cover in this style.',
    },
    'roblox-forge-blade': {
      title: 'Forging the Blade',
      categoryLabel: 'Roblox',
      alt: 'Roblox thumbnail with a character hammering a glowing sword on an anvil amid sparks in a forge',
      contrastFocus: 'Spark particles + Warm forge light',
      whatsappPrompt:
        'Hi! I liked the "Forging the Blade" (Roblox) thumbnail. I want a crafting cover in this style.',
    },
    'roblox-butcher-chef': {
      title: 'The Giant Butcher Chef',
      categoryLabel: 'Roblox',
      alt: 'Horror Roblox thumbnail with a giant red-eyed chef wielding a cleaver over a character in a chicken costume',
      contrastFocus: 'Exaggerated scale + Metallic gleam on the cleaver',
      whatsappPrompt:
        'Hi! I liked "The Giant Butcher Chef" (Roblox) thumbnail. I want a horror/suspense cover with this vibe.',
    },
    'minecraft-hardcore-inferno': {
      title: 'Hardcore Inferno',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft Hardcore thumbnail with a towering molten mob rising from a blood-red landscape',
      contrastFocus: 'Monochrome red + Looming scale',
      whatsappPrompt:
        'Hi! I liked the "Hardcore Inferno" (Minecraft) thumbnail. I want a horror cover in this style.',
    },
    'gaming-tnt-ufo': {
      title: 'The TNT UFO',
      categoryLabel: 'Gaming',
      alt: 'Gaming thumbnail with a screaming creator as a UFO beam drops TNT blocks onto a red grid',
      contrastFocus: 'Face reaction + Light beam focus',
      whatsappPrompt:
        'Hi! I liked the "The TNT UFO" (Gaming) thumbnail. I want a reaction cover in this style.',
    },
    'roblox-hidden-eye': {
      title: 'The Eye in the Leaves',
      categoryLabel: 'Roblox',
      alt: 'Roblox thumbnail with a character facing a giant glowing blue eye hidden in a pile of autumn leaves',
      contrastFocus: 'Complementary colours + Mystery hook',
      whatsappPrompt:
        'Hi! I liked the "The Eye in the Leaves" (Roblox) thumbnail. I want a mystery cover in this style.',
    },
    'minecraft-soulrend': {
      title: '100 Days in Soulrend',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail with dark armored warriors raising glowing blue weapons under the "100 Days Soulrend" title',
      contrastFocus: 'Cold glow + Dark armour detail',
      whatsappPrompt:
        'Hi! I liked the "100 Days in Soulrend" (Minecraft) thumbnail. I want a 100-days cover in this style.',
    },
    'gaming-me-in-roblox': {
      title: 'That\'s Me in Roblox',
      categoryLabel: 'Gaming',
      alt: 'Gaming thumbnail with a creator\'s face on a blocky avatar pointed out by a red "ME" arrow',
      contrastFocus: 'Arrow callout + Saturated palette',
      whatsappPrompt:
        'Hi! I liked the "That\'s Me in Roblox" (Gaming) thumbnail. I want a reaction cover in this style.',
    },
    'roblox-no-digging': {
      title: 'No Digging Allowed',
      categoryLabel: 'Roblox',
      alt: 'Roblox thumbnail with a character holding a shovel in front of a giant toothed hole and a "No Digging" sign',
      contrastFocus: 'Radial teeth + Warning sign',
      whatsappPrompt:
        'Hi! I liked the "No Digging Allowed" (Roblox) thumbnail. I want a challenge cover in this style.',
    },
    'minecraft-oceanblock': {
      title: '100 Days in OceanBlock 2',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail with a character on a raft surrounded by giant purple tentacles rising from the sea',
      contrastFocus: 'Split water line + Purple threat',
      whatsappPrompt:
        'Hi! I liked the "100 Days in OceanBlock 2" (Minecraft) thumbnail. I want a 100-days cover in this style.',
    },
    'gaming-run': {
      title: 'RUN',
      categoryLabel: 'Gaming',
      alt: 'Gaming thumbnail with a shocked creator covering their mouth next to a giant "RUN" carved into a blocky map',
      contrastFocus: 'Face reaction + Circled detail',
      whatsappPrompt:
        'Hi! I liked the "RUN" (Gaming) thumbnail. I want a reaction cover in this style.',
    },
    'roblox-spider-mutation': {
      title: '50/50 Spider Mutation',
      categoryLabel: 'Roblox',
      alt: 'Roblox thumbnail showing a character split down the middle between human form and a mechanical spider creature with lightning',
      contrastFocus: 'Symmetrical split (Transformation) + Edge lightning',
      whatsappPrompt:
        'Hi! I liked the "50/50 Spider Mutation" (Roblox) thumbnail. I want a cover with a transformation effect.',
    },
    'roblox-hour-23': {
      title: 'Hour 23',
      categoryLabel: 'Roblox',
      alt: 'Roblox thumbnail with a character in a golden suit lying in the snow beside ice weapons and a handwritten "Hour 23"',
      contrastFocus: 'Top-down view + Handwritten text',
      whatsappPrompt:
        'Hi! I liked the "Hour 23" (Roblox) thumbnail. I want a survival cover in this style.',
    },
    'minecraft-better-minecraft': {
      title: 'Better Minecraft',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail with a diamond-armored hero flanked by enchanted warriors and lightning',
      contrastFocus: 'Teal glow + Triangle composition',
      whatsappPrompt:
        'Hi! I liked the "Better Minecraft" (Minecraft) thumbnail. I want a modded cover in this style.',
    },
    'gaming-tornado': {
      title: 'Hiding from the Tornado',
      categoryLabel: 'Gaming',
      alt: 'Gaming thumbnail with three terrified creators huddled by a wall as a tornado tears through a blocky field',
      contrastFocus: 'Group reaction + Motion debris',
      whatsappPrompt:
        'Hi! I liked the "Hiding from the Tornado" (Gaming) thumbnail. I want a reaction cover in this style.',
    },
    'roblox-day-99': {
      title: 'Day 99',
      categoryLabel: 'Roblox',
      alt: 'Roblox thumbnail with a character hiding on a snowy tree from monstrous reindeer and creatures',
      contrastFocus: 'Snow palette + Creature lineup',
      whatsappPrompt:
        'Hi! I liked the "Day 99" (Roblox) thumbnail. I want a survival cover in this style.',
    },
    'minecraft-arcane-frontier': {
      title: 'Project: Arcane Frontier',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail with a pink-haired hero holding an ice sword between a shadow knight and a fire warrior',
      contrastFocus: 'Purple/orange split + Magic glow',
      whatsappPrompt:
        'Hi! I liked the "Project: Arcane Frontier" (Minecraft) thumbnail. I want a modded cover in this style.',
    },
    'gaming-living-village': {
      title: 'The Living Village',
      categoryLabel: 'Gaming',
      alt: 'Gaming thumbnail with a shocked creator next to a Minecraft house with glowing eyes and a mouth full of teeth',
      contrastFocus: 'Face reaction + Night glow',
      whatsappPrompt:
        'Hi! I liked the "The Living Village" (Gaming) thumbnail. I want a horror cover in this style.',
    },
    'roblox-supreme-egg': {
      title: 'The Supreme Egg',
      categoryLabel: 'Roblox',
      alt: 'Roblox thumbnail with a character facing a giant thorny green egg weighing "999,659,931 KG"',
      contrastFocus: 'Rainbow title + Toxic green glow',
      whatsappPrompt:
        'Hi! I liked the "The Supreme Egg" (Roblox) thumbnail. I want a simulator cover in this style.',
    },
    'minecraft-dino-rider': {
      title: 'The Dino Rider',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail with a spear-wielding character riding a giant armored dinosaur under a full moon',
      contrastFocus: 'Moonlit rim + Dynamic angle',
      whatsappPrompt:
        'Hi! I liked the "The Dino Rider" (Minecraft) thumbnail. I want an adventure cover in this style.',
    },
    'roblox-toxic-foot-monster': {
      title: 'Toxic Sewer Monster',
      categoryLabel: 'Roblox',
      alt: 'Humor and chase Roblox thumbnail with a giant orange creature in a hallway covered in neon green slime',
      contrastFocus: 'Orange vs acid green complementary contrast',
      whatsappPrompt:
        'Hi! I liked the "Toxic Sewer Monster" (Roblox) thumbnail. I want a cover in this cartoonish style.',
    },
    'gaming-brick-pit': {
      title: 'Swimming in Bricks',
      categoryLabel: 'Gaming',
      alt: 'Gaming thumbnail with a cheering minifigure emerging from a sea of colourful toy bricks',
      contrastFocus: 'Bright primaries + Joyful pose',
      whatsappPrompt:
        'Hi! I liked the "Swimming in Bricks" (Gaming) thumbnail. I want a fun cover in this style.',
    },
    'roblox-supermarket-hide': {
      title: 'Hiding in the Supermarket',
      categoryLabel: 'Roblox',
      alt: 'Roblox thumbnail with a character hiding behind toilet paper while guards with flashlights search the aisles',
      contrastFocus: 'Depth of field + Flashlight tension',
      whatsappPrompt:
        'Hi! I liked the "Hiding in the Supermarket" (Roblox) thumbnail. I want a hide-and-seek cover in this style.',
    },
    'minecraft-monster-squad': {
      title: 'The Monster Squad',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail with an armed character among horror creatures in a sandstorm',
      contrastFocus: 'Dusty haze + Creature silhouettes',
      whatsappPrompt:
        'Hi! I liked the "The Monster Squad" (Minecraft) thumbnail. I want a horror cover in this style.',
    },
    'gaming-red-eyes': {
      title: 'Red Eyes in the Forest',
      categoryLabel: 'Gaming',
      alt: 'Gaming thumbnail with three frightened creators peeking out as a red-eyed tree monster lunges at them',
      contrastFocus: 'Group reaction + Glowing eyes',
      whatsappPrompt:
        'Hi! I liked the "Red Eyes in the Forest" (Gaming) thumbnail. I want a horror cover in this style.',
    },
    'roblox-forbidden-pit': {
      title: 'The Forbidden Pit',
      categoryLabel: 'Roblox',
      alt: 'Roblox thumbnail with a character peering into a stone pit where a glowing blue creature lurks',
      contrastFocus: 'Top-down framing + Blue glow focus',
      whatsappPrompt:
        'Hi! I liked the "The Forbidden Pit" (Roblox) thumbnail. I want a mystery cover in this style.',
    },
    'minecraft-100-days-zombies': {
      title: '100 Days of Zombies',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft Hardcore thumbnail with a shotgun-wielding character surrounded by red-eyed zombies',
      contrastFocus: 'Red-eye accents + Crowd pressure',
      whatsappPrompt:
        'Hi! I liked the "100 Days of Zombies" (Minecraft) thumbnail. I want a 100-days cover in this style.',
    },
    'minecraft-pocket-monsters': {
      title: 'Catching Them All',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail with blocky versions of popular pocket monsters charging with electric sparks',
      contrastFocus: 'Warm palette + Character lineup',
      whatsappPrompt:
        'Hi! I liked the "Catching Them All" (Minecraft) thumbnail. I want a modded cover in this style.',
    },
    'minecraft-infinite-hearts': {
      title: 'Infinite Hearts',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail with a glowing pink-armored warrior wielding enchanted weapons in front of a wall of hearts',
      contrastFocus: 'Pattern background + Electric glow',
      whatsappPrompt:
        'Hi! I liked the "Infinite Hearts" (Minecraft) thumbnail. I want a challenge cover in this style.',
    },
    'minecraft-casket-of-reveries': {
      title: 'The Casket of Reveries',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail with a white-armored hero facing a towering neon-pink glyph golem',
      contrastFocus: 'Neon pink + Size contrast',
      whatsappPrompt:
        'Hi! I liked the "The Casket of Reveries" (Minecraft) thumbnail. I want a modded cover in this style.',
    },
    'minecraft-100-players': {
      title: '100 Players Hardcore',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft Hardcore thumbnail with gas-masked soldiers in a wasteland under a nuclear explosion',
      contrastFocus: 'Apocalyptic palette + Squad framing',
      whatsappPrompt:
        'Hi! I liked the "100 Players Hardcore" (Minecraft) thumbnail. I want an event cover in this style.',
    },
    'minecraft-legendary-birds': {
      title: 'The Legendary Birds',
      categoryLabel: 'Minecraft',
      alt: 'Minecraft thumbnail with a character in a suit flanked by fire, ice and lightning legendary birds',
      contrastFocus: 'Tri-colour elements + Symmetry',
      whatsappPrompt:
        'Hi! I liked the "The Legendary Birds" (Minecraft) thumbnail. I want a modded cover in this style.',
    },
  },
};
