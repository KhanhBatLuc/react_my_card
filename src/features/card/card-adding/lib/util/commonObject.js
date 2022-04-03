export const checkOrReturnObjInfo = (arr, objItemInfo) => {
  const itemMaxInArr = arr?.reduce(
    (acc, shot) => (acc = acc > shot.position ? acc : shot.position),
    0
  );
  if (itemMaxInArr) {
    return {
      ...objItemInfo,
      position: itemMaxInArr + 1,
      label: '',
      value: ''
    };
  } else {
    return {
      ...objItemInfo,
      position: 1,
      label: '',
      value: ''
    };
  }
};

export const removeItemInfo = (arr, num) =>
  arr.filter((el) => el.position !== num);

export const updateFormData = (data) => {
  const {
    card_name,
    full_name,
    company_name,
    title,
    about,
    cover_images,
    profile_picture,
    listInformationCard
  } = data;

  const listId = [];
  const listTypeId = [];
  const listTypeValue = [];
  const listTypeLabel = [];
  const listTypePosition = [];

  listInformationCard.forEach((e) => {
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
};
