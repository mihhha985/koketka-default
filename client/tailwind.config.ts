import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
				default: "#f8f5f1",
				secondary: "#f0ece8",
				accent: "#6951b2",
			},
			textColor:{
				primary: "#7b736c",
				secondary: "#1e1e1e",
				accent: "#6951b2"
			},
			fontFamily:{
				main: ["var(--font-garamond)", "serif"],
				link: ["var(--font-comfortaa)", "serif"],
				logo: ["var(--font-logo)", "sans-serif"]
			},
    },
  },
  plugins: [],
};
export default config;
