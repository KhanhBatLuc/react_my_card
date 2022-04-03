import { useEffect } from 'react';
import { Grid, Container, CircularProgress } from '@mui/material';

import { isListing, isSuccess, isError } from 'src/lib/utils/statusChecker';
import { Page } from 'src/components';

import { useCardList, useCardListSelector } from '../lib/hook/cardListHook';
import CardSearching from './CardSearching';
import CardListing from './CardListing';

function CardListingPage() {
  const { status, result, error } = useCardListSelector();
  const { getCardList } = useCardList();

  useEffect(() => {
    getCardList();
  }, []);

  const renderCardListing = () => {
    if (isListing(status)) {
      return <CircularProgress sx={{ margin: '0 auto' }} />;
    }

    if (isSuccess(status)) {
      return <CardListing cards={result} />;
    }

    if (isError(status)) {
      // TODO: Update to show an error message and a button "Reload" for user can reload.
      return error.status_code;
    }

    return null;
  };

  return (
    <Page title="Cards - MyCard.vn">
      <Container maxWidth="xl">
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={12}>
            <CardSearching />
          </Grid>
          {renderCardListing()}
        </Grid>
      </Container>
    </Page>
  );
}

export default CardListingPage;
