import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#F8F7F3",
          dark: "#1A1A1A",
        },
        primary: {
          50: { DEFAULT: "#FDF2F1", dark: "#2C1A17" },
          100: { DEFAULT: "#FAE5E2", dark: "#3D2521" },
          200: { DEFAULT: "#F5CBC5", dark: "#4E302B" },
          300: { DEFAULT: "#F0B1A8", dark: "#5F3B35" },
          400: { DEFAULT: "#EB978B", dark: "#70463F" },
          500: { DEFAULT: "#E67D6E", dark: "#815149" },
          600: { DEFAULT: "#E16451", dark: "#925C53" },
          700: { DEFAULT: "#DC4B34", dark: "#A3675D" },
          800: { DEFAULT: "#C13A25", dark: "#B47267" },
          900: { DEFAULT: "#9E301F", dark: "#C57D71" },
        },
        secondary: {
          50: { DEFAULT: "#F0FBFE", dark: "#0A1D21" },
          100: { DEFAULT: "#E1F7FD", dark: "#142A2F" },
          200: { DEFAULT: "#C3EFFB", dark: "#1E373D" },
          300: { DEFAULT: "#A5E7F9", dark: "#28444B" },
          400: { DEFAULT: "#87DFF7", dark: "#325159" },
          500: { DEFAULT: "#69D7F5", dark: "#3C5E67" },
          600: { DEFAULT: "#4BCFF3", dark: "#466B75" },
          700: { DEFAULT: "#2DC7F1", dark: "#507883" },
          800: { DEFAULT: "#14B1DB", dark: "#5A8591" },
          900: { DEFAULT: "#1191B4", dark: "#64929F" },
        },
        text: {
          DEFAULT: "#333333",
          dark: "#E0E0E0",
        },
        textLight: {
          DEFAULT: "#666666",
          dark: "#A0A0A0",
        },
        gray: {
          50: { DEFAULT: "#F9FAFB", dark: "#1F1F1F" },
          // ... other gray shades if needed
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        hover:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))",
      },
      gradientColorStops: {
        "primary-start": { DEFAULT: "#E67D6E", dark: "#815149" },
        "primary-end": { DEFAULT: "#DC4B34", dark: "#A3675D" },
      },
    },
  },
  plugins: [],
};

export default config;
