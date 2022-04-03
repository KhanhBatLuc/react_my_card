import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Stack, Typography } from '@mui/material';

import PreviewImage from 'src/components/individual/introduce-card/PreviewImage';
import IntroduceName from 'src/components/individual/introduce-card/IntroduceName';
import IntroduceListInfo from 'src/components/individual/introduce-card/IntroduceListInfo';

import i18n from '../../lib/i18n';
import ButtonConnect from './ButtonConnect';
import { RootStyle, RootLink } from './CardPublicPage.style';

function CardPublic({ personInfo }) {
  let cardId = useParams();

  const { CardPublishingPage } = i18n.cardAdd;

  const {
    cover_images,
    profile_picture,
    full_name,
    title,
    about,
    color,
    uuid,
    card_name,
    information
  } = personInfo;

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
      sx={{ maxWidth: '300px', margin: '25px auto' }}
    >
      <RootStyle>
        <PreviewImage
          cover_img={
            cover_images || '/static/mock-images/avatars/avatar_25.jpg'
          }
          profile_picture={
            profile_picture || '/static/mock-images/avatars/avatar_10.jpg'
          }
          color={color}
        />
        <IntroduceName
          full_name={full_name}
          title={title}
          about={about}
          card_name={card_name}
          color={color}
        />
        <IntroduceListInfo listInformation={information} color={color} />
      </RootStyle>
      <ButtonConnect
        title={
          cardId.uuid === uuid ? (
            <FormattedMessage {...CardPublishingPage.buttonYourCard} />
          ) : (
            <FormattedMessage {...CardPublishingPage.buttonConnect} />
          )
        }
        id={cardId}
        color={color}
      />

      <RootLink href="#" underline="none" sx={{ backgroundColor: color }}>
        <Typography fontSize="0.6875rem" lineHeight="2rem" align="center">
          <FormattedMessage {...CardPublishingPage.titleDigital} />
        </Typography>
      </RootLink>
    </Stack>
  );
}
export default CardPublic;
