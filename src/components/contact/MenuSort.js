import { IconButton, Tooltip, Stack, Menu, Grid, Box, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

import { useState } from 'react';

function MenuSort() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Tooltip title="Sort Container" placement="top">
          <IconButton
            onClick={handleClick}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            aria-label="directions"
          >
            <Icon icon="mdi:format-list-bulleted" />
          </IconButton>
        </Tooltip>
      </Stack>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ width: '200px' }}>
          <Typography variant="body1" fontSize={18} align="center">
            Sorting order
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Stack direction="column" justifyContent="center" alignItems="center" m=".5rem">
                <IconButton aria-label="directions">
                  <Icon icon="mdi:sort-alphabetical-ascending" />
                </IconButton>
                <Typography variant="body2" fontSize={10} align="center">
                  Alphabetical <br />
                  (first name)
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Typography variant="body1" fontSize={18} align="center">
            Display
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Stack direction="column" justifyContent="center" alignItems="center" m=".5rem">
                <IconButton aria-label="directions">
                  <Icon icon="mdi:view-list" />
                </IconButton>
                <Typography variant="body2" fontSize={10} align="center">
                  List
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Menu>
    </>
  );
}

export default MenuSort;
