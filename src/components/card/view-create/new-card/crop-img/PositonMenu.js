import * as React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { FormattedMessage } from 'react-intl';
import { Button, Menu, MenuItem } from '@mui/material';

import i18n from '../../../../../features/card/lib/i18n';
export default function PositionedMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const { addingForm } = i18n.cardAdd.CardAddingPage;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemovePhoto = () => props.handleRemovePhoto();

  const handleBackGrPositonMenu = (e) => {
    props.handleBackGrImg(e);
    handleClose();
  };

  return (
    <div>
      <Button
        aria-expanded={open ? 'true' : undefined}
        startIcon={<Icon icon="mdi:camera" />}
        onClick={handleClick}
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          border: '1px solid gray',
          color: 'gray',
          backgroundColor: '#fbfbfb',
          '&:hover': {
            backgroundColor: '#fbfbfba1'
          }
        }}
      >
        <FormattedMessage {...addingForm.updatePhoto} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        sx={{ zIndex: '2004' }}
      >
        <MenuItem>
          <label htmlFor="upload">
            {' '}
            <FormattedMessage {...addingForm.choosePhoto} />
          </label>
          <input
            type="file"
            id="upload"
            hidden
            onChange={handleBackGrPositonMenu}
          />
        </MenuItem>
        <MenuItem onClick={handleRemovePhoto}>
          {' '}
          <FormattedMessage {...addingForm.removePhoto} />
        </MenuItem>
      </Menu>
    </div>
  );
}
PositionedMenu.propTypes = {
  handleChooseNewPhoto: PropTypes.func,
  handleRemovePhoto: PropTypes.func
};
