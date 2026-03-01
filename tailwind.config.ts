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
        dark: '#1A1D23',
        'dark-soft': '#2C3140',
        muted: '#6B7280',
        gold: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#1E4ED8',
        },
        warm: {
          50:  '#F7F9FC',
          100: '#FFFFFF',
          200: '#F1F4F8',
          300: '#E2E8F0',
          400: '#94A3B8',
        },
        border: '#DDE3EC',
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
