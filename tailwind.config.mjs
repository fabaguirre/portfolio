/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import colors from 'tailwindcss/colors';

export default {
  content: ["./src/**/*.{astro,ts}"],
  theme: {
    extend: {
      colors: {
        primary: colors.purple,
        accent: colors.orange,
        // light: '#F8F8FF', // Ghost White
        light: '#FAF9F6', // Off White
        dark: '#100D08', // Black Chocolate
        // dark: '#212121', // Midnight Blue
        // dark: '#11181C', // Arsenic
      }
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("light", "html:not(.dark) &");
    }),
  ],
  darkMode: "selector",
};
