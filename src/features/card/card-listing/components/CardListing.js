import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

import CardAdding from './CardAdding';
import CardItem from './CardItem';

function CardListing({ cards }) {
  return (
    <>
      <Grid item lg={3} sm={4} md={3} xs={7}>
        <CardAdding />
      </Grid>
      {cards?.map((card) => (
        <Grid key={card.id} item lg={3} sm={4} md={3} xs={7}>
          <CardItem
            cover_images={card.cover_images}
            picture_profile={card.profile_picture}
            name={card.card_name}
            id={card.id}
          />
        </Grid>
      ))}
    </>
  );
}

CardListing.propTypes = {
  cards: PropTypes.array.isRequired
};

export default CardListing;
