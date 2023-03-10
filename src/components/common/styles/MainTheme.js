import { createTheme } from '@mui/material/styles';

const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#D2042D',
    },
    secondary: {
      main: '#FCF6F5FF',
    },
  },
  typography: {
    fontFamily: "'Montserrat','Lora', sans-serif, serif ",
    h1: {
      fontFamily: "'Montserrat', sans-serif ",
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif ",
    },
    h3: {
      fontFamily: "'Montserrat', sans-serif ",
    },
    h4: {
      fontFamily: "'Montserrat', sans-serif ",
    },
    h5: {
      fontFamily: "'Montserrat', sans-serif",
    },
    // body1: {
    //       fontFamily: "Lora'",
    //     },
    body2: {
      fontFamily: "'Lora', serif",
    },
  },
});

export default mainTheme;
