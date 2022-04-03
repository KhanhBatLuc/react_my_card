import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';

import CropImg from '../view-create/new-card/crop-img/Crop';

const PhotoCamera = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '20px',
  bottom: '20px',
  backgroundColor: 'transparent',
  zIndex: '2',
  borderRadius: '50%',
  height: '100px',
  width: '100px',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    height: '80px',
    width: '80px'
  }
}));

function UploadAvatarEdit({
  currentColor,
  getFileProfilePicture,
  profile_picture
}) {
  // upload avatar
  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [resultAvatar, setResultAvatar] = useState(profile_picture);

  useEffect(() => {
    setResultAvatar(profile_picture);
  }, [profile_picture]);

  const handleChangeAvatar = (e) => {
    e.target &&
      e.target.files[0] &&
      setAvatar(URL.createObjectURL(e.target.files[0]));
    e.target.value = null;
    // open tab
    setOpen(true);
  };

  const handleSetImgAvatar = (url) => {
    URL.revokeObjectURL(resultAvatar);
    let urlHasConvert = URL.createObjectURL(url);
    setResultAvatar(urlHasConvert);
    // dispatch action upload profile picture here
    getFileProfilePicture(url);
  };

  return (
    <>
      <PhotoCamera style={{ boxShadow: `0px 0px 2px 5px ${currentColor}` }}>
        {resultAvatar && (
          <img
            src={resultAvatar}
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
        <label htmlFor="avatar">
          <Icon
            icon="mdi:camera"
            fontSize="medium"
            style={{
              position: 'absolute',
              right: '50%',
              transform: 'translateX(60%)',
              bottom: '-2',
              height: '30px',
              width: '30px',
              padding: '5px',
              borderRadius: '50%',
              backgroundColor: `${currentColor}`,
              transition: '.25s linear background-color',
              color: '#ffffff'
            }}
          />
        </label>
      </PhotoCamera>
      <input type="file" hidden id="avatar" onChange={handleChangeAvatar} />
      <CropImg
        open={open}
        handleClose={(e) => setOpen(e)} // setOpen => false
        src={avatar}
        setResultUrl={handleSetImgAvatar}
      />
    </>
  );
}

export default UploadAvatarEdit;
