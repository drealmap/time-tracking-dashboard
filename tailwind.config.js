/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/Components/UpdateProfile/UpdateProfile.js",
    "./src/Components/SignUp/SignUp.js",
    "./src/Components/Login/Login.js",
    "./src/Components/ForgotPassword/ForgotPassword.js",
    "./src/Components/Card/Card.js",
    "./src/Components/Week.js",
    "./src/Components/Month.js",
    "./src/Components/Day.js",
    "./src/Components/Infobox.js",

  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
