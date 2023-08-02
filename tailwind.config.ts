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
        'grey': {
          '100': '#f2f2f2',
          DEFAULT: '#d9d9d9',
          '200': '#bfbfbf'
        },
        
        'white': '#ffffff'
      },
      fontFamily: {
        'fluxiv': ['"Heebo"', 'ui-sans-serif','system-ui'],
      },
      extend: {
        screens: {
          '3xl': '1924px',
          '4xl': '2160px'
        },
        boxShadow: {
          DEFAULT: '0px 0px 4px 0px rgba(0, 0, 0, 0.50)',
          'md': '0px 0px 6px 0px rgba(0, 0, 0, 0.50)',
          'lg': '0px 0px 8px 0px rgba(0, 0, 0, 0.50)'
        }
      }
    }
  };
  