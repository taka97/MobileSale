export const getList = () => ({
  type: "GET_LIST"
});

export const add = product => ({
  type: "ADD",
  payload: product
});

export const remove = key => ({
  type: "REMOVE",
  payload: key
});

export const adjust = (key, number) => ({
  type: "ADJUST",
  payload: { key, number }
});
