// material
import { Grid, Container } from '@mui/material';
// component
import Page from '../components/Page';
import ListContact from '../components/contact/ListContact';
import { useParams } from 'react-router-dom';
import SearchContact from 'src/components/contact/SearchContact';

//hook

function Contact() {
  const { param } = useParams();

  return (
    <Page title="Contact | Minimal-UI">
      <Container maxWidth="xl">
        <SearchContact />
        <Grid container alignItems="center" spacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={3} sm={4} md={3} xs={12}>
            <ListContact />
          </Grid>
          <Grid item lg={3} sm={4} md={3} xs={12}>
            <ListContact />
          </Grid>
          <Grid item lg={3} sm={4} md={3} xs={12}>
            <ListContact />
          </Grid>
          <Grid item lg={3} sm={4} md={3} xs={12}>
            <ListContact />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default Contact;
