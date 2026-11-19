import type { TranslationDictionary } from './types';

export const pt: TranslationDictionary = {
  htmlLang: 'pt-BR',
  ogLocale: 'pt_BR',
  seo: {
    title: 'Fleesh Studios — Atelier de thumbnails para YouTube',
    description:
      'Atelier de direção de arte que pinta thumbnails 3D para criadores de Roblox, Minecraft e Variety Games. Cor, expressão e leitura instantânea no feed.',
    schemaDescription:
      'Portfólio e estúdio especializado em thumbnails para YouTube (Roblox, Minecraft e Variety Games) com foco em leitura imediata no celular, expressão 3D e alto contraste.',
    skipToContent: 'Ir para o conteúdo',
  },
  header: {
    homeAria: 'Fleesh Studios — início',
    navAria: 'Principal',
    menuWord: 'Menu',
    closeWord: 'Fechar',
    openSrPrefix: 'Abrir ',
    links: {
      top: 'Início',
      manifesto: 'Manifesto',
      gallery: 'Galeria',
      contact: 'Contato',
    },
    collectionsTitle: 'Coleções',
    socialTitle: 'Social',
    languageTitle: 'Idioma',
    emailLabel: 'E-mail',
    langSwitcherAria: 'Seletor de idioma',
  },
  hero: {
    eyebrow: '✦ Minecraft · Roblox · Gaming · Variety ✦',
    subtitle: 'O melhor jeito de hypar seus vídeos.',
    cta: 'Entrar',
  },
  manifesto: {
    eyebrow: '✦ Por que thumbnails?',
    body: 'As Miniaturas ou Thumbnails, como chamamos as capas de vídeo, são o principal impulsionador do seus vídeos no Youtube, ter uma thumbnail criativa e chamativa vai fazer com que cada vez mais, novos espectadores cliquem no seu vídeo, além de deixar seu canal com uma aparência única e estilosa.',
    cursorLabel: 'Ver',
    openPieceLabel: (title) => `Abrir obra: ${title}`,
  },
  marquee: {
    ariaLabel: 'Manifesto em movimento',
    words: [
      'Cor',
      'Expressão',
      'Luz de recorte',
      'Drama',
      'Contraste',
      'Narrativa',
      'Escala',
      'Caos controlado',
    ],
  },
  gallery: {
    eyebrow: '✦ Exposição permanente',
    headingLead: 'A galeria',
    headingAccent: ' viva.',
    description:
      'Vinte e duas obras feitas para disputar atenção no feed. Toque em qualquer uma para ver em tela cheia e a técnica por trás.',
    filtersAria: 'Filtrar obras por jogo',
    filterAll: 'Todas',
    piecePrefix: 'Nº',
    cursorLabel: 'Ver',
    openPieceAria: (index, title) => `Abrir obra ${index}: ${title}`,
    behancePrefix: 'Coleções completas no Behance:',
    lightbox: {
      ariaLabel: 'Visualizador de obra',
      closeAria: 'Fechar',
      prevAria: 'Obra anterior',
      nextAria: 'Próxima obra',
      techniqueLabel: 'Técnica:',
      ctaLabel: 'Quero algo assim',
    },
  },
  contact: {
    headingLine1: 'Vamos criar',
    headingLine2Prefix: 'algo ',
    headingLine2Accent: 'absurdo.',
    behanceValue: 'Portfólio completo',
    copiedLabel: 'copiado ✦',
    footerTag: '✦ made in 16:9 ✦',
  },
  portfolio: {
    'roblox-rainbow-friends': {
      title: 'Fuga dos Rainbow Friends',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail Roblox com personagem fugindo segurando item diante dos monstros Blue, Green, Orange e Red',
      contrastFocus: 'Silhueta 3D + Rim Light quente/frio',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Fuga dos Rainbow Friends" (Roblox) no portfólio da Fleesh Studios. Quero fazer uma capa nesse estilo.',
    },
    'minecraft-love-tester': {
      title: 'Love Tester 100% no Minecraft',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail Minecraft com dois personagens expressivos lado a lado e medidor central de coração em 100%',
      contrastFocus: 'Simetria de reação + Contorno branco de alto contraste',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Love Tester 100% no Minecraft" no portfólio da Fleesh Studios. Quero uma capa nessa linha.',
    },
    'roblox-doors-crucifix': {
      title: 'DOORS: O Crucifixo Azul',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail Roblox DOORS com personagem segurando crucifixo brilhante selando entidade sombria com correntes azuis',
      contrastFocus: 'Iluminação ciano emissiva + Expressão de confiança',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "DOORS: O Crucifixo Azul" (Roblox) no portfólio. Quero encomendar uma nesse estilo.',
    },
    'variety-welcome-to-ohio': {
      title: 'Caos em Ohio (SML Style)',
      categoryLabel: 'Variety & SML',
      alt: 'Thumbnail Variety com dois personagens em pânico fugindo de explosões e meteoro diante de placa Welcome to Ohio',
      contrastFocus: 'Tensão cinemática + Placa em primeiro plano',
      whatsappPrompt:
        'Olá! Vi a thumbnail "Caos em Ohio" (Variety/SML) no portfólio da Fleesh Studios e quero uma capa com essa energia.',
    },
    'roblox-icy-road-supercars': {
      title: 'Icy Road: Superesportivos no Gelo',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail Roblox com carros esportivos derrapando no gelo quebrado e personagem correndo em destaque',
      contrastFocus: 'Composição diagonal dinâmica + Motion blur',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Icy Road: Superesportivos no Gelo" (Roblox). Quero fazer uma capa com carros e ação.',
    },
    'roblox-butcher-chef': {
      title: 'O Açougueiro Gigante',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail Roblox de terror com chef gigante de olhos vermelhos e cutelo ameaçando personagem fantasiado de frango',
      contrastFocus: 'Escala desproporcional + Brilho metálico no cutelo',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "O Açougueiro Gigante" (Roblox). Quero uma capa nessa pegada de terror/suspense.',
    },
    'minecraft-sleepover': {
      title: 'Festa do Pijama no Minecraft',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail Minecraft mostrando três personagens deitados lado a lado com expressão de susto no centro',
      contrastFocus: 'Leitura em três blocos + Expressão cômica central',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Festa do Pijama no Minecraft". Gostaria de encomendar uma capa de roleplay.',
    },
    'roblox-doors-seek-fire': {
      title: 'Fuga do Seek em Chamas',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail Roblox com corredor em chamas e dois criadores correndo da silhueta do Seek',
      contrastFocus: 'Silhueta preta contra fogo laranja + Profundidade',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Fuga do Seek em Chamas" (Roblox). Quero uma capa de perseguição/ação.',
    },
    'roblox-dunk-simulator': {
      title: 'Enterrada Além dos 999M',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail Roblox de basquete no espaço mostrando jogador enterrando bola flamejante em tabela gigante com números de multiplicador',
      contrastFocus: 'Ângulo grande-angular extremo + Energia elétrica',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Enterrada Além dos 999M" (Roblox Simulator). Quero encomendar uma capa assim.',
    },
    'minecraft-premier-rendez-vous': {
      title: 'Primeiro Encontro no Barco',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail Minecraft com casal em barco ao pôr do sol vibrante e balão de coração pixelado',
      contrastFocus: 'Paleta quente de pôr do sol + Enquadramento central limpo',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Primeiro Encontro no Barco" (Minecraft). Quero uma capa de história/roleplay.',
    },
    'roblox-arm-wrestle-crack': {
      title: 'Queda de Braço Extrema',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail Roblox de disputa de queda de braço exagerada com contraste de expressão vitoriosa e choque',
      contrastFocus: 'Exagero cartunesco + Contraste de forças claro',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Queda de Braço Extrema" (Roblox). Quero encomendar uma capa de desafio.',
    },
    'variety-jeffy-megaphone': {
      title: 'Megafone no Volume Máximo',
      categoryLabel: 'Variety & SML',
      alt: 'Thumbnail Variety com personagem gritando no megafone ao lado de outro personagem relaxado com fones de ouvido',
      contrastFocus: 'Contraste de humor + Ondas sonoras direcionais',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Megafone no Volume Máximo" (Variety/SML). Quero encomendar uma capa de comédia.',
    },
    'roblox-spider-mutation': {
      title: 'Mutação Aranha 50/50',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail Roblox mostrando personagem dividido ao meio entre forma humana e criatura aranha mecânica com raios',
      contrastFocus: 'Divisão simétrica (Transformação) + Raios de borda',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Mutação Aranha 50/50" (Roblox). Quero uma capa com efeito de transformação.',
    },
    'minecraft-grimace-shake': {
      title: 'O Mistério do Grimace Shake',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail Minecraft com personagem roxo segurando copo e pato de terno caído no chão com líquido roxo',
      contrastFocus: 'Silhueta roxa saturada contra céu azul e grama verde',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "O Mistério do Grimace Shake" (Minecraft). Quero fazer uma capa nesse formato.',
    },
    'roblox-skibidi-choice': {
      title: 'Escolha Certa ou Errada',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail Roblox com dois personagens assustados à esquerda e três opções à direita com marcas de X vermelho e V verde',
      contrastFocus: 'Gatilho visual de escolha (X vs Check verde)',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Escolha Certa ou Errada" (Roblox). Quero encomendar uma capa interativa nesse estilo.',
    },
    'minecraft-caught-stealing': {
      title: 'Flagrado na Câmera de Segurança',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail Minecraft dividida entre monitor REC mostrando furto de baú e personagem chorando em choque à direita',
      contrastFocus: 'Split-screen narrativo (Causa e Reação)',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Flagrado na Câmera de Segurança" (Minecraft). Quero uma capa dividida assim.',
    },
    'roblox-toxic-foot-monster': {
      title: 'Monstro Tóxico do Esgoto',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail Roblox de humor e perseguição com criatura gigante laranja em corredor com slime verde neon',
      contrastFocus: 'Contraste complementar laranja vs verde ácido',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Monstro Tóxico do Esgoto" (Roblox). Quero uma capa nesse estilo cartunesco.',
    },
    'roblox-giant-baby-daycare': {
      title: 'Creche do Bebê Caótico',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail Roblox com bebê gigante no centro segurando dois personagens chorando com efeito de brilho e fumaça verde',
      contrastFocus: 'Pirâmide central + Contraste de tamanho extremo',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Creche do Bebê Caótico" (Roblox). Quero fazer uma capa de humor/aventura.',
    },
    'minecraft-secret-fanboy': {
      title: 'O Fã Secreto na Masmorra',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail Minecraft com cena dramática de roleplay em masmorra de pedra com contraste de corações vermelhos',
      contrastFocus: 'Narrativa imediata sem depender de texto longo',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "O Fã Secreto na Masmorra" (Minecraft). Quero encomendar uma capa de história.',
    },
    'roblox-hospital-nightmare': {
      title: 'Pesadelo no Hospital',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail Roblox de terror hospitalar com iluminação amarelada de emergência e contraste dramático',
      contrastFocus: 'Iluminação clínica quente/fria + Tensão de quadro',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Pesadelo no Hospital" (Roblox). Quero uma capa nessa linha de suspense.',
    },
    'minecraft-grimace-park': {
      title: 'Encontro no Parque do Minecraft',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail Minecraft em parque ensolarado com três personagens em perspectiva de profundidade',
      contrastFocus: 'Profundidade em três planos + Cores saturadas',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Encontro no Parque do Minecraft". Quero encomendar uma capa para série.',
    },
    'minecraft-stole-boyfriend': {
      title: 'Triângulo Amoroso no Minecraft',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail Minecraft mostrando casal feliz no centro esquerdo e personagem chorando à direita com texto de manchete',
      contrastFocus: 'Leitura esquerda-para-direita + Conflito emocional claro',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Triângulo Amoroso no Minecraft". Quero uma capa de roleplay com foco em expressão.',
    },
  },
};
