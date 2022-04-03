import { useEffect, useState } from 'react';
import { Grid, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Page } from 'src/components';
import LoadingPage from 'src/pages/LoadingPage';
import { LIST_ICON_INFORMATION } from 'src/lib/utils/constants';
import {
  STATUS,
  isViewing,
  isSuccess,
  isError
} from 'src/lib/utils/statusChecker';

import CardEditing from './CardEditing';
import {
  useCardView,
  useCardViewSelector
} from '../../card-viewing/lib/hook/cardViewHook';

function CardEditingPage() {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const { getCardView } = useCardView();
  const { status, result } = useCardViewSelector();

  const modifyArrayInformation = (result) => {
    let res = result.map((e, index) => {
      if (e.type_id === LIST_ICON_INFORMATION[e.type_id - 1].type_id) {
        return {
          ...result[index],
          icon: LIST_ICON_INFORMATION[e.type_id - 1].icon
        };
      }
    });
    return res;
  };

  useEffect(async () => {
    if (!isSuccess(status)) {
      await getCardView(cardId);
    }
  }, []);

  const renderCardEditing = () => {
    if (isViewing(status)) {
      return <LoadingPage />;
    }
    if (isSuccess(status)) {
      const dataHasModify = modifyArrayInformation(result.information);
      return <CardEditing result={result} listInformation={dataHasModify} />;
    }
    if (isError(status)) {
      return navigate('/404', { replace: true });
    }
  };

  return (
    <Page title="Create | Minimal-UI">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {renderCardEditing()}
        </Grid>
      </Container>
    </Page>
  );
}

export default CardEditingPage;
