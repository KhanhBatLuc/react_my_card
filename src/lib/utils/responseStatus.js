export const responseError422 = (message) => {
  return {
    status: 422,
    message
  };
};

export const responseSuccess = (message) => {
  return {
    status: 200,
    message
  };
};
