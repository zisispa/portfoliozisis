module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy_color: "#0a192f",
        green_color: "#64ffda",
        green_color_hover: "rgba(100,255,218,0.1)",
        white_color: "#ccd6f6",
        white_dark_color: "#8892b0",
        white_light_color: "#a8b2d1",
      },
      fontFamily: {
        sans: ["Inter var"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
