import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/page/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-background": "url('/images/header-background.png')",
      },
      colors: {
        primary: "#004900",
        secondary: "#333333",
      },
    },
  },
  plugins: [],
};
export default config;
