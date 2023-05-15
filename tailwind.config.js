/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'body-bg': "#F4F7FE",
        primary: 'var(--primary)',
        'primary-2': 'var(--primary-2)',
        secondary: 'var(--secondary)',
        'secondary-2': 'var(--secondary-2)',
        hover: 'var(--hover)',
        'hover-1': 'var(--hover-1)',
        'hover-2': 'var(--hover-2)',
        'accent-0': 'var(--accent-0)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'accent-4': 'var(--accent-4)',
        'accent-5': 'var(--accent-5)',
        'accent-6': 'var(--accent-6)',
        'accent-7': 'var(--accent-7)',
        'accent-8': 'var(--accent-8)',
        'accent-9': 'var(--accent-9)',
        kviolet: 'var(--violet)',
        'violet-light': 'var(--violet-light)',
        'violet-dark': 'var(--violet-dark)',
        kpink: 'var(--pink)',
        'pink-light': 'var(--pink-light)',
        kcyan: 'var(--cyan)',
        kblue: 'var(--blue)',
        kgreen: 'var(--green)',
        kred: 'var(--red)',
        gold: '#FBB03B',
        cRed: '#FF0000',
        cGray: '#CECECE',
        "dim-red": "#F1584D",
        "dim-yellow": "#D4BE8D",
        "c-blue": "#1A6EFF",
        "l-blue": "#00B1FF",
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}
