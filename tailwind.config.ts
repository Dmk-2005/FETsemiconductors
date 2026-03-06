import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e6eef5',
          100: '#ccdde8',
          200: '#99bbd1',
          300: '#6699ba',
          400: '#3377a3',
          500: '#00558c',
          600: '#004470',
          700: '#003354',
          800: '#002238',
          900: '#001119',
        },
        orange: {
          50: '#fff4e6',
          100: '#ffe9cc',
          200: '#ffd399',
          300: '#ffbd66',
          400: '#ffa733',
          500: '#ff9100',
          600: '#cc7400',
          700: '#995700',
          800: '#663a00',
          900: '#331d00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
