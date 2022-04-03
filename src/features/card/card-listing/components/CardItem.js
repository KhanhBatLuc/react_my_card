import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, CardMedia } from '@mui/material';

import CardItemStyle from './CardItem.style';

export default function CardItem({ id, cover_images, picture_profile, name }) {
  const navigate = useNavigate();

  const handleRedirectPage = (id) => {
    navigate(`/dashboard/cards/${id}`, { replace: true });
  };

  return (
    <CardItemStyle onClick={() => handleRedirectPage(id)}>
      <CardMedia
        component="img"
        height="200px"
        image={cover_images || picture_profile}
        alt="image_card"
      />
      <Box sx={{ py: 3 }}>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ textTransform: 'uppercase' }}
        >
          {name}
        </Typography>
      </Box>
    </CardItemStyle>
  );
}

CardItem.propTypes = {
  id: PropTypes.number.isRequired,
  cover_images: PropTypes.string,
  picture_profile: PropTypes.string,
  name: PropTypes.string.isRequired
};
