import { forwardRef } from 'react';
import { TextField } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import i18n from '../../lib/i18n';

function NameCardEditing({ setNameCard, card_name }, ref) {
  const { CardAddingPage } = i18n.cardAdd;

  const handleChangeInput = (element) => {
    setNameCard(element.target.value);
  };

  return (
    <TextField
      fullWidth
      inputRef={ref}
      color="primary"
      variant="outlined"
      value={card_name?.value}
      onChange={handleChangeInput}
      label={<FormattedMessage {...CardAddingPage.nameCardAdding} />}
      error={card_name?.message ? true : false}
      helperText={card_name?.message}
    />
  );
}

export default forwardRef(NameCardEditing);
