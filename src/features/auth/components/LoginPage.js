import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import Logo from 'src/components/Logo';
import Page from 'src/components/Page';
import { MHidden } from 'src/components/@material-extend';
import LanguagePopover from 'src/layouts/dashboard/LanguagePopover';

import AuthSocial from './AuthSocial';
import LoginForm from './LoginForm';
import i18n from '../lib/i18n';

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

export default function LoginPage() {
  const { loginPage } = i18n.auth;
  return (
    <RootStyle title="Login | MyCard.vn">
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
            <FormattedMessage {...loginPage.accountQuestion} /> &nbsp;
            <Link
              underline="none"
              variant="subtitle2"
              component={RouterLink}
              to="/register"
            >
              <FormattedMessage {...loginPage.getStarted} />
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
            <FormattedMessage {...loginPage.greeting} />
          </Typography>
          <img src="/static/illustrations/illustration_login.png" alt="login" />
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              <FormattedMessage {...loginPage.signIn} />
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              <FormattedMessage {...loginPage.signInDetails} />
            </Typography>
          </Stack>
          <AuthSocial />
          <LoginForm />
          <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              <FormattedMessage {...loginPage.accountQuestion} />
              &nbsp;
              <Link variant="subtitle2" component={RouterLink} to="/register">
                <FormattedMessage {...loginPage.getStarted} />
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
