import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1A1A18',
        'dark-soft': '#2E2C29',
        muted: '#7A7570',
        gold: {
          DEFAULT: '#B8966A',
          light: '#D4B48C',
          dark: '#8F6D43',
        },
        warm: {
          50: '#FAF8F5',
          100: '#F4EFE8',
          200: '#EAE3D8',
          300: '#DDD4C5',
          400: '#C8BAA6',
        },
        border: '#E2D9CE',
      },
      fontFamily: {
        sans: [
          'var(--font-noto-sans-kr)',
          'Apple SD Gothic Neo',
          'Malgun Gothic',
          '맑은 고딕',
          'sans-serif',
        ],
      },
      lineHeight: {
        heading: '1.25',
        snugger: '1.35',
      },
      letterSpacing: {
        label: '0.28em',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
