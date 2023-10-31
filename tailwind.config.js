/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
     
      backgroundImage: {
        'login-image': "url('/gankyo-maior.svg')"
      },
      textColor: {
        'h1-text': "#3A206D",
        't-violet': "#7B39FF"
      },
      colors: {
        'violet-alt': "#7B39FF",
        'h1-text': "#3A206D"
      }
    },
  },
  plugins: [],
}
