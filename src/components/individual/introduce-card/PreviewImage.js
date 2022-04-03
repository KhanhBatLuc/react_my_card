import PropTypes from 'prop-types';
import { Box } from '@mui/material';

import PreviewAvatar from './PreviewAvatar';

import LineColor from '../../card/view-create/new-card/line-color';
import DefaultHasUpload from '../../card/view-create/new-card/avatar/DefaultHasUpload';

PreviewImage.propTypes = {
  cover_img: PropTypes.string,
  profile_picture: PropTypes.string,
  color: PropTypes.string
};

function PreviewImage(props) {
  const { cover_img, profile_picture, color } = props;

  return (
    <>
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <DefaultHasUpload result={cover_img} sx={{ maxHeight: '400px' }} />
        <LineColor currentColor={color} />
        <PreviewAvatar currentColor={color} img={profile_picture} />
      </Box>
    </>
  );
}

export default PreviewImage;
