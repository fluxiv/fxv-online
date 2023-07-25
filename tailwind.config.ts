// tailwind.config.ts
export default {
    theme: {
      colors: {
        'blue': {
          DEFAULT: '#30aad8',
          'dark': '#1D2A3D'
        },
        'green': '#41d06a',
        'red': '#ff0022',
        'yellow': '#ebad36',
        'grey': '#D9D9D9',
        'white': '#ffffff'
      },
      fontFamily: {
        'fluxiv': ['"Heebo"', 'ui-sans-serif','system-ui'],
      },
      extend: {
        screens: {
          '3xl': '1920px',
          '4xl': '2160px'
        }
      }
    }
  };
  