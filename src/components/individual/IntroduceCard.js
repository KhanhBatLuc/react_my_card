import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

import PreviewImage from './introduce-card/PreviewImage';
import IntroduceName from './introduce-card/IntroduceName';
import IntroduceListInfo from './introduce-card/IntroduceListInfo';
import { useCardViewSelector } from '../../features/card/card-viewing/lib/hook/cardViewHook';

import { isSuccess } from 'src/lib/utils/statusChecker';

const RootStyle = styled(Card)(({ theme }) => ({
  minWidth: 275,
  borderRadius: '0.625rem',
  boxShadow: theme.customShadows.z24
}));

function IntroduceCard({ elementButton }) {
  const { status, result } = useCardViewSelector();

  return (
    <>
      {isSuccess(status) && (
        <RootStyle>
          <PreviewImage
            cover_img={
              result.cover_images ||
              '/static/mock-images/avatars/avatar_default.jpg'
            }
            profile_picture={
              result.profile_picture ||
              '/static/mock-images/avatars/avatar_default.jpg'
            }
            color={result.color}
          />
          <IntroduceName
            full_name={result.full_name}
            title={result.title}
            about={result.about}
            card_name={result.card_name}
            color={result.color}
            company_name={result.company_name}
          />
          <IntroduceListInfo
            listInformation={result.information}
            color={result.color}
          />
        </RootStyle>
      )}
      {elementButton || ''}
    </>
  );
}

export default IntroduceCard;
