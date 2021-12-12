import React from 'react';
import { AppBar, Toolbar, Typography, Box, Link, Button } from '@mui/material';

function NavBar() {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        bgcolor: 'white',
      }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Box>
          {' '}
          <img
            src="https://i.ibb.co/Cz1KsjL/weight-md-logo-no-BG.png"
            height={'40px'}
          />
        </Box>
        <Typography
          variant="h6"
          color="#707B8F"
          noWrap
          sx={{ flexGrow: 1 }}
          fontWeight={'bold'}
          paddingLeft={'10px'}
        >
          {' '}
          WeightMD
        </Typography>
        <nav>
          {/* Locations dropdown component */}
          <Link
            variant="button"
            color="text.primary"
            href="#"
            underline="none"
            sx={{
              my: 1,
              mx: 1.5,
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#0DAD6F',
              },
            }}
          >
            About
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            underline="none"
            sx={{
              my: 1,
              mx: 1.5,
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#0DAD6F',
              },
            }}
          >
            FAQ
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            underline="none"
            sx={{
              my: 1,
              mx: 1.5,
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#0DAD6F',
              },
            }}
          >
            Forms
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            underline="none"
            sx={{
              my: 1,
              mx: 1.5,
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#0DAD6F',
              },
            }}
          >
            BMI Calculator
          </Link>
        </nav>
        {/* <Locations /> */}
        <Button
          href="#"
          variant="outlined"
          sx={{
            my: 1,
            mx: 1.5,
            backgroundColor: '#0DAD6F',
            color: 'white',
            '&:hover': {
              backgroundColor: '#10d186',
              borderColor: '#0DAD6F',
            },
          }}
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
