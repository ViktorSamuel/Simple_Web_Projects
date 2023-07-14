module.exports = {
  purge: {
    enabled: false,
    content:[
      "./public/*.html",
      "./src/**/*.vue",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '420px'
      },
      colors:{
        blue: {
          450: '#5F99F7',
          475: '#5f92f7'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
