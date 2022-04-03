import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { FormattedMessage } from 'react-intl';
import { Card, Box, Typography } from '@mui/material';

import i18n from '../../lib/i18n';
import ButtonShare from './ButtonShare';
import ViewShareEmail from './share-info-code/ViewShareEmail';
import ViewShareText from './share-info-code/ViewShareText';
import ViewShareCode from './share-info-code/ViewShareCode';
import { useCardViewSelector } from '../lib/hook/cardViewHook';

import { isSuccess } from 'src/lib/utils/statusChecker';

const RootStyle = styled(Card)(({ theme }) => ({
  minWidth: 275,
  position: 'sticky',
  top: '4rem',
  borderRadius: '0.625rem',
  boxShadow: theme.customShadows.z24
}));

function CardShareInfo() {
  const { formShareInfo } = i18n.cardAdd.CardViewingPage;

  const { status, result } = useCardViewSelector();

  const [active, setActive] = useState(0);
  const handleActiveElement = (e) => {
    setActive(e);
  };

  let el = {};
  switch (active) {
    case 0:
      el = <ViewShareCode currentColor={isSuccess(status) && result.color} />;
      break;
    case 1:
      el = <ViewShareEmail currentColor={isSuccess(status) && result.color} />;
      break;
    case 2:
      el = <ViewShareText currentColor={isSuccess(status) && result.color} />;
      break;
    default:
      el = <ViewShareCode />;
      break;
  }

  return (
    <>
      <RootStyle>
        <Box sx={{ margin: '1rem' }}>
          <Typography
            sx={{ display: 'block' }}
            variant="header"
            mb={2}
            textAlign="center"
          >
            <FormattedMessage {...formShareInfo.titleSendCard} />
          </Typography>

          {el}
          <ButtonShare
            setActive={handleActiveElement}
            active={active}
            currentColor={isSuccess(status) && result.color}
          />
        </Box>
      </RootStyle>
    </>
  );
}

export default CardShareInfo;
