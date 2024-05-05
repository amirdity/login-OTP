import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        day: "url('../public/day.jpg')",
        night: "url('../public/night.jpg')",
      },
    },
  },
  plugins: [],darkMode: "class",
};
export default config;
