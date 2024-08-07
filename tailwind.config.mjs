/** @type {import('tailwindcss').Config} */
import { themeVariants } from "tailwindcss-theme-variants";

export default {
  content: ["./src/**/*.{astro,ts}"],
  theme: {
    extend: {},
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
