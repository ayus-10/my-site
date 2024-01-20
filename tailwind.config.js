/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-850": "#18202f",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
          "100%": { transform: "translateY(0)" },
        },
        wiggle: {
          "0%": { transform: "rotate(0)" },
          "25%": { transform: "rotate(15deg)" },
          "50%": { transform: "rotate(0)" },
          "75%": { transform: "rotate(-15deg)" },
          "100%": { transform: "rotate(0)" },
        },
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
        shake: "shake 1s ease-in-out infinite",
        fadeIn: "fadeIn 1s forwards",
        fadeOut: "fadeOut 0.5s forwards",
        wiggle: "wiggle 1s linear infinite",
      },
    },
  },
  plugins: [],
};
