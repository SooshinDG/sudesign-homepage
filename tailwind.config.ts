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
        dark: '#1C1C1A',
        'dark-soft': '#2C2A27',
        muted: '#6B6460',
        gold: {
          DEFAULT: '#C4A35A',
          light: '#DFC27A',
          dark: '#A07830',
        },
        warm: {
          50: '#FAFAF8',
          100: '#F5F0E8',
          200: '#EDE4D8',
          300: '#E0D5C5',
          400: '#CDBFA8',
        },
        border: '#E5DDD5',
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
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
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
