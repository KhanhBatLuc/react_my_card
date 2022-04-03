import { Icon } from '@iconify/react';
import { Stack, Avatar, IconButton } from '@mui/material';

function ListIcon() {
  return (
    <Stack direction="row" justifyContent="center" mb=".5rem" mt="1.5rem">
      <IconButton size="medium">
        <Icon icon="mdi:facebook" color="#1877F2" />
      </IconButton>
      <IconButton size="medium">
        <Icon icon="mdi:google" color="#DF3E30" />
      </IconButton>

      <IconButton size="medium">
        <Icon icon="mdi:twitter" color="#1C9CEA" />
      </IconButton>
    </Stack>
  );
}

export default ListIcon;
