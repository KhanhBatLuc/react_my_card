import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
// material
import { Grid, Container, Box, Drawer, Button, Stack, IconButton, Typography } from '@mui/material';
// component
import Page from '../components/Page';
import { useParams } from 'react-router-dom';
import AddContact from 'src/components/contact/add-contact';
import SearchContact from 'src/components/contact/SearchContact';

import IntroduceCard from '../components/individual/IntroduceCard';
import TagsContact from '../components/contact/add-contact/TagsContact';
import ConnectionContact from '../components/contact/add-contact/ConnectionContact';

//hook
import { useState } from 'react';

const RootSideDetailContact = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: '40%'
  },
  [theme.breakpoints.down('md')]: {
    flexShrink: 0,
    width: '100%'
  }
}));

function DetailContact() {
  const { param } = useParams();
  const [openP, setOpenP] = useState(false);

  const renderContent = (
    <Box sx={{ margin: '1rem' }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between">
            <IconButton onClick={() => setOpenP(false)}>
              <Icon icon="mdi:close-thick" />
            </IconButton>
            <IconButton>
              <Icon icon="mdi:delete" />
            </IconButton>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <IntroduceCard
            item={
              <Button
                variant="contained"
                fullWidth
                endIcon={<Icon icon="mdi:arrow-right" />}
                sx={{
                  padding: '1rem 0.5rem',
                  position: 'sticky',
                  bottom: 0,
                  zIndex: 1,
                  mt: '.5rem'
                }}
              >
                View
              </Button>
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Tags</Typography>
          <TagsContact />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Connection</Typography>
          <ConnectionContact />
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Page title="Contact | Minimal-UI">
      <Container maxWidth="xl">
        <Stack direction={'row'} width={'100%'}>
          <Box width={openP ? ['70%', '60%'] : '100%'}>
            <SearchContact />
            <AddContact onOpenViewContact={() => setOpenP(true)} />
          </Box>
          <Box width={openP ? ['30%', '40%'] : '0'}>
            <RootSideDetailContact>
              <Drawer
                open={openP}
                anchor="right"
                variant="persistent"
                PaperProps={{
                  sx: {
                    width: ['100%', 400],
                    bgcolor: 'background.default',
                    zIndex: 2000
                  }
                }}
              >
                {renderContent}
              </Drawer>
            </RootSideDetailContact>
          </Box>
        </Stack>
      </Container>
    </Page>
  );
}

export default DetailContact;
