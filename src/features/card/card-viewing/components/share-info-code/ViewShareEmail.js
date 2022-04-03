import { FormattedMessage } from 'react-intl';
import { Typography, Box, Button } from '@mui/material';

import i18n from '../../../lib/i18n';
import {
  MyTextField,
  MyTextArea
} from '../../../../../components/card/view-create/new-card/myText';

function ViewShareEmail({ currentColor }) {
  const { textForm, emailForm } = i18n.cardAdd.CardViewingPage.formShareInfo;
  return (
    <>
      <Typography variant="body3">
        <FormattedMessage {...textForm.text} />
      </Typography>
      <Box sx={{ width: '100%', padding: '1rem' }}>
        <MyTextField
          label={<FormattedMessage {...emailForm.name} />}
          currentColor={currentColor}
        />
        <MyTextField
          label={<FormattedMessage {...emailForm.email} />}
          currentColor={currentColor}
        />
        <MyTextArea
          label={<FormattedMessage {...emailForm.message} />}
          currentColor={currentColor}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ my: '.75rem', backgroundColor: currentColor }}
        >
          <FormattedMessage {...textForm.buttonSend} />
        </Button>
      </Box>
    </>
  );
}

export default ViewShareEmail;
