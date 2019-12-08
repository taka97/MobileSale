const initState = {
  i: 0
};

export default function step(state = initState, action) {
  switch (action.type) {
      case 'DEC_STEP':
          return {
              ...state,
              i: state.i - 1
          };
      case 'INC_STEP':
        return {
            ...state,
            i: state.i + 1
        };
      case 'RESET_STEP':
        return {
          ...state,
          i: 0
        }
      default:
          return state;
  }
}