/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#0B0B0D',
          900: '#111115',
          850: '#17171C',
          800: '#1F1F26',
          700: '#2A2A33',
        },
        ink: {
          50: '#F5F4F0',
          200: '#B8B5AC',
          400: '#858279',
        },
        flame: {
          500: '#8358FF',
          600: '#6E42F5',
          700: '#5A2FDE',
          950: '#160F2E',
        },
        amber: {
          400: '#B9F2FF',
          500: '#7FE3F5',
          950: '#2A1D06',
        },
      },
      fontFamily: {
        display: ['"Unbounded"', '"Syne"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        frame: '0 14px 36px rgba(0, 0, 0, 0.55)',
        cta: '0 8px 24px rgba(131, 88, 255, 0.45)',
        card: '0 8px 20px rgba(0, 0, 0, 0.35)',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
      },
    },
  },
  plugins: [],
};
