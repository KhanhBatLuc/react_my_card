import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
// material
import { Card } from '@mui/material';
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
//component

const RootStyle = styled(Card)(({ theme }) => ({
  minWidth: 275,
  borderRadius: theme.shape.borderRadiusSm,
  overflowY: 'scroll',
  maxHeight: 350,

  boxShadow: theme.customShadows.z16
}));

AddContact.propTypes = {
  onOpenViewContact: PropTypes.func
};

export default function AddContact({ onOpenViewContact }) {
  return (
    <>
      <RootStyle>
        <Box p="2rem 1rem" sx={{ borderBottom: '1px solid #e7e7e7' }}>
          <Typography>January 6 ,2022</Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Link onClick={() => onOpenViewContact()} width="100%" underline="none" color="inherit">
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
      </RootStyle>
    </>
  );
}
