export const mockImgAvatar = (index) =>
  `/static/mock-images/avatars/avatar_${index}.jpg`;

export const randomImg = (max, min) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return mockImgAvatar(randomNumber);
};
