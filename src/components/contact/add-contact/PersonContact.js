import PropTypes from 'prop-types';
// material

import {
  Box,
  Link,
  ListItemButton,
  ListItemIcon,
  Avatar,
  Stack,
  ListItemText,
  Typography
} from '@mui/material';
function PersonContact() {
  return (
    <Box>
      <Box p="2rem 1rem" sx={{ borderBottom: '1px solid #e7e7e7' }}>
        <Typography>January 6 ,2022</Typography>
      </Box>
      <Stack direction="row" spacing={2}>
        <Link href="#" width="100%" underline="none" color="inherit">
          <ListItemButton sx={{ paddingLeft: '1.5rem' }}>
            <ListItemIcon>
              <Avatar
                alt="Remy Sharp"
                src="/static/mock-images/avatars/avatar_2.jpg"
                sx={{ width: 50, height: 50 }}
              />
            </ListItemIcon>
            <ListItemText primary="Sent mail" secondary="Nguoi ae thien lanh" />
          </ListItemButton>
        </Link>
      </Stack>
    </Box>
  );
}

export default PersonContact;
