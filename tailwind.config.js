/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(0)" },
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
        wiggle: "wiggle 0.5s ease-in-out",
        fadeIn: "fadeIn 1s forwards",
        fadeOut: "fadeOut 0.5s forwards",
      },
    },
  },
  plugins: [],
};
