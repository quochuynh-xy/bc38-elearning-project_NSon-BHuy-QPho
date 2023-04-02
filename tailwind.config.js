/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      "xs": "576px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      container: {
        width: "100%",
        padding: {
          DEFAULT: "10px",
        },
        screens: {
          "xs": "576px",
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        }
      }
    },
  },
  plugins: [],
}
// npx tailwindcss -i ./src/App.css -o ./dist/output.css --watch