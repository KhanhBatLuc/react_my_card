import PropTypes from 'prop-types';
import { useState } from 'react';
import { Icon } from '@iconify/react';
// material
import { styled } from '@mui/material/styles';
import { Box, Grid, Drawer, IconButton } from '@mui/material';
// import NewCard from '../card/view-create/new-card/NewCard';
import CardInfo from '../card/view-create/info-card/CardInfo';
// components

import DialogConfirm from './DialogConfirm';

const DRAWER_WIDTH = 400;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH
  },
  [theme.breakpoints.down('md')]: {
    flexShrink: 0,
    width: '100%'
  }
}));

SideBarContact.propTypes = {
  isOpenSidebarContact: PropTypes.bool,
  onCloseSidebarContact: PropTypes.func
};
function SideBarContact({ isOpenSidebarContact, onCloseSidebarContact }) {
  const [openDialog, setOpenDialog] = useState(false);

  const renderContent = (
    <Box sx={{ margin: '1rem' }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <IconButton onClick={() => setOpenDialog(true)}>
            <Icon icon="mdi:close-thick" />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          {/* <NewCard /> */}
        </Grid>
        <Grid item xs={12}>
          <CardInfo />
        </Grid>
      </Grid>
    </Box>
  );
  return (
    <RootStyle>
      <Drawer
        open={isOpenSidebarContact}
        anchor="right"
        variant="persistent"
        PaperProps={{
          sx: {
            width: ['100%', DRAWER_WIDTH],
            bgcolor: 'background.default',
            zIndex: 2003
          }
        }}
      >
        {renderContent}
      </Drawer>
      <DialogConfirm
        isOpenDialogContact={openDialog}
        onCloseDialogContact={() => setOpenDialog(false)}
        onCloseSidebarContact={onCloseSidebarContact}
      />
    </RootStyle>
  );
}

export default SideBarContact;
