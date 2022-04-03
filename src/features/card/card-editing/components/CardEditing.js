import { toast } from 'react-toastify';
import { Card, Grid } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import {
  checkDataInput,
  checkDataInputInformation
} from '../lib/util/validateInput';
import NameCardEditing from './NameCardEditing';
import {
  updateFormData,
  checkOrReturnObjInfo
} from '../../card-adding/lib/util/commonObject';

import { BackButton } from 'src/components';
import {
  ColorPicker,
  FormFullName,
  ButtonCreate
} from 'src/components/card/view-create';
import LoadingPage from 'src/pages/LoadingPage';
import { updateCardPrivate } from 'src/lib/api/cardApi';
import { useColorSelector, useColor } from 'src/lib/hook/colorHook';
import {
  isSuccess,
  isError,
  isUpdating,
  STATUS
} from 'src/lib/utils/statusChecker';
import LoadImgEdit from 'src/components/card/view-edit/LoadImgEdit';
import CardInfo from 'src/components/card/view-create/info-card/CardInfo';

const RootStyle = styled(Card)(({ theme }) => ({
  minWidth: 275,
  borderRadius: 'unset',
  borderTopLeftRadius: '0.625rem',
  borderTopRightRadius: ' 0.625rem',
  boxShadow: theme.customShadows.z16
}));

