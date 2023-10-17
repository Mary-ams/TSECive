/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#23272f",
          "200": "rgba(30, 30, 30, 0.87)",
          "300": "rgba(255, 255, 255, 0.15)",
        },
        lightgray: "#d3d3d3",
        black: "#000",
        white: "#fff",
        darkslategray: "#3f4655",
        paleturquoise: "rgba(184, 255, 242, 0.33)",
        lightcyan: "#e8fffb",
        whitesmoke: "#f6f6f6",
        cornflowerblue: "#4c79cf",
        lightseagreen: "#01ae8f",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
      },
      borderRadius: {
        "7xl": "26px",
        xl: "20px",
        mini: "15px",
        "2xs": "11px",
      },
    },
    fontSize: {
      sm: "14px",
      xl: "20px",
      "5xl": "24px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
