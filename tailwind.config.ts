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
        dark: '#0B0D12',
        'dark-soft': '#111318',
        muted: '#A1A8B5',
        gold: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#1E4ED8',
        },
        warm: {
          50:  '#0E1117',
          100: '#111318',
          200: '#161A22',
          300: '#1E2538',
          400: '#A1A8B5',
        },
        border: '#252E47',
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
