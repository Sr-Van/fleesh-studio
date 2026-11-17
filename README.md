# Fleesh Studios — Atelier Y2K (v3)

Estética Y2K do site original: fundo de grade wireframe espacial (`public/y2k/bg*.webp`), logotipo cromado (`public/y2k/logo*.webp`) como protagonista da abertura e estrelas cromadas piscando. Acento violeta `#8358FF` + cromado. Conversão mínima: sem preços, sem formulário, sem barra fixa — só links de contato discretos.

Nova versão da landing/portfólio da Fleesh Studios em **Astro + Tailwind**, com tom artístico e autoral. Mantém a identidade atual (obsidiana, flame `#FF3B1F`, âmbar, Syne) e adiciona Instrument Serif itálico como voz "de galeria".

## O que mudou em relação à v2
- **Design:** logo cromado gigante com entrada em blur e flutuação, fundo wireframe fixo, grão de filme, tipografia Unbounded + Instrument Serif, texto cromado.
- **Animações:** título entra palavra a palavra, reveals por máscara/wipe, leque de capas com parallax 3D (mouse) ou "respiração" no scroll (celular), marquees que pausam fora da tela, cursor "Ver" em desktop. Tudo respeita `prefers-reduced-motion`.
- **Imagens:** placeholder com a cor dominante de cada obra → blur-up quando decodifica; `srcset` 640/1280 com `sizes` por layout; preload responsivo do LCP; lazy no resto; lightbox pré-carrega vizinhas.
- **Mobile-first:** menu em tela cheia, lightbox com swipe (lados = navegar, baixo = fechar), alvos de toque ≥ 44px, safe-area do iOS.

```bash
npm install
npm run dev
npm run build
```
