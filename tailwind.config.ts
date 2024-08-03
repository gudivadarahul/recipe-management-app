import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F7F3",
        primary: {
          50: "#FDF2F1",
          100: "#FAE5E2",
          200: "#F5CBC5",
          300: "#F0B1A8",
          400: "#EB978B",
          500: "#E67D6E",
          600: "#E16451",
          700: "#DC4B34",
          800: "#C13A25",
          900: "#9E301F",
        },
        secondary: {
          50: "#F0FBFE",
          100: "#E1F7FD",
          200: "#C3EFFB",
          300: "#A5E7F9",
          400: "#87DFF7",
          500: "#69D7F5",
          600: "#4BCFF3",
          700: "#2DC7F1",
          800: "#14B1DB",
          900: "#1191B4",
        },
        text: "#333333",
        textLight: "#666666",
        gray: {
          50: "#F9FAFB",
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
        "primary-start": "#E67D6E",
        "primary-end": "#DC4B34",
      },
    },
  },
  plugins: [],
};

export default config;
