/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        smallBtn: '#E60028',
        light: '#F5F7F9',
        lighter: '#F2F2F2',
        footer: '#C8CDD3',
        form: '#8696A6',
        input: '#C7C7C7',
        three: '#A7A7A7',
        formtable: '#8696A6',
        pending: '#215BE1',
        rejected: '#E60028',
        accepted: '#00B946',
        active: '#E3E3E3',
        navborder: '#E5E5E5',
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      width: {
        18: '275px',
        1200: '1200px',
        100: '400px',
        '9/10': '90%',
        83: '330px',
        0.98: '98%'

      },
      height: {
        110: '440px',
        83: '330px',
        75: '300px',
        91: '280px',
        87: '260px',
        55: '220px',
        30: '120px',
      },
      spacing: {
        950: '720px',
      },
      fontSize: {
        30: '30px',

      },
      lineHeight: {
        33: '33px',
        20: '20px'
      },
    },
  },
  plugins: [],
}

