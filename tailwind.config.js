/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bgOffWhite": "#FAF9F6",
        "header-txt": "#292929",
        "babyblue" : "#147efb",
        "babybluelight": "#6ea6ff"
      },

      fontSize: {
        'xl-dk': ['1.3rem', {
          lineHeight: '1.875rem',
          letterSpacing: '0px',
          fontWeight: '700',
        }],
        'title-dk': ['3.75rem', {
          lineHeight: '4.5rem',
          letterSpacing: '0px',
          fontWeight: '700',
        }],

        'l-dk': ['1.125rem', {
          lineHeight: '1.4375rem',
          letterSpacing: '.5px',
          fontWeight: '700'
        }],
        'project-title-dk': ['1.5rem', {
          lineHeight: '1.4375rem',
          letterSpacing: '.5px',
          fontWeight: '700'
        }],
        'body-dk': ['1.125rem', {
          lineHeight: '1.4375rem',
          letterSpacing: '0px',
        
        }],


        'about-heading-dk': ['1.5rem', {
          lineHeight: '2rem',
          letterSpacing: '0px',
          fontWeight: '700'
        }],
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Rubik: ['Rubik', 'sans-serif'],
        Mulish: ['Mulish', 'sans-serif']
      },
      screens: {
        mob: '375px',
        tb: '768px',
        dk: '1440px'
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
  },
  plugins: [],
};
