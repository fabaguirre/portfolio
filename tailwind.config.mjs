/** @type {import('tailwindcss').Config} */
import { themeVariants } from "tailwindcss-theme-variants";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
