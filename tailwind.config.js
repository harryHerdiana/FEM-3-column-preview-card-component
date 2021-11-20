module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      'bright-orange':'#e38826',
      'dark-cyan':'#006970',
      'very-dark-cyan':'#004241',
      'white':'#F2F2F2',
      'very-white':'#FFFFFF'
    },
    screens:{
      'desktop':'1024px',
      'phone':'375px'
    },
    fontFamily:{
      'lexend':['Lexend Deca', 'sans-serif'],
      'shoulder':['Big Shoulders Display','cursive']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
