import { createSelector } from '@reduxjs/toolkit';

export const cardAddSelector = (state) => state.cardAdd;

export const listInfoCardSelector = (state) =>
  state.cardAdd.listInformationCard;
export const listItemWillCreateSelector = (state) =>
  state.cardAdd.listItemCardWillCreate;

export const cardAddSubmitFormSelector = createSelector(
  listInfoCardSelector,
  listItemWillCreateSelector,
  (listInfoCard, listInfoWillCreate) => {
    const {
      card_name,
      full_name,
      company_name,
      title,
      about,
      cover_images,
      profile_picture
    } = listInfoWillCreate;
    const listId = [];
    const listTypeId = [];
    const listTypeValue = [];
    const listTypeLabel = [];
    const listTypePosition = [];
    listInfoCard.forEach((e) => {
      listId.push(e.id || '');
      listTypeId.push(e.type_id);
      listTypeValue.push(e.value);
      listTypeLabel.push(e.label);
      listTypePosition.push(e.position);
    });
    return {
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
    };
  }
);

export const cardEditSelector = (state) => state.listInformationCard;
