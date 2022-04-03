import { styled } from '@mui/material/styles';
import { Card, Button, Link } from '@mui/material';

export const RootStyle = styled(Card)(({ theme }) => ({
  minWidth: 275,
  borderRadius: theme.shape.borderRadiusMd,
  boxShadow: theme.customShadows.z30
}));

export const RootLink = styled(Link)(({ theme }) => ({
  borderTopLeftRadius: '2rem',
  borderTopRightRadius: '2rem',
  color: '#ffffff',
  opacity: '0.85',
  maxWidth: '400px',
  position: 'fixed',
  bottom: '0',
  zIndex: '1',
  width: '100%'
}));

export const RootButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius50,
  padding: theme.spacing(2, 5)
}));
