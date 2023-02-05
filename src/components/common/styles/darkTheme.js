import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    type: 'dark',
    primary: {
      main: '#E00F41',
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

export default darkTheme;
