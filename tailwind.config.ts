import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090A0C",
        panel: "#111318",
        line: "#252831",
        muted: "#A1A6B2",
        accent: "#C4F56A"
      },
      boxShadow: {
        glow: "0 0 50px rgba(196, 245, 106, 0.09)"
      }
    },
  },
  plugins: [],
};
export default config;
