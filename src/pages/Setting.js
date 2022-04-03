import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
// material
import {
  Grid,
  Container,
  Typography,
  Card,
  Stack,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
// component
import Page from '../components/Page';

//hook
const RootStyle = styled(Card)(({ theme }) => ({
  minWidth: 275,
  width: '100%',
  borderRadius: '0.625rem',

  boxShadow: theme.customShadows.z16
}));
function Setting() {
  return (
    <Page title="Contact | Minimal-UI">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item lg={6} sm={6} md={6} xs={12}>
            <RootStyle>
              <Stack direction={'row'} padding=" 1rem ">
                <Icon icon="mdi:card-text" height={24} />
                <Typography variant="h6" ml={'1rem'}>
                  Subscription
                </Typography>
              </Stack>
              <List sx={{ width: '100%' }}>
                <ListItemButton>
                  <ListItemText primary="Inbox" />
                  <ListItemIcon>
                    <Icon icon="mdi:chevron-right" height={24} />
                  </ListItemIcon>
                </ListItemButton>
              </List>
            </RootStyle>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default Setting;
