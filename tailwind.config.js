/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('src/assets/images/bg-sidebar-desktop.svg')",
        mobile: "url('src/assets/images/bg-sidebar-mobile.svg')",
      },
      colors: {
        'blue-button': '#18498D',
        'blue-title': '#031F4D',
        'gray-bg': '#F8F9FE',
        'gray-text': '#93939C',
        'green-light': '#BEE2FA',
        'purple-text': '#473EFF',
        'red-error': '#C43C50',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'ui-serif'],
      },
    },
  },
  plugins: [],
};
