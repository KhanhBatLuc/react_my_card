import { FormattedMessage } from 'react-intl';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Card, Link, Container, Typography } from '@mui/material';

import Logo from 'src/components/Logo';
import Page from 'src/components/Page';
import MHidden from 'src/components/@material-extend/MHidden';
import LanguagePopover from 'src/layouts/dashboard/LanguagePopover';

import i18n from '../lib/i18n';
import AuthSocial from './AuthSocial';
import RegisterForm from './RegisterForm';

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7)
  }
}));

export default function RegisterPage() {
  const { registerPage } = i18n.auth;
  return (
    <RootStyle title="Register | MyCard.vn">
      <HeaderStyle>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <MHidden width="smDown">
          <Typography
            variant="body2"
            sx={{
              mt: { md: -2 }
            }}
          >
            <FormattedMessage {...registerPage.notifyRegister} />
            &nbsp;
            <Link
              underline="none"
              variant="subtitle2"
              component={RouterLink}
              to="/login"
            >
              <FormattedMessage {...registerPage.login} />
            </Link>
            <LanguagePopover />
          </Typography>
        </MHidden>
        <MHidden width="smUp">
          <LanguagePopover />
        </MHidden>
      </HeaderStyle>
      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            <FormattedMessage {...registerPage.introApp} />
          </Typography>
          <img
            alt="register"
            src="/static/illustrations/illustration_register.png"
          />
        </SectionStyle>
      </MHidden>
      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              <FormattedMessage {...registerPage.tagNameRegister} />
            </Typography>
          </Box>

          <AuthSocial />

          <RegisterForm />

          <Typography
            variant="body2"
            align="center"
            sx={{ color: 'text.secondary', mt: 3 }}
          >
            <FormattedMessage {...registerPage.titleAgree} />
            &nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              <FormattedMessage {...registerPage.titleTerm} />
            </Link>
            &nbsp;and&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              <FormattedMessage {...registerPage.titlePrivacy} />
            </Link>
            .
          </Typography>

          <MHidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              <FormattedMessage {...registerPage.titleHasAccount} />{' '}
              &nbsp;
              <Link to="/login" component={RouterLink}>
                <FormattedMessage {...registerPage.login} />
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
