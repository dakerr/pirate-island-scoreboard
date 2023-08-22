import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      tablet: '834px',
      desktop: '1248px',
    },
    colors: {
      white: '#FFFFFF',
      purple: '#3f3cbb',
      midnight: '#131313',
      metal: '#565584',
      'tahiti-blue': '#3ab7bf',
      'cool-white': '#ecebff',
      'bubble-gum': '#ff77e9',
      'copper-rust': '#78dcca',
    },
    extend: {
      backgroundImage: {
        'blurry-lens': "url('./src/assets/header.png')"
      },
      backgroundPosition: {
        "shift-left-top": "left -20em top -10em",
        "shift-top": "center top -1em"        
      }
    }
  },
  plugins: [require('daisyui')],
} satisfies Config
