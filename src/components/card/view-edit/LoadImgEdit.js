import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

import UploadAvatarEdit from './UploadAvatarEdit';
import LineColor from '../view-create/new-card/line-color';
import CropImg from '../view-create/new-card/crop-img/Crop';
import DefaultHasUpload from '../view-create/new-card/avatar/DefaultHasUpload';

import { useColorSelector } from 'src/lib/hook/colorHook';

DefaultHasNotUpload.propTypes = {
  handleBackGrImg: PropTypes.func
};

function DefaultHasNotUpload({ handleBackGrImg }) {
  return (
    <>
      <label
        htmlFor="upload"
        style={{
          display: 'inline-block',
          width: '100%',
          background: `url('/static/mock-images/upload/avatar-background.svg')  no-repeat  #d8d8d887`,
          backgroundSize: 'auto 75%',
          backgroundPosition: '25% 100%',
          flex: '1 1 0%',
          paddingBottom: '90%',
          paddingTop: '10%',
          cursor: 'pointer'
        }}
      >
        <span
          style={{
            color: 'rgba(0, 0, 0, 0.38)',
            textTransform: 'none',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          Up load a photo or video
        </span>
      </label>
      <input type="file" id="upload" hidden onChange={handleBackGrImg} />
    </>
  );
}

export default function LoadImgEdit({
  getFileCoverImg,
  getFileProfilePicture,
  cover_images,
  profile_picture
}) {
  const { colorActive } = useColorSelector();

  // upload && crop img
  const [openCrop, setOpenCrop] = useState(false);
  const [src, setSelectFile] = useState(null);
  // result url
  const [result, setResult] = useState(cover_images);

  useEffect(() => {
    setResult(cover_images);
  }, [cover_images]);

  // function create url link blob => put into component Crop.js
  const handleBackGrImg = (e) => {
    e.target &&
      e.target.files[0] &&
      setSelectFile(URL.createObjectURL(e.target.files[0]));
    e.target.value = null;
    setOpenCrop(true);
  };

  // function from Crop.js File => main function this component is set link preview blob and get file lift up parent component
  const handleSetImgUrl = (file, link) => {
    setResult(link);
    // this from component parents
    getFileCoverImg(file);
  };

  return (
    <>
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        {result ? (
          <DefaultHasUpload
            result={result || '/static/mock-images/avatars/avatar_default.jpg'}
            handleRemovePhoto={() => setResult(null)}
            handleBackGrImg={handleBackGrImg}
          />
        ) : (
          <DefaultHasNotUpload handleBackGrImg={handleBackGrImg} />
        )}

        <LineColor currentColor={colorActive} />
        <UploadAvatarEdit
          currentColor={colorActive}
          profile_picture={
            profile_picture || '/static/mock-images/avatars/avatar_default.jpg'
          }
          getFileProfilePicture={getFileProfilePicture}
        />
      </Box>
      <CropImg
        open={openCrop}
        handleClose={(e) => setOpenCrop(e)}
        src={src}
        setResultUrl={handleSetImgUrl}
      />
    </>
  );
}
