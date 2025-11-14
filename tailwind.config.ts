import type { Config } from 'tailwindcss'

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F5C15C',
          foreground: '#111111',
        },
        secondary: {
          DEFAULT: '#FAFAFA',
          foreground: '#111111',
        },
        accent: {
          DEFAULT: '#F5C15C',
          foreground: '#111111',
        },
        background: '#FFFFFF',
        foreground: '#111111',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#111111',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#111111',
        },
        muted: {
          DEFAULT: '#F5F5F5',
          foreground: 'rgba(17, 17, 17, 0.6)',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        border: 'rgba(0, 0, 0, 0.08)',
        input: 'rgba(0, 0, 0, 0.1)',
        ring: 'rgba(245, 193, 92, 0.4)',
      },
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem',
      },
      letterSpacing: {
        'wide': '0.05em',
        'wider': '0.1em',
        'widest': '0.15em',
      },
      boxShadow: {
        'glow-amber': '0 10px 40px rgba(245, 193, 92, 0.25), 0 0 0 1px rgba(245, 193, 92, 0.1)',
        'glow-amber-strong': '0 20px 60px rgba(245, 193, 92, 0.35), 0 0 0 1px rgba(245, 193, 92, 0.2)',
        'glow-amber-subtle': '0 4px 20px rgba(245, 193, 92, 0.15)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'glass-strong': '0 12px 48px rgba(0, 0, 0, 0.12)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
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
} satisfies Config
