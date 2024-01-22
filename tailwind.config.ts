import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#09435a',
      secondary: '#4e7d8e',
      foreground: '#9cc2b8',
      base: '#e1fdd5',
      dark: '#01161e',
      light: '#f3f6f4',
      danger: '#f31260',
      warning: '#f5a524',
      success: '#17c964',
    },
    screens: {
      xs: '320px',
      sm: '520px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      'xxl': '1440px',
      'xxxl': '1920px',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
