import { callApiGetCategories, callApiGetProducts } from "../utils/apiCaller";

export const reqList = () => ({ type: "REQUEST_LIST" });
export const reqListSuc = list => ({
  type: "REQUEST_LIST_SUCCESS",
  payload: list
});

export const getList = async dispatch => {
  let res = await dispatch(callApiGetProducts);

  // success
  if (res.data !== undefined) dispatch(reqListSuc(res.data.data));
  // })
  // .catch(error => {
  //   dispatch(error.response.data);
  // });
};

// export const getDetail = async (dispatch, id) => {
//   console.log(dispatch);
//   console.log(id);
// }

export const getDetail = id => ({
  type: "GET_DETAIL",
  payload: id
});

export const reqDetail = () => ({
  type: "REQUEST_DETAIL"
});

export const reqDetailSuc = detail => ({
  type: "REQUEST_DETAIL_SUCCESS",
  payload: detail
});

export const reqCategories = () => ({
  type: "REQUEST_CATEGORIES"
});

export const reqCategoriesSuc = categories => ({
  type: "REQUEST_CATEGORIES_SUCCESS",
  payload: categories
});

export const reqCategoriesErr = () => ({
  type: "REQUEST_CATEGORIES_ERROR"
});

export const getCategories = async dispatch => {
  let res = await dispatch(callApiGetCategories);
  if (res.data !== undefined) {
    // success
    dispatch(reqCategoriesSuc(res.data.data));
  } else {
    dispatch(reqCategoriesErr());
  }
};
