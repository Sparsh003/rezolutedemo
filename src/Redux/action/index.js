export const User = (username, date, time) => {
  return {
    type: "USER",
    payload: { username, date, time },
  };
};

export const resetRender = (isFirstRender) => {
  return {
    type: "RENDERING",
    payload: isFirstRender,
  };
};
