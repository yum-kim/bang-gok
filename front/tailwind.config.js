/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      regular: ['Pretendard-Regular', 'sans-serif'],
    },
  },
  plugins: ['prettier-plugin-tailwindcss', require('@tailwindcss/forms')],
};
