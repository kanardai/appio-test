import React from 'react';
import ReactDOM from 'react-dom/client';
import { Mainpage } from './Mainpage';
import { ThemeProvider } from '@emotion/react';
import { injectGlobal } from '@emotion/css';

export const theme = {
  colors: {
    dark: '#080C18',
    darker: '#111624',
    primary: '#00D8FF',
    magenta: '#FF00C7',
    hero: '#141B31',
    white: '#FFFFFF',
    copy: ' #7986AF',
  },
  sizes: {
    fullWidth: '100vw',
    fullHeight: '100vh',
    topbar: '64px',
    large: '70vw',
    noteWidth: '728px',
    logoHeight: '32px',
    heroHeight: '562px',
    cardWidth: '416px',
    cardHeight: '447px',
  },
  borderWidths: {
    cardBorder: '2px'
  },
  fontSizes: {
    sm: '16px',
    note: '20px',
    button: '24px',
    xlg: '96px',
    h2: '48px',
    medium: '32px',
  },
  space: {
    topbarItemPadding: '30px',
    heroLarge: '128px',
    noteTop: '30px',
    buttonPX: '67px',
    buttonPY: '25px',
  },
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Mainpage />
    </ThemeProvider>
  </React.StrictMode>
);

injectGlobal`
  body {     
    background-color: ${theme.colors.dark};    
  }
  * { 
    font-family: 'Inter', sans-serif;
    box-sizing: border-box ;
    margin: 0;
    padding: 0;
  }
`;
