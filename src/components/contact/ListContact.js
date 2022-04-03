import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
// material
import { Box, Card, Typography, Avatar } from '@mui/material';
// ----------------------------------------------------------------------

function WrapImg({ children }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-evenly"
      flexWrap="wrap"
      padding={3}
      maxWidth={200}
      margin="0 auto"
    >
      {children}
    </Box>
  );
}

const CardItem = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: '.75s transform ease ',

  cursor: 'pointer',
  '&:hover': {
    boxShadow: theme.customShadows.weight,
    transform: 'translateY(-8px)'
  }
}));

ListContact.propTypes = {};

export default function ListContact({ img, name }) {
  return (
    <CardItem>
      <WrapImg>
        <Avatar
          alt="Remy Sharp"
          src="/static/mock-images/avatars/avatar_1.jpg"
          sx={{ width: 56, height: 56, marginBottom: '1rem' }}
        />
        <Avatar
          alt="Remy Sharp"
          src="/static/mock-images/avatars/avatar_1.jpg"
          sx={{ width: 56, height: 56, marginBottom: '1rem' }}
        />
        <Avatar
          alt="Remy Sharp"
          src="/static/mock-images/avatars/avatar_1.jpg"
          sx={{ width: 56, height: 56, marginBottom: '1rem' }}
        />
        <Avatar
          alt="Remy Sharp"
          src="/static/mock-images/avatars/avatar_1.jpg"
          sx={{ width: 56, height: 56, marginBottom: '1rem' }}
        />
      </WrapImg>
      <Box sx={{ pb: 1 }}>
        <Typography variant="body1" align="center">
          All Contact
        </Typography>
        <Typography fontSize=".75rem" align="center">
          4 contact
        </Typography>
      </Box>
    </CardItem>
  );
}
