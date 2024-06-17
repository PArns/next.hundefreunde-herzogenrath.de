import type { Config } from "tailwindcss";

const config: Config = {
  safelist: ["lg:grid-cols-3", "lg:grid-cols-4", "lg:grid-cols-5"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    h1: ["text-xl"],
  },
  darkMode: "selector",
  plugins: [require("@tailwindcss/typography")],
};
export default config;
