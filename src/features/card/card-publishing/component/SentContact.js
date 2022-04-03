import { Icon } from '@iconify/react';
import { FormattedMessage } from 'react-intl';
import { styled } from '@mui/material/styles';
import { Card, Button, Box, Link, Typography, IconButton } from '@mui/material';

import i18n from '../../lib/i18n';
import ContactSvg from './ContactSvg';

const RootDialog = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  transform: 'translateX(-50%)',
  width: '100%',
  borderRadius: 'unset',
  overflow: 'visible',
  position: 'fixed',
  bottom: '-50%',
  visibility: 'hidden',
  zIndex: 1900,
  transition: '.2s cubic-bezier(0.1, 0.37, 1, 0.41) bottom .25s',
  borderTopLeftRadius: theme.shape.borderRadiusMd,
  borderTopRightRadius: theme.shape.borderRadiusMd,
  boxShadow: theme.customShadows.z30
}));

const ImgContact = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '100%',
  display: 'flex',
  alignItems: 'center',
  fontSize: '60px',
  height: '97px',
  justifyContent: 'center',
  left: '50%',
  boxShadow:
    ' 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%)',
  position: 'absolute',
  top: '0px',
  transform: 'translate3d(-50%, -60%, 0px)',
  width: '97px'
}));

const Pseudo = styled(Box)(({ theme }) => ({
  display: 'none',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
  background:
    'linear-gradient(75deg, rgba(22, 28, 36, 0.48) 0%, rgba(22, 28, 36, 1) 100%)'
}));

const BoxIcon = styled(Box)(({ theme }) => ({
  alignItem: 'center',
  height: ' 5rem',
  justifyContent: 'center',
  margin: '0.5rem',
  zIndex: 1999,
  textAlign: 'right'
}));

export default function SentContact({ show, handleClose, color }) {
  const { CardPublishingPage } = i18n.cardAdd;
  return (
    <>
      <div>
        <Pseudo sx={show && { display: 'inherit' }}></Pseudo>
        <RootDialog sx={show && { visibility: 'visible', bottom: 0 }}>
          <BoxIcon>
            <ImgContact>
              <ContactSvg currentColor={color} />
            </ImgContact>
            <IconButton onClick={() => handleClose()}>
              <Icon icon="mdi:close" height={30} />
            </IconButton>
          </BoxIcon>
          <Box sx={{ margin: '0 2rem' }}>
            <Typography lineHeight="2rem">
              Give nguyen toan my dsa card.
            </Typography>
            <Link
              href="#"
              underline="none"
              fontSize="0.85rem"
              sx={{ color: color }}
            >
              <FormattedMessage {...CardPublishingPage.changeContact} />
            </Link>
            <Button
              sx={{ backgroundColor: color, margin: '1rem 0' }}
              variant="contained"
              fullWidth
            >
              <FormattedMessage {...CardPublishingPage.buttonSend} />
            </Button>
          </Box>
        </RootDialog>
      </div>
    </>
  );
}
