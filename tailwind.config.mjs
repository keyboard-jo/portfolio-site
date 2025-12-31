/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // 1. BRAND COLORS
      colors: {
        // High-contrast Swiss palette
        brand: {
          red: '#FF3E00',    // Bold International Orange/Red
          black: '#000000',
          white: '#FFFFFF',
          gray: '#F4F4F4',   // For subtle grid backgrounds
        }
      },
      // 2. GLOBAL TYPOGRAPHY
      fontFamily: {
        // 'Inter' is the modern web-standard for Swiss style
        // 'Space Mono' works great for the tech/AI "metadata" look
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      // 3. SWISS SPACING & SCALE
      letterSpacing: {
        tightest: '-0.05em', // Vital for that "stuck together" look in headers
      },
      lineHeight: {
        'extra-tight': '0.8', // For giant hero text
      }
    },
  },
  plugins: [],
};