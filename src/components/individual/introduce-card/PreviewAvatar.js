import { Icon } from '@iconify/react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
// material

const PhotoCamera = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '20px',
  bottom: '6px',
  backgroundColor: 'transparent',
  zIndex: '2',
  borderRadius: '50%',
  height: '100px',
  width: '100px',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    height: '80px',
    width: '80px',
    bottom: 5
  }
}));

function PreviewAvatar({ currentColor, img }) {
  // upload avatar

  return (
    <>
      <PhotoCamera style={{ boxShadow: `0px 0px 2px 5px ${currentColor}` }}>
        {img && (
          <img
            src={img}
            style={{
              position: 'absolute',
              top: '0',
              width: '100%',
              height: '100px',
              objectFit: 'cover'
            }}
            alt=""
          />
        )}
      </PhotoCamera>
    </>
  );
}

export default PreviewAvatar;
