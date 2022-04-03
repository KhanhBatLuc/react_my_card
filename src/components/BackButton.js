import { memo } from 'react';
import { Icon } from '@iconify/react';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  return (
    <IconButton size="large" onClick={() => navigate(-1)}>
      <Icon icon="mdi:arrow-left" />
    </IconButton>
  );
}

export default memo(BackButton);
