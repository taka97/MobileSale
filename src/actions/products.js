export const getList = () => ({
  type: "GET_LIST"
});

export const getDetail = id => ({
  type: "GET_DETAIL",
  payload: id
});
