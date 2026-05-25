/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
        },
        brand: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
        },
        accent: {
          DEFAULT: '#06B6D4',
          dark: '#0891B2',
        },
        surface: '#F1F5F9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 12px 40px -8px rgba(37, 99, 235, 0.15)',
      },
    },
  },
  plugins: [],
};
