/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueNun: "#52D1C6",
        redNun: "#B90E18",
        greyNun: "#EFEFEF",
      },
    },
  },
  plugins: [],
};
