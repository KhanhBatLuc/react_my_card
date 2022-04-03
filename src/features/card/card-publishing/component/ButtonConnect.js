import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { Typography } from '@mui/material';

import SentContact from './SentContact';
import { RootButton } from './CardPublicPage.style';

ButtonConnect.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  color: PropTypes.string
};

function ButtonConnect({ title, id, color }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <RootButton
        sx={{ backgroundColor: color }}
        onClick={() => setShow(true)}
        variant="contained"
        startIcon={<Icon icon="mdi:card-account-details-outline" />}
      >
        <Typography variant="subtitle1">{title}</Typography>
      </RootButton>
      <SentContact
        show={show}
        color={color}
        handleClose={() => setShow(!show)}
      />
    </>
  );
}

export default ButtonConnect;
