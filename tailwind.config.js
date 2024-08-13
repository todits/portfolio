/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            "custom-primary": "rgb(162, 226, 225)",
            "custom-secondary": "rgb(0, 128, 128)",
            "custom-third": "rgb(98, 58, 56)",
            "custom-fourth": "rgb(192, 149, 145)",
            "custom-background": "rgb(234 255 254)",
         },
      },
      fontFamily: {
         signature: ["Great Vibes"],
         primary: ["Titan One"],
      },
   },
   plugins: [],
};
