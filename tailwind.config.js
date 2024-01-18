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
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
