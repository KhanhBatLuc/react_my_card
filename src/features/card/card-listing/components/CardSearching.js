import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { FormattedMessage } from 'react-intl';
import { InputBase, Divider, IconButton, Tooltip } from '@mui/material';

import i18n from '../../../../features/card/lib/i18n';
import { RootStyle, CustomizedCard } from './CardSearching.style';

CardSearching.propTypes = {
  onOpenSidebarContact: PropTypes.func
};

function CardSearching({ onOpenSidebarContact }) {
  const { nameViewingCard } = i18n.cardAdd.CardViewingPage;
  return (
    <CustomizedCard>
      <RootStyle>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Cards" />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <Icon icon="mdi:magnify" />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          sx={{ p: '10px' }}
          aria-label="directions"
          onClick={onOpenSidebarContact}
        >
          <Tooltip
            title={<FormattedMessage {...nameViewingCard} />}
            placement="top"
          >
            <Icon icon="mdi:plus-circle-outline" />
          </Tooltip>
        </IconButton>
      </RootStyle>
    </CustomizedCard>
  );
}

export default React.memo(CardSearching);
