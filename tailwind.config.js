module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "error": "#F87272",
          "warning": "#FBBD23",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
}