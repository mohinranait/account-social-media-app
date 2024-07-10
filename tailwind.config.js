/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      screens: {
        'res3': '300px',
        'res4': '400px',
        'res5': '500px',
        'res55': '550px',
        'res6': '600px',
        'res65': '650px',
        'res7': '700px',
        'res75': '750px',
        'res8': '800px',
        'res85': '850px',
        'res9': '900px',
        'res95': '950px',
        'res10': '1000px',
        'res11': '1100px',
        'res12': '1200px',
        'res13': '1300px',

      },
      container: {
        center: true,
      },
      colors: {
        primary: '#0a66c2',
        primaryLight: 'rgba(10,102,194,0.08)',
        secondary: '#111'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
