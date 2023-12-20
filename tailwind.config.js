/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          1: "#EFEFEF",
          1.5: "#e2e2e2",
          2: "#C8C8C8",
          3: "#8E8E8E",
          4: "#707070",
        },
      },
      fontSize: {
        "xs-plus": "0.8125rem", //13px
      },
    },
  },
  plugins: [],
};
