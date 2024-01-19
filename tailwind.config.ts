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
      colors: {
        primary: '#45F5A1',
        secondary: 'rgba(69, 245, 161, 0.12)',
        grey: 'rgba(243, 244, 246, 0.20)',
        borderGray: '#E0E0E0',
        gamemode: 'linear-gradient(46deg, #131A14 1.97%, #253426 97.02%)'
      },
      boxShadow: {
        gameshadow: '-40px 24px 64px 0px rgba(0, 0, 0, 0.85), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);',
      },
    },
  },
  plugins: [],
}
export default config