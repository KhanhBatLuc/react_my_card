import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import i18n from '../../lib/i18n';
import CardAddingStyle from './CardAdding.style';

export default function CardAdding() {
  const navigate = useNavigate();

  const { CardViewingPage } = i18n.cardAdd;

  const handleRedirectPageAddCard = () => {
    navigate('/dashboard/cards/add');
  };
  return (
    <CardAddingStyle onClick={handleRedirectPageAddCard}>
      <Box
        sx={{
          m: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transform: 'translateY(50%)',
          marginTop: '75px'
        }}
      >
        <Icon icon="mdi:plus-thick" fontSize={30} color="#283593" />
        <Typography
          variant="h6"
          color="#283593"
          fontWeight="400"
          align="center"
        >
          <FormattedMessage {...CardViewingPage.nameViewingCard} />
        </Typography>
      </Box>
    </CardAddingStyle>
  );
}

CardAdding.propTypes = {};
