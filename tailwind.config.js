/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: "Pacifico",
      },
      colors: {
        "gray-850": "#18202f",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            visibility: "hidden",
            opacity: "0%",
          },
          "100%": {
            visibility: "visible",
            opacity: "100%",
          },
        },
        fadeOut: {
          "0%": {
            visibility: "visible",
            opacity: "100%",
          },
          "100%": {
            visibility: "hidden",
            opacity: "0%",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s forwards",
        fadeOut: "fadeOut 0.5s forwards",
      },
    },
  },
  plugins: [],
};
