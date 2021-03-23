module.exports = {
   purge: ['./src/**/*.html', './src/*.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         fontFamily: {
            sans: ['Nunito', 'sans-serif']
         }
      }
   },
   variants: {
      extend: {}
   },
   plugins: [require('@tailwindcss/forms')]
};
