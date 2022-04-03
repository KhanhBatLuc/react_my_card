import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(0.25),
  paddingBottom: theme.spacing(0.25)
}));

export const CustomizedCard = styled(Card)(({ theme }) => ({
  boxShadow: theme.customShadows.z30
}));
