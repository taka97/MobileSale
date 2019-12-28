const initState = {
  list: []
};

export default function getProducts(state = initState, action) {
  switch (action.type) {
    case "GET_LIST":
      return state.list;
    case "ADD": {
      return {
        ...state,
        list: state.list.concat(action.payload)
      };
    }
    default:
      return state;
  }
}
