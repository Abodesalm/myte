import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode : 'class',
  theme: {
    screens:{
      'sm': {'max':'500px'},
      'md': {'max':'720px'},
      'lg': {'max':'1024px'},
      'xl': {'max':'1300px'}
    },
    extend: {
      colors :{
        'dark':'#081025',
        'light':'#DFEDF0',
        'main':'#02ACEA',
        'sec':'#0028AB',
        'white':'#DFEDF0',
        'darke':'#33373b',
        'lii':'#cacaca',
        'lity':'#abfeff',
      }
    },
  },
  plugins: [],
};
export default config;
