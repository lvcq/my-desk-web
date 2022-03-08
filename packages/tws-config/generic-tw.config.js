module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins:{
    preflight: false, // Disable preflight, reduce duplication preflight css code in component, if it is needed in an application, we can overide it to trin it's tailwind.config.js. 
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
