/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['CenturyGothic', 'Orbitron', 'Inter', 'sans-serif'],
        century: ['CenturyGothic', 'sans-serif'],
        metallic: ['CenturyGothic', 'Orbitron', 'sans-serif'],
      },
      colors: {
        background: '#000000',
        'background-light': '#0F0F0F', // Much darker
        // Monochromatic primary colors - matte light gray
        primary: {
          DEFAULT: '#A0A0A0',
          50: '#F5F5F5',
          100: '#EEEEEE',
          200: '#E0E0E0',
          300: '#D0D0D0',
          400: '#B8B8B8',
          500: '#A0A0A0',
          600: '#888888',
          700: '#707070',
          800: '#585858',
          900: '#404040',
        },
        // Keep secondary and accent as neutral grays
        secondary: {
          DEFAULT: '#888888',
          50: '#F5F5F5',
          100: '#EEEEEE',
          200: '#E0E0E0',
          300: '#D0D0D0',
          400: '#B8B8B8',
          500: '#A0A0A0',
          600: '#888888',
          700: '#707070',
          800: '#585858',
          900: '#404040',
        },
        accent: {
          DEFAULT: '#B8B8B8',
          50: '#F5F5F5',
          100: '#EEEEEE',
          200: '#E0E0E0',
          300: '#D0D0D0',
          400: '#B8B8B8',
          500: '#A0A0A0',
          600: '#888888',
          700: '#707070',
          800: '#585858',
          900: '#404040',
        },
        // Metallic color palette - keep as neutral grays
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
        success: '#888888',
        warning: '#A0A0A0',
        error: '#888888',
        neutral: {
          50: '#0A0A0A', // Much darker
          100: '#151515', // Much darker
          200: '#202020', // Much darker
          300: '#2A2A2A', // Much darker
          400: '#353535', // Much darker
          500: '#404040', // Much darker
          600: '#555555', // Much darker
          700: '#6A6A6A', // Much darker
          800: '#808080', // Much darker
          900: '#999999', // Much darker
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
        'metallic-gradient': 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)', // Much darker
        'metallic-texture': `
          radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(255,255,255,0.02) 0%, transparent 50%),
          linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.01) 50%, transparent 60%)
        `,
      },
      boxShadow: {
        'metallic': '0 4px 20px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)', // Darker shadows
        'metallic-lg': '0 8px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.03)', // Darker shadows
      },
    },
  },
  plugins: [],
};