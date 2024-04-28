/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./index.html"],
  darkMode: 'class',
  theme: {
      // Tambahkan Custom sizing dibawah extend
      extend: {
          colors: {
              clifford: '#da373d',
          },
          spacing : {
              "13": "3.25rem",
          },
          fontFamily : {
              poppins: "Poppins"
          },
          animation: {
              'spin-slow': 'spin 3s linear infinite',
              // panggil animasi buat sendiri
              'shake': 'shake 2s linear infinite',
          },
          // membuat animasi sendiri
          // 1. membuat keyframse dulu
          keyframes: {
              // nama keyframes
              shake: {
                  '0%, 100%': {
                      transform: 'rotate(-15deg)'
                  },
                  '50%': {
                      transform: 'rotate(15deg)'
                  },
              },
          },
      }
  }
  plugins: [],
}

