export const cutString = (string, num) => {
  if (string.length > num)
    return num > 40 ? string.slice(0, 50) + '...' : string.slice(0, 30) + '...';
  return string;
};

export const checkLengthString = (string, num) => {
  return string.length > num ? true : false;
};
