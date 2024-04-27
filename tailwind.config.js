/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#000000",
        secondary: "#ffffff",
        accent: "#FF8180",
        info: "#2F80ED",
        success: "#27AE60",
        warning: "#E2B93B",
        danger: "#EB5757",
        grey: {
          100: "#E0E0E0",
          200: "#BDBDBD",
          300: "#828282",
          400: "#4F4F4F",
          500: "#333333",
          600: "#282828",
          700: "#1D1D1D",
        },
      },
    },

    plugins: [],
  },
};