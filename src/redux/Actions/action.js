export const dataChange = (data) => {
  return {
    type: 'data_change',
    payload: data
  };
};

export const addCartData = (data) => {
  return {
    type: 'addCart',
    payload: data
  };
};
export const addCartCount = (data) => {
  return {
    type: 'addCartCount',
    payload: data
  };
};