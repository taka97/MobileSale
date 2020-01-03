export const getList = () => ({
  type: "GET_LIST"
});

export const add = product => ({
  type: "ADD",
  payload: product
});

export const remove = index => ({
  type: "REMOVE",
  payload: index
});

export const removeAll = () => ({
  type: "REMOVE_ALL"
})

export const adjust = (index, number) => ({
  type: "ADJUST",
  payload: { index, number }
});
