import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
// Loading <Fonts></Fonts>
import "@fontsource/poppins"

// Creating a custom theme
const darkTheme = createTheme({
  // Custom color palette
  palette: {
    mode: 'dark',
    primary: {
      main: "#AEEB40"
    },
    secondary: {
      main: "#101010"
    },
    secondaryLight: {
      main: "#212121"
    }
  },

  // Custom font sizes
  typography: {
    fontFamily: ["poppins", "sans-serif"].join(","),
    h1: {
      fontSize: "32px"
    },
    h2: {
      fontSize: "30px"
    },
    h3: {
      fontSize: "24px"
    },
    h4: {
      fontSize: "20px"
    },
    h5: {
      fontSize: "18px"
    },
    h6: {
      fontSize: "16px"
    },
    p: {
      fontSize: "16px"
    },
  },

  // Custom color for MUI paper
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--primary-light)",
        }
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
)
