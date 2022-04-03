import PropTypes from 'prop-types';
import { Box } from '@mui/material';

import PositionedMenu from '../crop-img/PositonMenu';

export default function DefaultHasUpload({
  result,
  handleRemovePhoto,
  handleBackGrImg,
  sx
}) {
  return (
    <Box>
      {handleBackGrImg && (
        <PositionedMenu
          handleRemovePhoto={handleRemovePhoto}
          handleBackGrImg={handleBackGrImg}
        />
      )}
      <img
        src={result || '/static/mock-images/avatars/avatar_default.jpg'}
        style={{
          maxHeight: '400px',
          objectFit: 'cover',
          objectPosition: 'center center',
          width: '100%',
          ...sx
        }}
        alt="preview img"
      />
    </Box>
  );
}

DefaultHasUpload.propTypes = {
  result: PropTypes.string,
  handleRemovePhoto: PropTypes.func,
  handleBackGrImg: PropTypes.func
};
