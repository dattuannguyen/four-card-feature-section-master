/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      pop: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          red: "	#ea5353",
          cyan: "#45d3d3",
          orange: "	#fcaf4a",
          blue: "	#549ef2",
        },
        neutral: {
          darkBlue: "#4c4e61",
          grayishBlue: "	#a3a5ae",
          lightGray: "	#fafafa",
          bg: "#fafafa",
        },
      },
    },
  },
  plugins: [],
};
