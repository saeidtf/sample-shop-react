import { createTheme , responsiveFontSizes } from "@mui/material/styles";

const lightTheme = responsiveFontSizes(createTheme({    
  palette: {    
    mode: 'light',
    primary: {
      main: '#009688',
    },
    secondary: {
      main: '#96000e',
    },
    error: {
      main: '#e91e63',
    },
  },
  spacing: 4,  
  direction: 'rtl',
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: 'Arial, sans-serif , iraniansans',    
  },  
}));

const darkTheme = responsiveFontSizes(createTheme({    
  palette: {    
    mode: 'dark',    
  },
  spacing: 4,
  direction: 'rtl',
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: 'tahoma',
  }
}));

export {
  lightTheme,
  darkTheme,
}