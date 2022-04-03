import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

const CardItem = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: '.75s transform ease ',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: theme.customShadows.weight,
    transform: 'translateY(-8px)'
  }
}));

export default CardItem;
