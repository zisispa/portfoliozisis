module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        light_green: "#64ffda",
        light_green_hover: "rgba(100,255,218,0.1)",
        light_gray: "#a8b2d1",
        gray_dark_light: "#8892b0",
        light_white: "#ccd6f6",
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
