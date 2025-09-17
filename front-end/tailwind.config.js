/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode via class strategy
  theme: {
    extend: {
      colors: {
        // Custom color palette that works well with dark/light themes
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        // Background colors
        background: {
          light: "#ffffff",
          dark: "#0f0f23",
        },
        // Text colors
        foreground: {
          light: "#1f2937",
          dark: "#f9fafb",
        },
        // Card colors
        card: {
          light: "#ffffff",
          dark: "#1f1f3a",
        },
        // Border colors
        border: {
          light: "#e5e7eb",
          dark: "#374151",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
