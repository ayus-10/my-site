import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      colors: {
        "my-blue": "#273043",
        "my-blue-light": "#3f495e",
        "my-white": "#ecf0f1",
        "my-silver": "#c4d1d4",
        "my-red": "#c14953",
      },
    },
  },
  plugins: [],
};
export default config;
