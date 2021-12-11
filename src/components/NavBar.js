import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Testing
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
