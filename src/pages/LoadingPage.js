import { styled } from '@mui/material/styles';
import { CircularProgress, Container, Stack, Box } from '@mui/material';

import Page from '../components/Page';

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

const Pseudo = styled(Box)(({ theme }) => ({
  display: 'none',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 2005,
  background:
    'linear-gradient(75deg, rgba(22, 28, 36, 0.48) 0%, rgba(22, 28, 36, 1) 100%)'
}));

export default function LoadingPage() {
  return (
    <RootStyle title="LoadingPage | myCard.vn">
      <Container>
        <Pseudo sx={{ display: 'inherit' }}></Pseudo>
        <Stack
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2006
          }}
        >
          <CircularProgress sx={{ zIndex: 2007 }} />
        </Stack>
      </Container>
    </RootStyle>
  );
}
