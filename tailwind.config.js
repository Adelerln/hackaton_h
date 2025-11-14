/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E232F',
        secondary: '#0A0A0C',
        accent: '#F5C15C',
        background: '#0A0A0C',
      },
      letterSpacing: {
        'wide': '0.05em',
        'wider': '0.1em',
        'widest': '0.15em',
      },
      boxShadow: {
        'glow-amber': '0 0 50px rgba(245, 193, 92, 0.3), 0 0 80px rgba(245, 193, 92, 0.2)',
        'glow-amber-strong': '0 0 60px rgba(245, 193, 92, 0.5), 0 0 100px rgba(245, 193, 92, 0.3)',
        'glow-amber-subtle': '0 0 30px rgba(245, 193, 92, 0.2)',
      },
      blur: {
        'glow': '50px',
        'glow-strong': '80px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'dot-pulse': 'dotPulse 2s ease-in-out infinite',
        'spin-slow': 'spin 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        dotPulse: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

