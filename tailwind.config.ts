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
        'dark':'#081027',
        'light':'#dfedf0',
        'main':'#01b4d2',
        'sec':'#5a8cff',
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
