export type ThumbnailCategory = 'roblox' | 'minecraft' | 'variety';

export interface PortfolioItem {
  id: string;
  title: string;
  category: ThumbnailCategory;
  categoryLabel: string;
  src: string;
  thumbSrc: string;
  alt: string;
  featured: boolean;
  contrastFocus: string;
  dominantPalette: string;
  whatsappPrompt: string;
}

export interface FeedSimulatorSample {
  id: string;
  tabLabel: string;
  categoryLabel: string;
  videoTitle: string;
  channelName: string;
  viewsLabel: string;
  duration: string;
  src: string;
  thumbSrc: string;
  focalNote: string;
  separationNote: string;
  safeZoneNote: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  audience: string;
  description: string;
  deliverables: string[];
  ctaLabel: string;
  whatsappMessage: string;
  highlighted?: boolean;
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  description: string;
  meta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const STUDIO_INFO = {
  name: 'Fleesh Studios',
  shortName: 'Fleesh',
  tagline: 'Direção de Arte & Thumbnails de Alto CTR para YouTube',
  description:
    'Portfólio e estúdio especializado em thumbnails para YouTube (Roblox, Minecraft e Variety Games) com foco em leitura imediata no celular, expressão 3D e alto contraste.',
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

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'roblox-rainbow-friends',
    title: 'Fuga dos Rainbow Friends',
    category: 'roblox',
    categoryLabel: 'Roblox',
    src: '/thumbs/roblox-rainbow-friends.webp',
    thumbSrc: '/thumbs/sm/roblox-rainbow-friends.webp',
    alt: 'Thumbnail Roblox com personagem fugindo segurando item diante dos monstros Blue, Green, Orange e Red',
    featured: true,
    contrastFocus: 'Silhueta 3D + Rim Light quente/frio',
    dominantPalette: '#8358FF',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "Fuga dos Rainbow Friends" (Roblox) no portfólio da Fleesh Studios. Quero fazer uma capa nesse estilo.',
  },
  {
    id: 'minecraft-love-tester',
    title: 'Love Tester 100% no Minecraft',
    category: 'minecraft',
    categoryLabel: 'Minecraft',
    src: '/thumbs/minecraft-love-tester.webp',
    thumbSrc: '/thumbs/sm/minecraft-love-tester.webp',
    alt: 'Thumbnail Minecraft com dois personagens expressivos lado a lado e medidor central de coração em 100%',
    featured: true,
    contrastFocus: 'Simetria de reação + Contorno branco de alto contraste',
    dominantPalette: '#7FE3F5',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "Love Tester 100% no Minecraft" no portfólio da Fleesh Studios. Quero uma capa nessa linha.',
  },
  {
    id: 'roblox-doors-crucifix',
    title: 'DOORS: O Crucifixo Azul',
    category: 'roblox',
    categoryLabel: 'Roblox',
    src: '/thumbs/roblox-doors-crucifix.webp',
    thumbSrc: '/thumbs/sm/roblox-doors-crucifix.webp',
    alt: 'Thumbnail Roblox DOORS com personagem segurando crucifixo brilhante selando entidade sombria com correntes azuis',
    featured: true,
    contrastFocus: 'Iluminação ciano emissiva + Expressão de confiança',
    dominantPalette: '#8358FF',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "DOORS: O Crucifixo Azul" (Roblox) no portfólio. Quero encomendar uma nesse estilo.',
  },
  {
    id: 'variety-welcome-to-ohio',
    title: 'Caos em Ohio (SML Style)',
    category: 'variety',
    categoryLabel: 'Variety & SML',
    src: '/thumbs/variety-welcome-to-ohio.webp',
    thumbSrc: '/thumbs/sm/variety-welcome-to-ohio.webp',
    alt: 'Thumbnail Variety com dois personagens em pânico fugindo de explosões e meteoro diante de placa Welcome to Ohio',
    featured: true,
    contrastFocus: 'Tensão cinemática + Placa em primeiro plano',
    dominantPalette: '#FF6AD5',
    whatsappPrompt:
      'Olá! Vi a thumbnail "Caos em Ohio" (Variety/SML) no portfólio da Fleesh Studios e quero uma capa com essa energia.',
  },
  {
    id: 'roblox-icy-road-supercars',
    title: 'Icy Road: Superesportivos no Gelo',
    category: 'roblox',
    categoryLabel: 'Roblox',
    src: '/thumbs/roblox-icy-road-supercars.webp',
    thumbSrc: '/thumbs/sm/roblox-icy-road-supercars.webp',
    alt: 'Thumbnail Roblox com carros esportivos derrapando no gelo quebrado e personagem correndo em destaque',
    featured: false,
    contrastFocus: 'Composição diagonal dinâmica + Motion blur',
    dominantPalette: '#8358FF',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "Icy Road: Superesportivos no Gelo" (Roblox). Quero fazer uma capa com carros e ação.',
  },
  {
    id: 'roblox-butcher-chef',
    title: 'O Açougueiro Gigante',
    category: 'roblox',
    categoryLabel: 'Roblox',
    src: '/thumbs/roblox-butcher-chef.webp',
    thumbSrc: '/thumbs/sm/roblox-butcher-chef.webp',
    alt: 'Thumbnail Roblox de terror com chef gigante de olhos vermelhos e cutelo ameaçando personagem fantasiado de frango',
    featured: false,
    contrastFocus: 'Escala desproporcional + Brilho metálico no cutelo',
    dominantPalette: '#8358FF',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "O Açougueiro Gigante" (Roblox). Quero uma capa nessa pegada de terror/suspense.',
  },
  {
    id: 'minecraft-sleepover',
    title: 'Festa do Pijama no Minecraft',
    category: 'minecraft',
    categoryLabel: 'Minecraft',
    src: '/thumbs/minecraft-sleepover.webp',
    thumbSrc: '/thumbs/sm/minecraft-sleepover.webp',
    alt: 'Thumbnail Minecraft mostrando três personagens deitados lado a lado com expressão de susto no centro',
    featured: false,
    contrastFocus: 'Leitura em três blocos + Expressão cômica central',
    dominantPalette: '#7FE3F5',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "Festa do Pijama no Minecraft". Gostaria de encomendar uma capa de roleplay.',
  },
  {
    id: 'roblox-doors-seek-fire',
    title: 'Fuga do Seek em Chamas',
    category: 'roblox',
    categoryLabel: 'Roblox',
    src: '/thumbs/roblox-doors-seek-fire.webp',
    thumbSrc: '/thumbs/sm/roblox-doors-seek-fire.webp',
    alt: 'Thumbnail Roblox com corredor em chamas e dois criadores correndo da silhueta do Seek',
    featured: false,
    contrastFocus: 'Silhueta preta contra fogo laranja + Profundidade',
    dominantPalette: '#8358FF',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "Fuga do Seek em Chamas" (Roblox). Quero uma capa de perseguição/ação.',
  },
  {
    id: 'roblox-dunk-simulator',
    title: 'Enterrada Além dos 999M',
    category: 'roblox',
    categoryLabel: 'Roblox',
    src: '/thumbs/roblox-dunk-simulator.webp',
    thumbSrc: '/thumbs/sm/roblox-dunk-simulator.webp',
    alt: 'Thumbnail Roblox de basquete no espaço mostrando jogador enterrando bola flamejante em tabela gigante com números de multiplicador',
    featured: false,
    contrastFocus: 'Ângulo grande-angular extremo + Energia elétrica',
    dominantPalette: '#8358FF',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "Enterrada Além dos 999M" (Roblox Simulator). Quero encomendar uma capa assim.',
  },
  {
    id: 'minecraft-premier-rendez-vous',
    title: 'Primeiro Encontro no Barco',
    category: 'minecraft',
    categoryLabel: 'Minecraft',
    src: '/thumbs/minecraft-premier-rendez-vous.webp',
    thumbSrc: '/thumbs/sm/minecraft-premier-rendez-vous.webp',
    alt: 'Thumbnail Minecraft com casal em barco ao pôr do sol vibrante e balão de coração pixelado',
    featured: false,
    contrastFocus: 'Paleta quente de pôr do sol + Enquadramento central limpo',
    dominantPalette: '#7FE3F5',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "Primeiro Encontro no Barco" (Minecraft). Quero uma capa de história/roleplay.',
  },
  {
    id: 'roblox-arm-wrestle-crack',
    title: 'Queda de Braço Extrema',
    category: 'roblox',
    categoryLabel: 'Roblox',
    src: '/thumbs/roblox-arm-wrestle-crack.webp',
    thumbSrc: '/thumbs/sm/roblox-arm-wrestle-crack.webp',
    alt: 'Thumbnail Roblox de disputa de queda de braço exagerada com contraste de expressão vitoriosa e choque',
    featured: false,
    contrastFocus: 'Exagero cartunesco + Contraste de forças claro',
    dominantPalette: '#8358FF',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "Queda de Braço Extrema" (Roblox). Quero encomendar uma capa de desafio.',
  },
  {
    id: 'variety-jeffy-megaphone',
    title: 'Megafone no Volume Máximo',
    category: 'variety',
    categoryLabel: 'Variety & SML',
    src: '/thumbs/variety-jeffy-megaphone.webp',
    thumbSrc: '/thumbs/sm/variety-jeffy-megaphone.webp',
    alt: 'Thumbnail Variety com personagem gritando no megafone ao lado de outro personagem relaxado com fones de ouvido',
    featured: false,
    contrastFocus: 'Contraste de humor + Ondas sonoras direcionais',
    dominantPalette: '#FF6AD5',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "Megafone no Volume Máximo" (Variety/SML). Quero encomendar uma capa de comédia.',
  },
  {
    id: 'roblox-spider-mutation',
    title: 'Mutação Aranha 50/50',
    category: 'roblox',
    categoryLabel: 'Roblox',
    src: '/thumbs/roblox-spider-mutation.webp',
    thumbSrc: '/thumbs/sm/roblox-spider-mutation.webp',
    alt: 'Thumbnail Roblox mostrando personagem dividido ao meio entre forma humana e criatura aranha mecânica com raios',
    featured: false,
    contrastFocus: 'Divisão simétrica (Transformação) + Raios de borda',
    dominantPalette: '#8358FF',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "Mutação Aranha 50/50" (Roblox). Quero uma capa com efeito de transformação.',
  },
  {
    id: 'minecraft-grimace-shake',
    title: 'O Mistério do Grimace Shake',
    category: 'minecraft',
    categoryLabel: 'Minecraft',
    src: '/thumbs/minecraft-grimace-shake.webp',
    thumbSrc: '/thumbs/sm/minecraft-grimace-shake.webp',
    alt: 'Thumbnail Minecraft com personagem roxo segurando copo e pato de terno caído no chão com líquido roxo',
    featured: false,
    contrastFocus: 'Silhueta roxa saturada contra céu azul e grama verde',
    dominantPalette: '#7FE3F5',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "O Mistério do Grimace Shake" (Minecraft). Quero fazer uma capa nesse formato.',
  },
  {
    id: 'roblox-skibidi-choice',
    title: 'Escolha Certa ou Errada',
    category: 'roblox',
    categoryLabel: 'Roblox',
    src: '/thumbs/roblox-skibidi-choice.webp',
    thumbSrc: '/thumbs/sm/roblox-skibidi-choice.webp',
    alt: 'Thumbnail Roblox com dois personagens assustados à esquerda e três opções à direita com marcas de X vermelho e V verde',
    featured: false,
    contrastFocus: 'Gatilho visual de escolha (X vs Check verde)',
    dominantPalette: '#8358FF',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "Escolha Certa ou Errada" (Roblox). Quero encomendar uma capa interativa nesse estilo.',
  },
  {
    id: 'minecraft-caught-stealing',
    title: 'Flagrado na Câmera de Segurança',
    category: 'minecraft',
    categoryLabel: 'Minecraft',
    src: '/thumbs/minecraft-caught-stealing.webp',
    thumbSrc: '/thumbs/sm/minecraft-caught-stealing.webp',
    alt: 'Thumbnail Minecraft dividida entre monitor REC mostrando furto de baú e personagem chorando em choque à direita',
    featured: false,
    contrastFocus: 'Split-screen narrativo (Causa e Reação)',
    dominantPalette: '#7FE3F5',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "Flagrado na Câmera de Segurança" (Minecraft). Quero uma capa dividida assim.',
  },
  {
    id: 'roblox-toxic-foot-monster',
    title: 'Monstro Tóxico do Esgoto',
    category: 'roblox',
    categoryLabel: 'Roblox',
    src: '/thumbs/roblox-toxic-foot-monster.webp',
    thumbSrc: '/thumbs/sm/roblox-toxic-foot-monster.webp',
    alt: 'Thumbnail Roblox de humor e perseguição com criatura gigante laranja em corredor com slime verde neon',
    featured: false,
    contrastFocus: 'Contraste complementar laranja vs verde ácido',
    dominantPalette: '#8358FF',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "Monstro Tóxico do Esgoto" (Roblox). Quero uma capa nesse estilo cartunesco.',
  },
  {
    id: 'roblox-giant-baby-daycare',
    title: 'Creche do Bebê Caótico',
    category: 'roblox',
    categoryLabel: 'Roblox',
    src: '/thumbs/roblox-giant-baby-daycare.webp',
    thumbSrc: '/thumbs/sm/roblox-giant-baby-daycare.webp',
    alt: 'Thumbnail Roblox com bebê gigante no centro segurando dois personagens chorando com efeito de brilho e fumaça verde',
    featured: false,
    contrastFocus: 'Pirâmide central + Contraste de tamanho extremo',
    dominantPalette: '#8358FF',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "Creche do Bebê Caótico" (Roblox). Quero fazer uma capa de humor/aventura.',
  },
  {
    id: 'minecraft-secret-fanboy',
    title: 'O Fã Secreto na Masmorra',
    category: 'minecraft',
    categoryLabel: 'Minecraft',
    src: '/thumbs/minecraft-secret-fanboy.webp',
    thumbSrc: '/thumbs/sm/minecraft-secret-fanboy.webp',
    alt: 'Thumbnail Minecraft com cena dramática de roleplay em masmorra de pedra com contraste de corações vermelhos',
    featured: false,
    contrastFocus: 'Narrativa imediata sem depender de texto longo',
    dominantPalette: '#7FE3F5',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "O Fã Secreto na Masmorra" (Minecraft). Quero encomendar uma capa de história.',
  },
  {
    id: 'roblox-hospital-nightmare',
    title: 'Pesadelo no Hospital',
    category: 'roblox',
    categoryLabel: 'Roblox',
    src: '/thumbs/roblox-hospital-nightmare.webp',
    thumbSrc: '/thumbs/sm/roblox-hospital-nightmare.webp',
    alt: 'Thumbnail Roblox de terror hospitalar com iluminação amarelada de emergência e contraste dramático',
    featured: false,
    contrastFocus: 'Iluminação clínica quente/fria + Tensão de quadro',
    dominantPalette: '#8358FF',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "Pesadelo no Hospital" (Roblox). Quero uma capa nessa linha de suspense.',
  },
  {
    id: 'minecraft-grimace-park',
    title: 'Encontro no Parque do Minecraft',
    category: 'minecraft',
    categoryLabel: 'Minecraft',
    src: '/thumbs/minecraft-grimace-park.webp',
    thumbSrc: '/thumbs/sm/minecraft-grimace-park.webp',
    alt: 'Thumbnail Minecraft em parque ensolarado com três personagens em perspectiva de profundidade',
    featured: false,
    contrastFocus: 'Profundidade em três planos + Cores saturadas',
    dominantPalette: '#7FE3F5',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "Encontro no Parque do Minecraft". Quero encomendar uma capa para série.',
  },
  {
    id: 'minecraft-stole-boyfriend',
    title: 'Triângulo Amoroso no Minecraft',
    category: 'minecraft',
    categoryLabel: 'Minecraft',
    src: '/thumbs/minecraft-stole-boyfriend.webp',
    thumbSrc: '/thumbs/sm/minecraft-stole-boyfriend.webp',
    alt: 'Thumbnail Minecraft mostrando casal feliz no centro esquerdo e personagem chorando à direita com texto de manchete',
    featured: false,
    contrastFocus: 'Leitura esquerda-para-direita + Conflito emocional claro',
    dominantPalette: '#7FE3F5',
    whatsappPrompt:
      'Olá! Gostei da thumbnail "Triângulo Amoroso no Minecraft". Quero uma capa de roleplay com foco em expressão.',
  },
];

