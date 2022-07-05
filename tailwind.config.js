module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Microsoft JhengHei', 'sans-serif']
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        primary: '#004ea6',
        secondary: '#90a7d1'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)'
          },
          '50%': {
            transform: 'rotate(3deg)'
          }
        },
        lift: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-20px)'
          }
        }
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
        lift: 'lift 2s ease-in-out infinite'
      }
    },
    aspectRatio: {
      '16/5': '16 / 5',
      '3/4': '3 / 4'
    }
  },
  plugins: []
}
