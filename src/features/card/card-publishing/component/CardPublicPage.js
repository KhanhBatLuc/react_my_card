import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';

import CardPublic from './CardPublic';
import {
  useCardPublic,
  useCardPublicSelector
} from '../lib/hook/cardPublicHook';

import { Page } from 'src/components';
import LoadingPage from 'src/pages/LoadingPage';
import { isPublishing, isError, isSuccess } from 'src/lib/utils/statusChecker';

function CardPublicPage() {
  const { uuid } = useParams();
  const navigate = useNavigate();

  const { showCardPublic } = useCardPublic();
  const { status, result } = useCardPublicSelector();

  useEffect(() => {
    showCardPublic(uuid);
  }, []);

  const renderCardPublishing = () => {
    if (isPublishing(status)) {
      return <LoadingPage />;
    }

    if (isSuccess(status)) {
      return <CardPublic personInfo={result} />;
    }

    if (isError(status)) {
      // TODO: Update to show an error message and a button "Reload" for user can reload.
      return navigate('404', { replace: true });
    }

    return null;
  };

  return (
    <Page title="Card | Minimal-UI">
      <Container maxWidth="xl">{renderCardPublishing()}</Container>
    </Page>
  );
}

export default CardPublicPage;
