import {
  Button,
  Menu,
  MenuItem,
  Typography,
  Paper,
  Box,
  Chip,
  Fab,
  Stack,
} from '@mui/material';
import {
  ArrowDropUp,
  ArrowDropDown,
  PhoneIphone,
  Phone,
  AccessTime,
  LocationOn,
} from '@mui/icons-material';

import React, { useState } from 'react';

function Locations() {
  const [arrowDown, setArrowDown] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currLocation, setCurrLocation] = useState('Uptown Manhattan');
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setArrowDown(!arrowDown);
  };
  const handleClose = (event) => {
    setCurrLocation(event.currentTarget.textContent);
    setAnchorEl(null);
    setArrowDown(!arrowDown);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
      p={2}
    >
      <div>
        <Typography sx={{ fontSize: '1.75rem', fontWeight: 'bold' }} pb={2}>
          Reach out today!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          mb={2}
        >
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            size="small"
            onClick={handleClick}
            sx={{
              color: '#0DAD6F',
              borderColor: '#0DAD6F',
              // padding: '4px',
              // backgroundColor: '#11e492',
              '&:hover': {
                backgroundColor: '#transparent',
                borderColor: '#0DAD6F',
              },
              marginRight: '5px',
            }}
            variant="text"
          >
            Locations {arrowDown ? <ArrowDropDown /> : <ArrowDropUp />}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Uptown Manhattan</MenuItem>
            <MenuItem onClick={handleClose}>Midtown Manhattan</MenuItem>
            <MenuItem onClick={handleClose}>Queens</MenuItem>
            <MenuItem onClick={handleClose}>West Hempstead</MenuItem>
          </Menu>{' '}
          {currLocation !== '' ? (
            <Chip
              label={currLocation}
              variant="outlined"
              onClick={handleClick}
              sx={{ borderColor: '#0DAD6F' }}
            />
          ) : (
            <></>
          )}
        </Box>
        {/* Paper that show hours and phone number for WeightMD */}
        {currLocation == 'Uptown Manhattan' ? (
          <Paper elevation={2}>
            {' '}
            {/* For hours */}
            <Box
              sx={{
                display: 'flex',
                // flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'flex-start',
              }}
              pt={2}
              pb={2}
            >
              <Fab color="#f4f0ec" aria-label="call" size="small">
                <LocationOn />
              </Fab>
              <Stack spacing={0}>
                <Typography>230 E 79th St, Unit 2</Typography>
                <Typography>New York, NY 10021</Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                display: 'flex',
                // flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
              pt={2.5}
              pb={3}
              ml={2.5}
            >
              <Fab color="#f4f0ec" aria-label="call" size="small">
                <PhoneIphone />
              </Fab>
              <Typography pl={2}>(212) 876-8181</Typography>
            </Box>
            {/* For hours */}
            <Box
              sx={{
                display: 'flex',
                // flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'flex-start',
              }}
              pt={2}
              pb={2}
            >
              <Fab color="#f4f0ec" aria-label="call" size="small">
                <AccessTime />
              </Fab>
              <Stack spacing={0}>
                <Typography>Tue. 3:00PM-5:00PM</Typography>
                <Typography>Thu. 9:00AM-1:00PM</Typography>
                <Typography>Sat. 3:00PM-5:00PM</Typography>
              </Stack>
            </Box>
          </Paper>
        ) : (
          <></>
        )}
      </div>
    </Box>
  );
}

export default Locations;

// POPOVER VERSION
// <PopupState variant="popover" popupId="demo-popup-menu">
//   {(popupState) => (
//     <React.Fragment>
//       <Button
//         id="location-button"
//         variant="raised"
//         {...bindToggle(popupState)}
//         sx={{
//           '&:hover': {
//             backgroundColor: 'transparent',
//             color: '#0DAD6F',
//           },
//           '&:active': {
//             backgroundColor: 'transparent',
//             transitionDuration: '0s',
//           },
//         }}
//       >
//         Location
//         {arrowIsDown ? <ArrowDropDown /> : <ArrowDropUp />}
//       </Button>

//       <Menu {...bindMenu(popupState)}>
//         <MenuItem onClick={popupState.close}>Uptown Manhattan</MenuItem>
//         <MenuItem onClick={popupState.close}>Midtown Manhattan</MenuItem>
//         <MenuItem onClick={popupState.close}>Rego Park, Queens</MenuItem>
//         <MenuItem onClick={popupState.close}>West Hempstead, LI</MenuItem>
//       </Menu>
//     </React.Fragment>
//   )}
// </PopupState>

// POPUP VERSION
// <>
//   <Button
//     onClick={handleClick('top-end')}
//     sx={{
//       color: 'rgba(0, 0, 0, 0.87)',
//     }}
//   >
//     top-start
//   </Button>
//   <Popper open={open} anchorEl={anchorEl}>
//     <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
//       The content of the Popper.
//     </Box>
//   </Popper>
// </>
