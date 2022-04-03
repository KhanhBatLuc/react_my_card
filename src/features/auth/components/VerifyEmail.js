import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { Box, Button, Typography, Container } from '@mui/material';
import { MotionContainer, varBounceIn } from 'src/components/animate';

import Page from 'src/components/Page';
import { IMG_STATUS } from 'src/lib/utils/constants';
import { verifyRegister } from 'src/lib/api/authApi';
import { isSuccess, isInit, STATUS } from 'src/lib/utils/statusChecker';

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

const ShowNotify = ({ img, text }) => {
  return (
    <>
      <motion.div variants={varBounceIn}>
        <Box
          component="img"
          src={img}
          sx={{ height: 260, mx: 'auto', my: { xs: 2 } }}
        />
      </motion.div>
      <motion.div variants={varBounceIn}>
        <Typography sx={{ color: 'text.secondary', my: 3 }}>{text}</Typography>
      </motion.div>

      <Button
        to="/login"
        size="large"
        variant="contained"
        component={RouterLink}
      >
        Go to app
      </Button>
    </>
  );
};

export default function VerifyEmail() {
  const [status, setStatus] = useState(STATUS.init);
  const { token } = useParams();

  useEffect(async () => {
    try {
      await verifyRegister(token);
      setStatus(STATUS.success);
    } catch (error) {
      setStatus(STATUS.error);
    }
  }, []);

  const handleShowNotification = () => {
    let number;
    isSuccess(status) ? (number = 0) : (number = 1);
    return (
      <ShowNotify img={IMG_STATUS[number].img} text={IMG_STATUS[number].text} />
    );
  };

  return (
    <RootStyle title="Verify Email  | MyCard.vn">
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            {!isInit(status) && handleShowNotification()}
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
