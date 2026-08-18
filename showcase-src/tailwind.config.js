/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0ea5e9',
          dark: '#0284c7',
          light: '#e0f2fe',
        },
        accent: {
          green: '#10b981',
          orange: '#f59e0b',
          red: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: '50% 50%, 50% 50%' },
          to: { backgroundPosition: '350% 50%, 350% 50%' },
        },
        'spotlight': {
          '0%': { transform: 'translate(0%, 0%) scale(1)' },
          '50%': { transform: 'translate(-12%, -12%) scale(1.25)' },
          '100%': { transform: 'translate(0%, 0%) scale(1)' },
        },
      },
      animation: {
        aurora: 'aurora 60s linear infinite',
        spotlight: 'spotlight 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
