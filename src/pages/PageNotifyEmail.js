import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Typography, Container } from '@mui/material';
import { MotionContainer, varBounceIn } from '../components/animate';

import Page from '../components/Page';

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

export default function PageNotifyEmail() {
  return (
    <RootStyle title="Page Notification Email  | MyCard.vn">
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <motion.div variants={varBounceIn}>
              <Box
                component="img"
                src="/static/illustrations/success.svg"
                sx={{ height: 260, mx: 'auto', my: { xs: 3 } }}
              />
            </motion.div>
            <motion.div variants={varBounceIn}>
              <Typography variant="h3" paragraph>
                Account Confirmation
              </Typography>
            </motion.div>
            <Typography sx={{ color: 'text.secondary' }}>
              An email with your account confirmation link has been sent to your
              email
            </Typography>

            <motion.div variants={varBounceIn}>
              <Typography variant="h6" paragraph>
                Check your email and comeback to process !
              </Typography>
            </motion.div>

            <Button
              to="/login"
              size="large"
              variant="contained"
              component={RouterLink}
            >
              Back
            </Button>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
