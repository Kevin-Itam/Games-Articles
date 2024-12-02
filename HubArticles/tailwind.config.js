/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Certifique-se de incluir os diretórios certos
  theme: {
    extend: {
      height:{
        'slider': '40rem',
      }
    },
  },
  plugins: [],
};
