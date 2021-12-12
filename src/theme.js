import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#0DAD6F',
    },
    secondary: {
      main: '#707B8F',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
