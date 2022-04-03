import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

const CardAddingStyle = styled(Card)(({ theme }) => ({
  height: '272px',
  border: '1px dashed #283593',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  boxShadow: theme.customShadows.z16
}));

export default CardAddingStyle;
