import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Button, Box, Typography, Stack, Link, Skeleton } from '@mui/material';

import i18n from '../../../lib/i18n';
import ListIcon from './ListIcon';
import LineQRCode from './LineQRCode';
import { useCardViewSelector } from '../../lib/hook/cardViewHook';

import { isViewing, isSuccess, isError } from 'src/lib/utils/statusChecker';

function ViewShareCode({ currentColor }) {
  const navigate = useNavigate();

  const { formShareInfo } = i18n.cardAdd.CardViewingPage;
  const { status, result, error } = useCardViewSelector();

  const renderQrCode = () => {
    if (isViewing(status)) {
      return (
        <Box sx={{ transform: 'translateY(50px)' }}>
          <Skeleton />
          <Skeleton animation="pulse" />
          <Skeleton />
        </Box>
      );
    }

    if (isSuccess(status)) {
      const { qr_code } = result;
      return <img width="100%" src={qr_code} alt="qr_code" />;
    }

    if (isError(status)) {
      // TODO: Update to show an error message and a button "Reload" for user can reload.
      navigate('/404', { replace: true });
      return error.status_code;
    }

    return null;
  };
  const renderLinkPublic = () => {
    if (isSuccess(status)) {
      const { uuid } = result;
      return `http://localhost:3000/public/${uuid}`;
    }
  };

  return (
    <>
      <Link href={renderLinkPublic()} underline="none">
        <Stack
          sx={{ m: '1rem auto', maxWidth: '200px', position: 'relative' }}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <LineQRCode />
          <Box
            sx={{
              left: ' 0px',
              margin: ' 0.55rem',
              position: 'absolute',
              top: '0px',
              width: '90%'
            }}
          >
            {renderQrCode()}
          </Box>
          <Typography color={currentColor} fontSize="10px">
            <FormattedMessage {...formShareInfo.alertScanner} />
          </Typography>
        </Stack>
      </Link>

      <ListIcon />

      <Stack
        mt="1rem"
        mb="2rem"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          sx={{ color: currentColor }}
          variant="outlined"
          startIcon={<Icon icon="mdi:content-copy" />}
        >
          <Typography color={currentColor} variant="body2">
            <FormattedMessage {...formShareInfo.buttonCoppy} />
          </Typography>
        </Button>
      </Stack>
    </>
  );
}

export default ViewShareCode;
