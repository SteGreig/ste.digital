import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      "2xs": "375px",
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1900px",
    },
    fontFamily: {
      primary: ["var(--font-poppins)", "sans-serif"],
      body: ["var(--font-nunito_sans)", "sans-serif"],
    },
    borderRadius: {
      DEFAULT: '5px',
      'full' : '9999px',
    },
    extend: {
      colors: {
        'navy': {
          DEFAULT: '#141A29',
          50: '#6B81B7',
          100: '#5A72AF',
          200: '#465B90',
          300: '#35456E',
          400: '#25304B',
          500: '#141A29',
          600: '#020203',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
        'purple': {
          DEFAULT: 'var(--purple)',
          50: '#F3A6FF',
          100: '#F091FF',
          200: '#EA68FF',
          300: '#E440FF',
          400: '#DF17FF',
          500: 'var(--purple)',
          600: '#9C00B5',
          700: '#6B007D',
          800: '#3B0045',
          900: '#0B000D',
          950: '#000000'
        },
        'pink': {
          DEFAULT: 'var(--pink)',
          50: '#FFD1F2',
          100: '#FFBCEC',
          200: '#FF93E1',
          300: '#FF6BD6',
          400: '#FF42CA',
          500: 'var(--pink)',
          600: '#E000A2',
          700: '#A80079',
          800: '#700051',
          900: '#380028',
          950: '#1C0014'
        },
      },
      hueRotate: {
        '20': '20deg',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
export default config
