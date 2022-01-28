module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      oxygen: ["Oxygen", "sans-serif"],
      ptSans: ["PT Sans", "sans-serif"],
      nunito: ["Nunito Sans", "sans-serif"],
      openSans: ["Open Sans", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      blur: {
        xs: "1px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".noScrollbar": {
          "::-webkit-scrollbar": "none",
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
