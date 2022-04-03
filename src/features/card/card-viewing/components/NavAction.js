import { useState } from 'react';
import { Icon } from '@iconify/react';
import { FormattedMessage } from 'react-intl';
import { useNavigate, useParams } from 'react-router-dom';
import { Stack, IconButton, Tooltip } from '@mui/material';

import { useAlert } from 'src/lib/hook/alertHook';

import i18n from '../../lib/i18n';
import AlertConfirm from '../../card-deleting/component/AlertConfirm';

function NavAction() {
  const navigate = useNavigate();
  const { cardId } = useParams();

  const { navBarViewingCard } = i18n.cardAdd.CardViewingPage;

  const { clearAlert, clearAlertInfo } = useAlert();

  const [dataAlert, setDataAlert] = useState({
    isOpenAlert: false,
    cardId: null
  });

  const handleDeleteCard = (cardId) => {
    // open Alert
    setDataAlert({
      isOpenAlert: !dataAlert.isOpenAlert,
      cardId: cardId
    });
  };

  const handleRedirectPage = (cardId) => {
    clearAlert();
    clearAlertInfo();
    return navigate(`/dashboard/cards/${cardId}/edit`);
  };

  return (
    <Stack direction="row" mb={3} spacing={3}>
      <IconButton onClick={() => navigate('/dashboard/cards')}>
        <Icon icon="mdi:arrow-left" style={{ fontSize: '24px' }} />
      </IconButton>

      <Tooltip title={<FormattedMessage {...navBarViewingCard.edit} />}>
        <IconButton onClick={() => handleRedirectPage(cardId)}>
          <Icon icon="mdi:pencil" style={{ fontSize: '24px' }} />
        </IconButton>
      </Tooltip>
      <Tooltip
        title={<FormattedMessage {...navBarViewingCard.delete} />}
        onClick={() => handleDeleteCard(cardId)}
      >
        <IconButton>
          <Icon icon="mdi:delete" style={{ fontSize: '24px' }} />
        </IconButton>
      </Tooltip>
      <AlertConfirm
        isOpenAlert={dataAlert.isOpenAlert}
        onCloseAlert={() => setDataAlert(false)}
        cardId={dataAlert.cardId}
      />
    </Stack>
  );
}

export default NavAction;
