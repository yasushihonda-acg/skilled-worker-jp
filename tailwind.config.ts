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
        primary: {
          DEFAULT: '#00C4CC',
          50: '#E6FAFA',
          100: '#CCF5F6',
          200: '#99EBEE',
          300: '#66E1E5',
          400: '#33D7DC',
          500: '#00C4CC',
          600: '#00A3A9',
          700: '#007A7F',
          800: '#005255',
          900: '#00292B',
        },
        dark: {
          DEFAULT: '#323232',
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#B3B3B3',
          400: '#959595',
          500: '#787878',
          600: '#5A5A5A',
          700: '#3D3D3D',
          800: '#323232',
          900: '#1F1F1F',
        },
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
