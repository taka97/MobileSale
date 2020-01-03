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
    case "ADJUST": {
      let { list } = state;
      let newList = list.splice(0);
      newList[action.payload.index].number = action.payload.number;
      return {
        ...state,
        list: newList
      };
    }
    case "REMOVE": {
      let { list } = state;
      let newList = list.splice(0);
      newList.splice(action.payload, 1);
      return {
        ...state,
        list: newList
      };
    }
    case "REMOVE_ALL": {
      return {
        ...state,
        list: []
      }
    }
    default:
      return state;
  }
}