export default function CardEditing({ result, listInformation }) {
  // state test
  const refName = useRef(null);
  const [dataInputAddCard, setDataInputAddCard] = useState({
    card_id: '',
    card_name: {
      value: '',
      message: '',
      scroll: false
    },
    full_name: {
      value: '',
      message: '',
      scroll: false
    },
    company_name: {
      value: '',
      message: ''
    },
    color: '',
    title: {
      value: '',
      message: '',
      scroll: false
    },
    about: {
      value: '',
      message: '',
      scroll: false
    },
    cover_images: {
      value: '',
      message: '',
      scroll: false
    },
    profile_picture: {
      value: '',
      message: '',
      scroll: false
    },
    listInformationCard: []
  });
  const [responseServe, setResponseServe] = useState({
    status: STATUS.init,
    result: null,
    error: null
  });

  const { changeColor } = useColor();
  const { colorActive } = useColorSelector();

  const navigate = useNavigate();
  const { cardId } = useParams();

  useEffect(() => {
    if (isSuccess(responseServe.status)) {
      toast.success('Update success');
      return navigate(-1, { replace: true });
    }
    if (isError(responseServe.status)) {
      toast.error('Fails with status code 400 ');
    }
  }, [responseServe.status]);

  useEffect(() => {
    if (dataInputAddCard.card_name?.scroll === true) {
      window.scrollTo({
        behavior: 'smooth',
        top: refName.current.offsetTop
      });
      setDataInputAddCard({
        ...dataInputAddCard,
        card_name: {
          ...dataInputAddCard.card_name,
          scroll: false
        }
      });
    }
  }, [dataInputAddCard]);

  useEffect(() => {
    const array = {
      card_name: {
        value: result.card_name,
        message: '',
        scroll: false
      },
      full_name: {
        value: result.full_name,
        message: '',
        scroll: false
      },
      company_name: {
        value: result.company_name,
        message: ''
      },
      color: result.color,
      title: {
        value: result.title,
        message: '',
        scroll: false
      },
      about: {
        value: result.about,
        message: '',
        scroll: false
      },
      cover_images: {
        value: result.cover_images,
        message: '',
        scroll: false
      },
      profile_picture: {
        value: result.profile_picture,
        message: '',
        scroll: false
      },
      listInformationCard: listInformation
    };
    setDataInputAddCard({
      ...array
    });
    changeColor(result.color);
  }, []);

  const handleChangeInput = (data) => {
    setDataInputAddCard({
      ...dataInputAddCard,
      card_name: {
        value: data,
        message: '',
        scroll: false
      }
    });
  };

  const handleSetInputInformation = (item) => {
    const objectItemInf = checkOrReturnObjInfo(
      dataInputAddCard.listInformationCard,
      item
    );
    setDataInputAddCard({
      ...dataInputAddCard,
      listInformationCard: [
        ...dataInputAddCard.listInformationCard,
        objectItemInf
      ]
    });
  };

  const handleUpdateCard = async () => {
    // check input
    const res = checkDataInput(dataInputAddCard);
    const resInfo = checkDataInputInformation(
      dataInputAddCard.listInformationCard
    );

    if (res?.status === 200 && resInfo?.status === 200) {
      const {
        card_name,
        full_name,
        company_name,
        title,
        about,
        cover_images,
        profile_picture,
        listId,
        listTypeId,
        listTypeValue,
        listTypeLabel,
        listTypePosition
      } = updateFormData(dataInputAddCard);
      let formData = new FormData();
      formData.append('card_name', card_name.value);
      formData.append('full_name', full_name.value);
      formData.append('company_name', company_name.value || '');
      formData.append('title', title.value);
      formData.append('about', about.value);
      formData.append('color', colorActive);
      formData.append('cover_images', cover_images.value);
      formData.append('profile_picture', profile_picture.value);

      listId.map((e) => {
        formData.append('information[id][]', e);
      });
      listTypeId.map((e) => {
        formData.append('information[type_id][]', e);
      });
      listTypeValue.map((e) => {
        formData.append('information[value][]', e);
      });
      listTypeLabel.map((e) => {
        formData.append('information[label][]', e);
      });
      listTypePosition.map((e) => {
        formData.append('information[position][]', e);
      });
      // try-catch
      try {
        setResponseServe({
          status: STATUS.updating,
          result: null,
          error: null
        });
        const response = await updateCardPrivate(cardId, formData);

        if (response.status_code === 200) {
          setResponseServe({
            status: STATUS.success,
            result: null,
            error: null
          });
        }
      } catch (error) {
        setResponseServe({
          status: STATUS.error,
          result: null,
          error: error
        });
      }
    } else {
      const { card_name, full_name, picture, title, about } = res.message;
      setDataInputAddCard({
        ...dataInputAddCard,
        card_name: {
          ...dataInputAddCard.card_name,
          message: card_name,
          scroll: res.message.hasOwnProperty('card_name') ? true : false
        },
        full_name: {
          ...dataInputAddCard.full_name,
          message: full_name,
          scroll: res.message.hasOwnProperty('full_name') ? true : false
        },
        cover_images: {
          ...dataInputAddCard.cover_images,
          message: picture,
          scroll: res.message.hasOwnProperty('picture') ? true : false
        },
        title: {
          ...dataInputAddCard.title,
          message: title,
          scroll: res.message.hasOwnProperty('title') ? true : false
        },
        about: {
          ...dataInputAddCard.about,
          message: about,
          scroll: res.message.hasOwnProperty('about') ? true : false
        },
        listInformationCard: dataInputAddCard.listInformationCard.map((obj) =>
          resInfo.message.hasOwnProperty(obj.descript)
            ? Object.assign(obj, {
                message: resInfo.message[obj.descript],
                scroll: resInfo.message.hasOwnProperty(obj.descript)
                  ? true
                  : false
              })
            : obj
        )
      });
    }
  };

  return (
    <>
      {isUpdating(responseServe.status) ? (
        <LoadingPage />
      ) : (
        <>
          <Grid item xs={2}>
            <BackButton />
          </Grid>
          <Grid item xs={7}>
            <NameCardEditing
              ref={refName}
              setNameCard={(data) => handleChangeInput(data)}
              card_name={dataInputAddCard.card_name}
            />
          </Grid>
          <Grid item lg={5} md={6} sm={6} xs={12}>
            <RootStyle>
              <LoadImgEdit
                getFileCoverImg={(data) =>
                  setDataInputAddCard({
                    ...dataInputAddCard,
                    cover_images: {
                      value: data,
                      scroll: false
                    }
                  })
                }
                getFileProfilePicture={(data) =>
                  setDataInputAddCard({
                    ...dataInputAddCard,
                    profile_picture: {
                      value: data,
                      scroll: false
                    }
                  })
                }
                messageLoadImg={dataInputAddCard}
                setNameCardInformation={setDataInputAddCard}
                cover_images={dataInputAddCard.cover_images.value}
                profile_picture={dataInputAddCard.profile_picture.value}
              />
              <ColorPicker />
              <FormFullName
                setNameCardInformation={setDataInputAddCard}
                listInformation={dataInputAddCard}
              />
            </RootStyle>
            <ButtonCreate onClick={handleUpdateCard} text="UPDATE" />
          </Grid>
          <Grid item lg={5} md={6} sm={6} xs={12}>
            <CardInfo setCardInfo={(data) => handleSetInputInformation(data)} />
          </Grid>
        </>
      )}
    </>
  );
}
