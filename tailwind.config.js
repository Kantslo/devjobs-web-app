/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        kumbh: "Kumbh Sans",
      },
      backgroundColor: {
        custom: "hsla(219, 29%, 14%, 0.1)",
        customDark: "hsla(0, 0%, 100%, 0.1)",
        customChecked: "hsla(235, 69%, 61%, 1)",
      },
      listStyleType: {
        disc: "disc", // Make sure this is not overridden
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      xl: "1024px",
    },
  },
  plugins: [],
};
