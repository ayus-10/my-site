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
        "my-blue": "#273043",
        "my-white": "#ecf0f1",
        "my-silver": "#c4d1d4",
        "my-red": "#c14953",
      },
    },
  },
  plugins: [],
};
export default config;
