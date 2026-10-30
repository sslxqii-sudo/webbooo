/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#070a0e',
          900: '#0d1117',
          850: '#121820',
          800: '#161e29',
          700: '#212c3d',
        },
        cyber: {
          emerald: '#10b981',
          'emerald-glow': '#059669',
          lime: '#a3e635',
          'lime-bright': '#bef264',
          teal: '#14b8a6',
          dark: '#0d1117',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'radar-slow': 'radar 3s ease-out infinite',
        'pulse-subtle': 'pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        radar: {
          '0%': { transform: 'scale(1)', opacity: '0.9' },
          '70%': { transform: 'scale(2.4)', opacity: '0' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.4))' },
          '50%': { filter: 'drop-shadow(0 0 30px rgba(163, 230, 53, 0.6))' },
        }
      }
    },
  },
  plugins: [],
}
