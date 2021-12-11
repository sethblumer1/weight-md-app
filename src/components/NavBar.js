import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import React from 'react';

function NavBar() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Album layout
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
