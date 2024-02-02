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
        blue: '#18498D',
        'blue-dark': '#031F4D',
        'gray-light': '#F8F9FE',
        'purple-dark': '#473EFF',
        gray: '#93939C',
        green: '#BEE2FA',
        purple: '#938DF9',
        red: '#C43C50',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'ui-serif'],
      },
    },
  },
  plugins: [],
};
