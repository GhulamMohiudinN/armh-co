import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'charcoal-950': '#0D0F0E',
        'charcoal-900': '#141716',
        'charcoal-800': '#1E2320',
        'charcoal-700': '#2A2F2C',
        'charcoal-500': '#4A524D',
        'charcoal-300': '#9AA89F',
        'charcoal-100': '#E8EDEA',
        'emerald-600': '#059669',
        'emerald-500': '#10B981',
        'emerald-400': '#34D399',
        'emerald-100': '#D1FAE5',
        'emerald-50': '#ECFDF5',
        'off-white': '#F5F7F6',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
