import { useState } from 'react';
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Box, FormHelperText, Stack } from '@mui/material';

import LineColor from './line-color';
import CropImg from './crop-img/Crop';
import UploadAvatar from './avatar/UploadAvatar';
import DefaultHasUpload from './avatar/DefaultHasUpload';
import i18n from '../../../../features/card/lib/i18n';

import { useColorSelector } from 'src/lib/hook/colorHook';

DefaultHasNotUpload.propTypes = {
  handleBackGrImg: PropTypes.func
};

function DefaultHasNotUpload({ handleBackGrImg }) {
  const { addingForm } = i18n.cardAdd.CardAddingPage;
  return (
    <>
      <label
        htmlFor="upload"
        style={{
          display: 'inline-block',
          width: '100%',
          background: `url("/static/mock-images/upload/avatar-background.svg") 27% 179% / auto 82% no-repeat rgba(216, 216, 216, 0.53)`,
          backgroundSize: 'auto 75%',
          backgroundPosition: '50% 150%',
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
          <FormattedMessage {...addingForm.titleDefaultImg} />
        </span>
      </label>
      <input type="file" id="upload" hidden onChange={handleBackGrImg} />
    </>
  );
}

export default function LoadImg({
  getFileCoverImg,
  getFileProfilePicture,
  messageLoadImg,
  setNameCardInformation
}) {
  const { colorActive } = useColorSelector();

  // upload && crop img
  const [openCrop, setOpenCrop] = useState(false);
  const [src, setSelectFile] = useState(null);
  // result url
  const [result, setResult] = useState(null);

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

  const pictureRef = useRef(null);

  useEffect(() => {
    if (
      messageLoadImg.cover_images?.scroll === true &&
      messageLoadImg.card_name?.scroll === false &&
      messageLoadImg.full_name?.scroll === false
    ) {
      window.scrollTo({
        behavior: 'smooth',
        top: pictureRef.current.offsetTop
      });
      setNameCardInformation({
        ...messageLoadImg,
        cover_images: {
          ...messageLoadImg.cover_images,
          scroll: false
        }
      });
    }
  }, [messageLoadImg]);

  return (
    <>
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        {result ? (
          <DefaultHasUpload
            result={result}
            handleRemovePhoto={() => setResult(null)}
            handleBackGrImg={handleBackGrImg}
          />
        ) : (
          <DefaultHasNotUpload handleBackGrImg={handleBackGrImg} />
        )}

        <LineColor currentColor={colorActive} />
        <UploadAvatar
          currentColor={colorActive}
          getFileProfilePicture={getFileProfilePicture}
        />
      </Box>
      <CropImg
        open={openCrop}
        handleClose={(e) => setOpenCrop(e)}
        src={src}
        setResultUrl={handleSetImgUrl}
      />
      <Stack
        direction="row"
        justifyContent="center"
        alignItem="center"
        ref={pictureRef}
      >
        <FormHelperText error>
          {messageLoadImg.cover_images?.message}
        </FormHelperText>
      </Stack>
    </>
  );
}
