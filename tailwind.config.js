/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Orbitron', 'HandelGothic', 'Inter', 'sans-serif'],
        eurostile: ['HandelGothic', 'sans-serif'],
        metallic: ['Orbitron', 'sans-serif'],
      },
      colors: {
        background: '#000000',
        'background-light': '#0A0A0A',
        primary: {
          DEFAULT: '#4834B8',
          50: '#D9D3F7',
          100: '#C5BBF4',
          200: '#9D8BEE',
          300: '#765CE8',
          400: '#4E2DE2',
          500: '#4834B8',
          600: '#362789',
          700: '#251B5B',
          800: '#130E2D',
          900: '#020102',
        },
        secondary: {
          DEFAULT: '#CC1A47',
          50: '#FBC3D3',
          100: '#F9AFC4',
          200: '#F687A6',
          300: '#F35F88',
          400: '#F0376A',
          500: '#CC1A47',
          600: '#991438',
          700: '#660D26',
          800: '#330714',
          900: '#000000',
        },
        accent: {
          DEFAULT: '#00B8CC',
          50: '#B8F4FF',
          100: '#A3F0FF',
          200: '#7AE9FF',
          300: '#52E2FF',
          400: '#29DBFF',
          500: '#00B8CC',
          600: '#008999',
          700: '#005B66',
          800: '#002C33',
          900: '#000000',
        },
        // Metallic color palette
        metallic: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        success: '#0D8A62',
        warning: '#CC991A',
        error: '#CC1A1A',
        neutral: {
          50: '#1A1A1A',
          100: '#262626',
          200: '#333333',
          300: '#404040',
          400: '#4D4D4D',
          500: '#666666',
          600: '#808080',
          700: '#999999',
          800: '#B3B3B3',
          900: '#CCCCCC',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave': 'wave 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'metallic-shimmer': 'metallic-shimmer 20s ease-in-out infinite',
        'metallic-wave': 'metallic-wave 3s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'metallic-shimmer': {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'translateX(-100px)'
          },
          '50%': { 
            opacity: '0.6',
            transform: 'translateX(100px)'
          },
        },
        'metallic-wave': {
          '0%, 100%': { 
            transform: 'scaleY(1)',
            opacity: '0.6'
          },
          '50%': { 
            transform: 'scaleY(1.5)',
            opacity: '0.8'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url("/src/assets/hero-bg.jpg")',
        'metallic-gradient': 'linear-gradient(135deg, #3f3f46 0%, #52525b 50%, #3f3f46 100%)',
        'metallic-texture': `
          radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%),
          linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)
        `,
      },
      boxShadow: {
        'metallic': '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'metallic-lg': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
};