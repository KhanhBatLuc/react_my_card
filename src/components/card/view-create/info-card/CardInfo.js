import { useState } from 'react';
import { Icon } from '@iconify/react';
import { FormattedMessage } from 'react-intl';
import { Card, Box, Divider, SpeedDial, Dialog } from '@mui/material';

import ListInfo from './list-info';
import i18n from '../../../../features/card/lib/i18n';
import { MHidden } from 'src/components/@material-extend';
import { useColorSelector } from 'src/lib/hook/colorHook';

function CardInfo({ setCardInfo }) {
  const [toggleDialog, setToggleDialog] = useState(false);

  const { informationForm } = i18n.cardAdd.CardAddingPage;

  const { colorActive } = useColorSelector();

  const toggleApp = () => {
    setToggleDialog(!toggleDialog);
  };
  return (
    <>
      <MHidden width="smDown">
        <Card
          sx={{
            minWidth: 275,
            position: 'sticky',
            top: '1rem',
            padding: '.80rem',
            borderRadius: ' 0.625rem'
          }}
        >
          <Box>
            <Divider
              textAlign="center"
              sx={{ pt: '10px', pb: '20px', color: '#47494a' }}
            >
              <FormattedMessage {...informationForm.titleInformation} />
            </Divider>
            <ListInfo setCardInfo={setCardInfo} />
          </Box>
        </Card>
      </MHidden>
      <MHidden width="smUp">
        <Box
          sx={{
            transform: 'translateZ(0px)',
            flexGrow: 1,
            zIndex: '2000',
            position: 'fixed',
            top: '80%',
            right: 16
          }}
          onClick={() => setToggleDialog(!toggleDialog)}
        >
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            icon={
              <Icon
                icon={toggleDialog ? 'clarity:remove-solid' : 'akar-icons:plus'}
                rotate={10}
                height={24}
              />
            }
            FabProps={{
              size: 'medium',
              style: { backgroundColor: colorActive }
            }}
          />
        </Box>

        <Dialog
          fullWidth
          onClose={() => setToggleDialog(false)}
          open={toggleDialog}
        >
          <Box>
            <Divider
              textAlign="center"
              sx={{ pt: '10px', pb: '20px', color: '#47494a' }}
            >
              <FormattedMessage {...informationForm.titleInformation} />
            </Divider>
            <ListInfo
              toggleApp={toggleApp}
              toggleDialog={toggleDialog}
              setCardInfo={setCardInfo}
            />
          </Box>
        </Dialog>
      </MHidden>
    </>
  );
}

export default CardInfo;
