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
        dark: '#1C1914',
        'dark-soft': '#2C2921',
        muted: '#857B6F',
        gold: {
          DEFAULT: '#B8966A',
          light: '#D4B48C',
          dark: '#8F6D43',
        },
        warm: {
          50: '#FAF7F2',
          100: '#F2EBE0',
          200: '#E6DDD0',
          300: '#D8CDB8',
          400: '#C5B49D',
        },
        border: '#DDD1C0',
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
