/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'getApp-red': '#EF5862',
        'green-chat': '#35BA80',
        blackFont: '#0E2339',
        yellow: '#FCB742',
        grey: '#959FA8',
        green: '#35BA80',
      },
      fontWeight: {
        'extra-extralight': '250',
         550: '500',
      },
      boxShadow: {
        custom:
          '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px 0px rgb(0 0 0 / 0.1)',
        boxShadow:
          '0 2px 10px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};

