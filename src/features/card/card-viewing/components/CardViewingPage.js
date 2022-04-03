import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useParams } from 'react-router-dom';
import { Grid, Container, Box, SpeedDial, Dialog } from '@mui/material';

import NavAction from './NavAction';
import ShareInfo from './CardShareInfo';
import { useCardView } from '../lib/hook/cardViewHook';

import Page from 'src/components/Page';
import { MHidden } from 'src/components/@material-extend';
import IntroduceCard from 'src/components/individual/IntroduceCard';

function SimpleDialog(props) {
  const { onCloseToggle, toggleDialog } = props;

  return (
    <Dialog onClose={() => onCloseToggle(false)} toggleDialog={toggleDialog}>
      {props.children}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  toggleDialog: PropTypes.bool.isRequired
};

function CardViewingPage() {
  const [toggleDialog, setToggleDialog] = useState(false);

  const { cardId } = useParams();

  const { getCardView } = useCardView();

  useEffect(() => {
    getCardView(cardId);
  }, []);

  return (
    <Page title="Card | Minimal-UI">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <NavAction />
          </Grid>
          <Grid item lg={5} md={6} sm={6} xs={12}>
            <IntroduceCard />
          </Grid>
          <MHidden width="smDown">
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <ShareInfo />
            </Grid>
          </MHidden>
          <MHidden width="smUp">
            <Box
              sx={{
                height: 320,
                transform: 'translateZ(0px)',
                flexGrow: 1,
                zIndex: '1',
                position: 'fixed',
                top: '80%',
                right: 16
              }}
              onClick={() => setToggleDialog(true)}
            >
              <SpeedDial
                ariaLabel="SpeedDial basic example"
                icon={<Icon icon="mdi:send" rotate={10} height={24} />}
              />
            </Box>

            <Dialog
              fullWidth
              onClose={() => setToggleDialog(false)}
              open={toggleDialog}
            >
              <ShareInfo />
            </Dialog>
          </MHidden>
        </Grid>
      </Container>
    </Page>
  );
}

export default CardViewingPage;
