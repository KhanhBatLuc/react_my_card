import { useRef } from 'react';
import { Box } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import React, { useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { useColorSelector } from 'src/lib/hook/colorHook';

import i18n from '../../../../features/card/lib/i18n';
import { MyTextField, MyTextArea, InputInformation } from './myText';
import { removeItemInfo } from '../../../../features/card/card-adding/lib/util/commonObject';

import { deleteInformation } from 'src/lib/api/cardApi';

function FormFullName({ setNameCardInformation, listInformation }) {
  const { colorActive } = useColorSelector();
  const { addingForm } = i18n.cardAdd.CardAddingPage;
  const {
    card_name,
    full_name,
    company_name,
    title,
    about,
    cover_images,
    listInformationCard
  } = listInformation;
  const refFullName = useRef(null);
  const refTitle = useRef(null);
  const refAbout = useRef(null);
  const refInfo = React.createRef([]);
  refInfo.current = [];

  const handleRemoveIcon = (position) => {
    if (listInformationCard[0].id) {
      const { id, card_id } = listInformationCard.find(
        (el) => el.position === position
      );
      // dispatch action
      deleteInformation(card_id, id);
    }
    const list = removeItemInfo(listInformationCard, position);
    setNameCardInformation({
      ...listInformation,
      listInformationCard: list
    });
  };

  const handleOnDragEnd = (result) => {
    let items = Array.from(listInformationCard);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination?.index, 0, reorderedItem);
    // dispatch action drag-drop
    const itemHasCustomer = items.map((e, index) => {
      return {
        ...e,
        position: index + 1
      };
    });
    setNameCardInformation({
      ...listInformation,
      listInformationCard: itemHasCustomer
    });
  };

  const handleChangeInput = (key, value) => {
    setNameCardInformation({
      ...listInformation,
      [key]: {
        value: value.target.value,
        message: '',
        scroll: false
      }
    });
  };

  const handleChangeInputInfo = (type, key, el, position) => {
    if (!el.target) {
      setNameCardInformation((prevState) => ({
        ...listInformation,
        listInformationCard: prevState.listInformationCard.map((obj) =>
          obj.position === position ? Object.assign(obj, { [key]: el }) : obj
        )
      }));
    } else {
      setNameCardInformation((prevState) => ({
        ...listInformation,
        listInformationCard: prevState.listInformationCard.map((obj) =>
          obj.position === position
            ? Object.assign(obj, { [key]: el.target.value })
            : obj
        )
      }));
    }
  };

  useEffect(() => {
    if (card_name?.scroll === false && full_name?.scroll === true) {
      window.scrollTo({
        behavior: 'smooth',
        top: refFullName.current.offsetTop
      });
      setNameCardInformation({
        ...listInformation,
        full_name: {
          ...listInformation.full_name,
          scroll: false
        }
      });
    }
    //
    if (
      card_name?.scroll === false &&
      full_name?.scroll === false &&
      cover_images?.scroll === false &&
      title?.scroll === true &&
      about?.scroll === false
    ) {
      window.scrollTo({
        behavior: 'smooth',
        top: refTitle.current.offsetTop
      });
      setNameCardInformation({
        ...listInformation,
        title: {
          ...listInformation.title,
          scroll: false
        }
      });
    }
    //
    if (
      card_name?.scroll === false &&
      full_name?.scroll === false &&
      cover_images?.scroll === false &&
      title?.scroll === false &&
      about?.scroll === true
    ) {
      window.scrollTo({
        behavior: 'smooth',
        top: refAbout.current.offsetTop
      });
      setNameCardInformation({
        ...listInformation,
        about: {
          ...listInformation.about,
          scroll: false
        }
      });
    }
  }, [full_name, title, about]);

  const addToRef = (el) => {
    if (el && !refInfo.current.includes(el)) {
      refInfo.current.push(el);
    }
  };

  useEffect(() => {
    if (listInformationCard.length > 0) {
      const list = listInformationCard?.find((item) => item.scroll == true);
      if (
        list?.scroll === true &&
        card_name?.scroll === false &&
        full_name?.scroll === false &&
        cover_images?.scroll === false &&
        title?.scroll === false &&
        about?.scroll === false
      ) {
        window.scrollTo({
          behavior: 'smooth',
          top: refInfo.current[list.position - 1].offsetTop
        });

        setNameCardInformation({
          ...listInformation,
          listInformationCard: listInformationCard.map((obj) =>
            Object.assign(obj, {
              scroll: false
            })
          )
        });
      }
    }
  }, [listInformationCard]);

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#ffffff',
          mx: '1rem',
          pt: '1rem',
          mt: '1rem'
        }}
      >
        <MyTextField
          value={full_name?.value}
          name="full_name"
          ref={refFullName}
          onChange={(e) => handleChangeInput('full_name', e)}
          label={<FormattedMessage {...addingForm.fullName} />}
          currentColor={colorActive}
          error={full_name?.message ? true : false}
        />
        <MyTextField
          value={company_name?.value}
          name="company_name"
          ref={refTitle}
          onChange={(e) => handleChangeInput('company_name', e)}
          label={<FormattedMessage {...addingForm.companyName} />}
          currentColor={colorActive}
          error={full_name?.message ? true : false}
          helperText={full_name?.message}
        />
        <MyTextField
          name="title"
          ref={refAbout}
          label={<FormattedMessage {...addingForm.title} />}
          value={title?.value}
          onChange={(e) => handleChangeInput('title', e)}
          currentColor={colorActive}
          error={title?.message ? true : false}
          helperText={title?.message}
        />
        <MyTextArea
          name="about"
          label={<FormattedMessage {...addingForm.about} />}
          value={about?.value}
          onChange={(e) => handleChangeInput('about', e)}
          currentColor={colorActive}
          error={about?.message ? true : false}
          helperText={about?.message}
        />
      </Box>
      {/* input information */}

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <Box
              sx={{
                backgroundColor: '#ffffff',
                mx: '1rem',
                pt: '1rem',
                mb: '2rem'
              }}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {listInformationCard?.map((e, index) => (
                <InputInformation
                  key={e.position}
                  icon={e.icon}
                  label={e.label}
                  inputRef={addToRef}
                  descript={e.descript}
                  value={e.value}
                  onChangeLabel={(
                    el // onChange Input label
                  ) =>
                    handleChangeInputInfo(e.descript, 'label', el, e.position)
                  }
                  onChangeValue={(
                    el // onChange Input value
                  ) =>
                    handleChangeInputInfo(e.descript, 'value', el, e.position)
                  }
                  position={e.position}
                  defaultValue={e.defaultValue}
                  placeholder={e.placeholder}
                  currentColor={colorActive}
                  listInformation={listInformation}
                  scroll={e.scroll}
                  id={e.type_id}
                  onRemove={handleRemoveIcon}
                  index={index}
                  error={e.message ? true : false}
                  helperText={e.message ? e.message : ''}
                />
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default FormFullName;
