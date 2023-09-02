/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      // padding: '16px',
    },
    extend: {
      colors: {
        'primary-blue': '#1e44ad',
        'primary-blue-light': '#3e64bb',
        'primary-blue-dark': '#0E4470',
        'primary-red': '#f44c44',
        secondary: '#cbd5e1',
        trans: '#00000080',
      },
      backgroundImage: {
        hero: "url('./images/andy-li-unsplash.jpg')",
        map: "url('./images/indonesia.png')",
      },
    },
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    darkTheme: 'light',
  },
}

