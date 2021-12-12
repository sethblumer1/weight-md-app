import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Locations from './components/TopBar/subComps/Locations';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Stack,
  Item,
} from '@mui/material';

// Components for home page
import NavBar from './components/TopBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  const [location, setLocation] = useState('');
  const handleChange = (e) => {
    setLocation(e.target.value);
  };
  return (
    // <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />

      <NavBar />
      {/* Hero unit */}

      <Container
        disableGutters
        maxWidth="xl"
        component="main"
        sx={{
          mt: 2,
          // pt: 8,
          // pb: 20,
          // border: '1px solid black',
          // backgroundImage:
          //   'url(https://i.ibb.co/1QJ9WWc/canva-banner-weight.png)',
          // backgroundSize: 'cover',
          // backgroundRepeat: 'no-repeat',
          // backgroundPositionY: '30%',
          borderRadius: '8px',
        }}
      >
        {/* Overall banner wrapper */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            minWidth: 'min-content',
          }}
        >
          <img
            src="https://i.ibb.co/Sy9VPW7/banner-weight-canva-fixed.png"
            height="425px"
          />
          <Box
            ml={1}
            sx={{
              border: '1px solid black',
              borderRadius: '5px',
              boxShadow:
                '-4px -4px 12px rgb(255 255 255), 4px 4px 12px rgb(121 130 160 / 75%)',
            }}
          >
            {' '}
            <Locations />
          </Box>
        </Box>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        {/* Cards were here */}
      </Container>

      {/* Footer portion */}
      <Footer />
    </React.Fragment>
    // </ThemeProvider>
  );
}

export default App;
