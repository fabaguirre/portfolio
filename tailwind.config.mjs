/** @type {import('tailwindcss').Config} */
import { themeVariants } from "tailwindcss-theme-variants";

export default {
  content: ["./src/**/*.{astro,ts}"],
  theme: {
    extend: {
      colors: {
        accent: {
          100: "#FFFAF0",
          200: "#FEEBC8",
          300: "#FBD38D",
          400: "#F6AD55",
          500: "#ED8936",
          600: "#DD6B20",
          700: "#C05621",
          800: "#9C4221",
          900: "#7B341E",
        },
        // light: '#F8F8FF', // Ghost White
        light: '#FAF9F6', // Off White
        dark: '#100D08', // Black Chocolate
        // dark: '#212121', // Midnight Blue
        // dark: '#11181C', // Arsenic
      }
    },
  },
  plugins: [
    themeVariants({
      themes: {
        light: {
          selector: ":not(.dark)",
        },
      },
    }),
  ],
  darkMode: "selector",
};
