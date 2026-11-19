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
    behanceValue: 'Portfólio completo',
    copiedLabel: 'copiado ✦',
    footerTag: '✦ made in 16:9 ✦',
  },
  portfolio: {
    'minecraft-shenron-dragon': {
      title: 'Invocando o Dragão',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail de Minecraft com dragão verde gigante enrolado no céu de tempestade acima de personagem cercado de energia',
      contrastFocus: 'Escala épica + Brilho de raios',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Invocando o Dragão" (Minecraft). Quero uma capa épica nesse estilo.',
    },
    'roblox-legendary-scythe': {
      title: 'A Foice de 0,01%',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail de Roblox com personagem natalino ao lado de foice lendária vermelha brilhante e o selo "0,01%"',
      contrastFocus: 'Aura neon vermelha + Destaque de raridade',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "A Foice de 0,01%" (Roblox). Quero uma capa de item raro nesse estilo.',
    },
    'gaming-pink-kaiju': {
      title: 'Kaiju Rosa na Cidade',
      categoryLabel: 'Gaming',
      alt: 'Thumbnail gaming com criador assustado diante de um kaiju gigante de espinhos rosa destruindo uma cidade de blocos',
      contrastFocus: 'Reação facial + Ameaça em escala gigante',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Kaiju Rosa na Cidade" (Gaming). Quero uma capa de reação nesse estilo.',
    },
    'minecraft-cobblemon-400-days': {
      title: '400 Dias de Cobblemon',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail de Minecraft com criaturas lendárias ao redor de um titã dourado e o título "400 Dias Cobblemon"',
      contrastFocus: 'Composição radial + Contraluz divina',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "400 Dias de Cobblemon" (Minecraft). Quero uma capa de 100 dias nesse estilo.',
    },
    'roblox-the-throne': {
      title: 'O Trono de Bayoshin',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail de Roblox com personagem sentado num trono sombrio em salão vermelho infernal sob ícones de caveira',
      contrastFocus: 'Simetria + Névoa vermelha',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "O Trono de Bayoshin" (Roblox). Quero uma capa sombria nesse estilo.',
    },
    'minecraft-knight-hardcore': {
      title: 'O Hardcore do Cavaleiro',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail de Minecraft Hardcore com cavaleiro de armadura montado liderando aliados diante de castelo em chamas',
      contrastFocus: 'Pose heroica + Contraluz de fogo',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "O Hardcore do Cavaleiro" (Minecraft). Quero uma capa hardcore nesse estilo.',
    },
    'gaming-secret-turtle-base': {
      title: 'A Base Secreta na Tartaruga',
      categoryLabel: 'Gaming',
      alt: 'Thumbnail gaming com criador sorridente fazendo sinal de silêncio ao lado de uma tartaruga com escada secreta',
      contrastFocus: 'Gancho de segredo + Blocos de cor limpos',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "A Base Secreta na Tartaruga" (Gaming). Quero uma capa de construção secreta nesse estilo.',
    },
    'roblox-forge-blade': {
      title: 'Forjando a Lâmina',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail de Roblox com personagem martelando espada incandescente na bigorna entre faíscas na forja',
      contrastFocus: 'Partículas de faísca + Luz quente da forja',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Forjando a Lâmina" (Roblox). Quero uma capa de criação nesse estilo.',
    },
    'roblox-butcher-chef': {
      title: 'O Açougueiro Gigante',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail Roblox de terror com chef gigante de olhos vermelhos e cutelo ameaçando personagem fantasiado de frango',
      contrastFocus: 'Escala desproporcional + Brilho metálico no cutelo',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "O Açougueiro Gigante" (Roblox). Quero uma capa nessa pegada de terror/suspense.',
    },
    'minecraft-hardcore-inferno': {
      title: 'Inferno Hardcore',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail de Minecraft Hardcore com mob derretido gigante surgindo de uma paisagem vermelho-sangue',
      contrastFocus: 'Vermelho monocromático + Escala ameaçadora',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Inferno Hardcore" (Minecraft). Quero uma capa de terror nesse estilo.',
    },
    'gaming-tnt-ufo': {
      title: 'O OVNI de TNT',
      categoryLabel: 'Gaming',
      alt: 'Thumbnail gaming com criador gritando enquanto um feixe de OVNI derruba blocos de TNT numa grade vermelha',
      contrastFocus: 'Reação facial + Foco no feixe de luz',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "O OVNI de TNT" (Gaming). Quero uma capa de reação nesse estilo.',
    },
    'roblox-hidden-eye': {
      title: 'O Olho nas Folhas',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail de Roblox com personagem diante de um olho azul gigante brilhando dentro de um monte de folhas de outono',
      contrastFocus: 'Cores complementares + Gancho de mistério',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "O Olho nas Folhas" (Roblox). Quero uma capa de mistério nesse estilo.',
    },
    'minecraft-soulrend': {
      title: '100 Dias em Soulrend',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail de Minecraft com guerreiros de armadura sombria erguendo armas azuis brilhantes sob o título "100 Days Soulrend"',
      contrastFocus: 'Brilho frio + Detalhe de armadura escura',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "100 Dias em Soulrend" (Minecraft). Quero uma capa de 100 dias nesse estilo.',
    },
    'gaming-me-in-roblox': {
      title: 'Esse Sou Eu no Roblox',
      categoryLabel: 'Gaming',
      alt: 'Thumbnail gaming com o rosto do criador num avatar de blocos apontado por uma seta vermelha "ME"',
      contrastFocus: 'Seta de destaque + Paleta saturada',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Esse Sou Eu no Roblox" (Gaming). Quero uma capa de reação nesse estilo.',
    },
    'roblox-no-digging': {
      title: 'Proibido Cavar',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail de Roblox com personagem segurando pá diante de um buraco gigante cheio de dentes e uma placa "Proibido Cavar"',
      contrastFocus: 'Dentes em radial + Placa de aviso',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Proibido Cavar" (Roblox). Quero uma capa de desafio nesse estilo.',
    },
    'minecraft-oceanblock': {
      title: '100 Dias no OceanBlock 2',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail de Minecraft com personagem numa jangada cercada por tentáculos roxos gigantes saindo do mar',
      contrastFocus: 'Linha d\'água dividida + Ameaça roxa',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "100 Dias no OceanBlock 2" (Minecraft). Quero uma capa de 100 dias nesse estilo.',
    },
    'gaming-run': {
      title: 'CORRE',
      categoryLabel: 'Gaming',
      alt: 'Thumbnail gaming com criador chocado cobrindo a boca ao lado de um "RUN" gigante gravado num mapa de blocos',
      contrastFocus: 'Reação facial + Detalhe circulado',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "CORRE" (Gaming). Quero uma capa de reação nesse estilo.',
    },
    'roblox-spider-mutation': {
      title: 'Mutação Aranha 50/50',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail Roblox mostrando personagem dividido ao meio entre forma humana e criatura aranha mecânica com raios',
      contrastFocus: 'Divisão simétrica (Transformação) + Raios de borda',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Mutação Aranha 50/50" (Roblox). Quero uma capa com efeito de transformação.',
    },
    'roblox-hour-23': {
      title: 'Hora 23',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail de Roblox com personagem de roupa dourada deitado na neve ao lado de armas de gelo e "Hora 23" escrito à mão',
      contrastFocus: 'Vista de cima + Texto à mão',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Hora 23" (Roblox). Quero uma capa de sobrevivência nesse estilo.',
    },
    'minecraft-better-minecraft': {
      title: 'Better Minecraft',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail de Minecraft com herói de armadura de diamante ladeado por guerreiros encantados e raios',
      contrastFocus: 'Brilho turquesa + Composição em triângulo',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Better Minecraft" (Minecraft). Quero uma capa de mods nesse estilo.',
    },
    'gaming-tornado': {
      title: 'Escondidos do Tornado',
      categoryLabel: 'Gaming',
      alt: 'Thumbnail gaming com três criadores apavorados encolhidos junto a uma parede enquanto um tornado arrasa um campo de blocos',
      contrastFocus: 'Reação em grupo + Detritos em movimento',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Escondidos do Tornado" (Gaming). Quero uma capa de reação nesse estilo.',
    },
    'roblox-day-99': {
      title: 'Dia 99',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail de Roblox com personagem escondido numa árvore nevada fugindo de renas e criaturas monstruosas',
      contrastFocus: 'Paleta de neve + Fileira de criaturas',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Dia 99" (Roblox). Quero uma capa de sobrevivência nesse estilo.',
    },
    'minecraft-arcane-frontier': {
      title: 'Project: Arcane Frontier',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail de Minecraft com heroína de cabelo rosa segurando espada de gelo entre um cavaleiro sombrio e um guerreiro de fogo',
      contrastFocus: 'Divisão roxo/laranja + Brilho mágico',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Project: Arcane Frontier" (Minecraft). Quero uma capa de mods nesse estilo.',
    },
    'gaming-living-village': {
      title: 'A Vila Viva',
      categoryLabel: 'Gaming',
      alt: 'Thumbnail gaming com criador chocado ao lado de uma casa de Minecraft com olhos brilhantes e boca cheia de dentes',
      contrastFocus: 'Reação facial + Brilho noturno',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "A Vila Viva" (Gaming). Quero uma capa de terror nesse estilo.',
    },
    'roblox-supreme-egg': {
      title: 'O Ovo Supremo',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail de Roblox com personagem diante de um ovo verde gigante cheio de espinhos pesando "999.659.931 KG"',
      contrastFocus: 'Título arco-íris + Brilho verde tóxico',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "O Ovo Supremo" (Roblox). Quero uma capa de simulador nesse estilo.',
    },
    'minecraft-dino-rider': {
      title: 'O Domador de Dinossauro',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail de Minecraft com personagem de lança montado num dinossauro gigante de armadura sob a lua cheia',
      contrastFocus: 'Contorno de luar + Ângulo dinâmico',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "O Domador de Dinossauro" (Minecraft). Quero uma capa de aventura nesse estilo.',
    },
    'roblox-toxic-foot-monster': {
      title: 'Monstro Tóxico do Esgoto',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail Roblox de humor e perseguição com criatura gigante laranja em corredor com slime verde neon',
      contrastFocus: 'Contraste complementar laranja vs verde ácido',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Monstro Tóxico do Esgoto" (Roblox). Quero uma capa nesse estilo cartunesco.',
    },
    'gaming-brick-pit': {
      title: 'Nadando em Peças',
      categoryLabel: 'Gaming',
      alt: 'Thumbnail gaming com bonequinho comemorando ao sair de um mar de peças de montar coloridas',
      contrastFocus: 'Cores primárias vivas + Pose alegre',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Nadando em Peças" (Gaming). Quero uma capa divertida nesse estilo.',
    },
    'roblox-supermarket-hide': {
      title: 'Escondido no Mercado',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail de Roblox com personagem escondido atrás de papel higiênico enquanto seguranças com lanternas vasculham os corredores',
      contrastFocus: 'Profundidade de campo + Tensão de lanterna',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Escondido no Mercado" (Roblox). Quero uma capa de esconde-esconde nesse estilo.',
    },
    'minecraft-monster-squad': {
      title: 'O Esquadrão dos Monstros',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail de Minecraft com personagem armado entre criaturas de terror numa tempestade de areia',
      contrastFocus: 'Névoa de poeira + Silhuetas de criaturas',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "O Esquadrão dos Monstros" (Minecraft). Quero uma capa de terror nesse estilo.',
    },
    'gaming-red-eyes': {
      title: 'Olhos Vermelhos na Floresta',
      categoryLabel: 'Gaming',
      alt: 'Thumbnail gaming com três criadores assustados espiando enquanto um monstro-árvore de olhos vermelhos avança sobre eles',
      contrastFocus: 'Reação em grupo + Olhos brilhantes',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Olhos Vermelhos na Floresta" (Gaming). Quero uma capa de terror nesse estilo.',
    },
    'roblox-forbidden-pit': {
      title: 'O Poço Proibido',
      categoryLabel: 'Roblox',
      alt: 'Thumbnail de Roblox com personagem espiando um poço de pedra onde uma criatura azul brilhante se esconde',
      contrastFocus: 'Enquadramento de cima + Foco no brilho azul',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "O Poço Proibido" (Roblox). Quero uma capa de mistério nesse estilo.',
    },
    'minecraft-100-days-zombies': {
      title: '100 Dias de Zumbis',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail de Minecraft Hardcore com personagem de espingarda cercado por zumbis de olhos vermelhos',
      contrastFocus: 'Detalhes de olhos vermelhos + Pressão da horda',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "100 Dias de Zumbis" (Minecraft). Quero uma capa de 100 dias nesse estilo.',
    },
    'minecraft-pocket-monsters': {
      title: 'Capturando Todos',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail de Minecraft com versões em blocos de monstrinhos de bolso famosos avançando entre faíscas elétricas',
      contrastFocus: 'Paleta quente + Fileira de personagens',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Capturando Todos" (Minecraft). Quero uma capa de mods nesse estilo.',
    },
    'minecraft-infinite-hearts': {
      title: 'Corações Infinitos',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail de Minecraft com guerreira de armadura rosa brilhante empunhando armas encantadas diante de uma parede de corações',
      contrastFocus: 'Fundo com padrão + Brilho elétrico',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "Corações Infinitos" (Minecraft). Quero uma capa de desafio nesse estilo.',
    },
    'minecraft-casket-of-reveries': {
      title: 'The Casket of Reveries',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail de Minecraft com herói de armadura branca encarando um golem gigante de glifos rosa neon',
      contrastFocus: 'Rosa neon + Contraste de tamanho',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "The Casket of Reveries" (Minecraft). Quero uma capa de mods nesse estilo.',
    },
    'minecraft-100-players': {
      title: '100 Jogadores Hardcore',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail de Minecraft Hardcore com soldados de máscara de gás num deserto sob uma explosão nuclear',
      contrastFocus: 'Paleta apocalíptica + Enquadramento de esquadrão',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "100 Jogadores Hardcore" (Minecraft). Quero uma capa de evento nesse estilo.',
    },
    'minecraft-legendary-birds': {
      title: 'As Aves Lendárias',
      categoryLabel: 'Minecraft',
      alt: 'Thumbnail de Minecraft com personagem de terno ladeado por aves lendárias de fogo, gelo e raio',
      contrastFocus: 'Elementos em três cores + Simetria',
      whatsappPrompt:
        'Olá! Gostei da thumbnail "As Aves Lendárias" (Minecraft). Quero uma capa de mods nesse estilo.',
    },
  },
};
