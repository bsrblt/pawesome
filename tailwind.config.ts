import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/layout/Button.tsx",
    "./app/**/*.{js,css,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      boxShadow: {
        sh: "5px 5px 0px 0px #471f71",
      },
      colors: {
        transparent: "trans",
        current: "currentColor",
        white: "#ffffff",
        color1: "#9c2270",
        color2: "#501e98",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        bubblegum: "#ff77e9",
        bermuda: "#78dcca",
        emerald: "#0cc06c",
        canary: "#ffe619",
        darkpur: "#471f71",
        rosy: "#ef819b",
        turq: "#59c6f2",
        lemonlight: "#fffad2",
      },
      screens: {
        xs: "440px",
      },
      fontFamily: {
        lobster: "var(--font-lobster)",
      },
    },
  },
  plugins: [],
};
export default config;