export const FEED_SIMULATOR_DATA: FeedSimulatorSample[] = [
  {
    id: 'sim-roblox',
    tabLabel: 'Roblox · Ação/Terror',
    categoryLabel: 'Roblox',
    videoTitle: 'SOBREVIVEMOS AOS RAINBOW FRIENDS NO MODO IMPOSSÍVEL!',
    channelName: 'Canal Exemplo',
    viewsLabel: '418 mil visualizações · há 2 dias',
    duration: '14:28',
    src: '/thumbs/roblox-rainbow-friends.webp',
    thumbSrc: '/thumbs/sm/roblox-rainbow-friends.webp',
    focalNote: 'Personagem à esquerda no terço primário olhando e correndo para fora da ameaça.',
    separationNote: 'Luz de recorte amarela e azul separa cada monstro do fundo escuro do corredor.',
    safeZoneNote: 'Canto inferior direito limpo: o timecode 14:28 do YouTube não cobre nenhum rosto.',
  },
  {
    id: 'sim-minecraft',
    tabLabel: 'Minecraft · Roleplay',
    categoryLabel: 'Minecraft',
    videoTitle: 'O TESTE DO AMOR DEU 100% E OLHA NO QUE DEU...',
    channelName: 'Série Minecraft',
    viewsLabel: '290 mil visualizações · há 5 dias',
    duration: '11:04',
    src: '/thumbs/minecraft-love-tester.webp',
    thumbSrc: '/thumbs/sm/minecraft-love-tester.webp',
    focalNote: 'Dois rostos grandes com contorno branco geram leitura imediata mesmo no celular.',
    separationNote: 'Coração vermelho central atua como ímã visual com número legível em miniatura.',
    safeZoneNote: 'Nenhuma informação crítica fica escondida pelo selo de duração 11:04.',
  },
  {
    id: 'sim-variety',
    tabLabel: 'Variety · Comédia',
    categoryLabel: 'Variety & SML',
    videoTitle: 'NUNCA DIRIJA POR ESSA RUA À MEIA-NOITE (DEU TUDO ERRADO)',
    channelName: 'Variety Plays',
    viewsLabel: '185 mil visualizações · há 1 semana',
    duration: '16:52',
    src: '/thumbs/variety-welcome-to-ohio.webp',
    thumbSrc: '/thumbs/sm/variety-welcome-to-ohio.webp',
    focalNote: 'Expressão exagerada de pânico em escala gigante captura emoção antes de ler o título.',
    separationNote: 'Placa de madeira e fogo em planos distintos criam sensação imediata de profundidade.',
    safeZoneNote: 'Rosto secundário posicionado acima da área reservada ao timecode do player.',
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'avulsa',
    title: 'Thumbnail Avulsa Sob Medida',
    audience: 'Para vídeos principais e lançamentos',
    description:
      'Capa única construída do zero com renderização, pose personalizada, tratamento de iluminação e testes de leitura em miniatura.',
    deliverables: [
      'Direção de cena e composição exclusiva 16:9',
      'Entrega em 1920×1080 pronta para o YouTube Studio',
      'Rodada de ajustes finos inclusa',
    ],
    ctaLabel: 'Pedir capa avulsa',
    whatsappMessage:
      'Olá! Quero orçar uma Thumbnail Avulsa Sob Medida com a Fleesh Studios.',
  },
  {
    id: 'recorrente',
    title: 'Pacote Recorrente para Canal',
    audience: 'Para criadores com rotina semanal ou diária',
    description:
      'Fluxo contínuo de produção com prioridade de fila e identidade visual consistente para manter o padrão clicável do canal inteiro.',
    deliverables: [
      'Pacotes de 4, 8 ou mais capas por mês',
      'Padronização de estilo para séries e playlists',
      'Comunicação ágil direto no WhatsApp ou Discord',
    ],
    ctaLabel: 'Montar pacote mensal',
    whatsappMessage:
      'Olá! Quero conversar sobre um Pacote Recorrente de Thumbnails para o meu canal.',
    highlighted: true,
  },
  {
    id: 'ab-test',
    title: 'Pack Teste A/B do YouTube',
    audience: 'Para otimizar CTR com Test & Compare',
    description:
      'Duas abordagens visuais pensadas para o recurso nativo de Teste A/B do YouTube: variação de expressão, foco ou enquadramento.',
    deliverables: [
      '2 variações estratégicas da mesma pauta',
      'Hipóteses visuais distintas de ponto focal',
      'Ideal para vídeos de alto potencial de algoritmo',
    ],
    ctaLabel: 'Orçar variações A/B',
    whatsappMessage:
      'Olá! Tenho interesse no Pack Teste A/B de Thumbnails para testar no YouTube Studio.',
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: '01',
    title: 'Ideia e Briefing Rápido',
    description:
      'Você manda o título provisório ou o resumo da cena pelo WhatsApp ou Discord, junto com a skin, personagem ou referências que quiser usar.',
    meta: 'WhatsApp ou Discord · ~5 min',
  },
  {
    stepNumber: '02',
    title: 'Pose, Render 3D e Direção de Luz',
    description:
      'Montamos o enquadramento pensado para tela de celular, trabalhamos a expressão dos personagens, separamos planos com rim light e limpamos o fundo.',
    meta: 'Foco em leitura mobile 16:9',
  },
  {
    stepNumber: '03',
    title: 'Ajuste Fino e Arquivo Final',
    description:
      'Você valida a prévia, ajustamos qualquer detalhe necessário e recebe o arquivo final em Full HD pronto para subir e disputar cliques no feed.',
    meta: '1920×1080px · Pronta para publicar',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Para quais jogos e estilos de canal a Fleesh produz?',
    answer:
      'Nosso foco principal está em Roblox, Minecraft e Variety Games (incluindo narrativas, roleplay, terror, desafios e humor estilo SML), mas adaptamos a mesma engenharia visual de 3D, expressão e alto contraste para outros estilos de entretenimento no YouTube.',
  },
  {
    question: 'O que eu preciso enviar para encomendar uma thumbnail?',
    answer:
      'Apenas a ideia ou título do vídeo, o estilo desejado (você pode até clicar em uma das 22 capas do portfólio como referência) e, se for o caso, o nome da sua skin ou avatar do Roblox/Minecraft.',
  },
  {
    question: 'As capas já vêm com o tamanho e peso aceitos pelo YouTube?',
    answer:
      'Sim. Entregamos em proporção 16:9 Full HD (1920×1080px) dentro do limite de tamanho do YouTube Studio, já conferindo a leitura em miniatura e deixando a área do timecode limpa.',
  },
  {
    question: 'Posso pedir alterações depois de ver a prévia?',
    answer:
      'Sim. Antes do fechamento final você acompanha a composição para alinhar expressão, posição de elementos, cores ou texto caso o seu vídeo leve chamada curta na arte.',
  },
  {
    question: 'Por onde é mais rápido fechar pedido ou pacote?',
    answer:
      'Atendemos diretamente pelo Discord (/Fleesh) e por e-mail (fleeshworks@gmail.com).',
  },
];
