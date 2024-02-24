import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'titles': ['var(--font-rubik)'],
        'subheadings': ['var(--font-source-code-pro)'],
        'text': ['var(--font-roboto-mono)']
      },
      colors: {
        'surface': '#121212',
        '01dp': '#1d1d1d',
        '02dp': '#212121',
        '03dp': '#242424',
        '04dp': '#272727',
        '06dp': '#2c2c2c',
        '08dp': '#2d2d2d',
        '12dp': '#323232',
        '16dp': '#353535',
        '24dp': '#383838',
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f4901d",
          "secondary": "#ffffff",
          "accent": "#ffffff",
          "neutral": "#ffffff",
          "base-100": "#121212",
          "info": "#ffffff",
          "success": "#4bb543",
          "warning": "#ffcc00",
          "error": "#cc0000",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography')
  ],
}
export default config
