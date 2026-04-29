/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#040404',
        surface: '#0A0A0C',
        panel: '#121216',
        gold: {
          200: '#F8E7B4',
          300: '#EED28B',
          400: '#D6B86D',
          500: '#BEA15A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Plus Jakarta Sans', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glass: '0 12px 40px rgba(0, 0, 0, 0.48)',
        glow: '0 0 0 1px rgba(214, 184, 109, 0.35), 0 24px 54px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 15% 10%, rgba(214,184,109,0.17), transparent 36%), radial-gradient(circle at 82% 6%, rgba(190,161,90,0.14), transparent 30%), radial-gradient(circle at 40% 70%, rgba(255,255,255,0.05), transparent 35%)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
