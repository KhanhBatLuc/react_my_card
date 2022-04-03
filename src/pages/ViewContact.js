import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
// material
import { Grid, Container, Card, Box, Typography } from '@mui/material';
// component
import Page from '../components/Page';
import { useParams } from 'react-router-dom';
import SearchContact from 'src/components/contact/SearchContact';
import IntroduceCard from 'src/components/individual/IntroduceCard';
import TagsContact from 'src/components/contact/add-contact/TagsContact';
import ConnectionContact from 'src/components/contact/add-contact/ConnectionContact';

//hook

const RootStyle = styled(Card)(({ theme }) => ({
  minWidth: 275,
  borderRadius: '0.625rem',
  padding: '1rem',
  boxShadow: theme.customShadows.z24
}));

function ViewContact() {
  const { param } = useParams();

  return (
    <Page title="Contact | Minimal-UI">
      <Container maxWidth="xl">
        <SearchContact />
        <Grid container spacing={3}>
          <Grid item lg={5} sm={5} md={5} xs={12}>
            <IntroduceCard />
          </Grid>
          <Grid item lg={7} sm={7} md={7} xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <RootStyle>
                  <Typography variant="h5">Tags</Typography>
                  <TagsContact />
                </RootStyle>
              </Grid>
              <Grid item xs={12}>
                <RootStyle>
                  <Typography variant="h5">Connection</Typography>
                  <ConnectionContact />
                </RootStyle>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default ViewContact;
