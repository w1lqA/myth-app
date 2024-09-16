/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#150B08",
        "alternative": "#B25516",
        "alternative2": "#D9873D",
        "secondary": "#FFE8C3",
        "secondary2": "#233041",
      },
      clipPath: {
        'custom-shape': 'polygon(0 0, 100% 0, 80% 80%, 20% 80%)',
      },
      borderRadius: {
        'lg': '16px',
      },
      screens: {
        'xs': '448px',
        '3xl': '1920px',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}


