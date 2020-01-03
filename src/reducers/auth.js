const initState = {
  username: undefined,
  email: undefined,
  phone: undefined,
  fullname: undefined,
  avatar: undefined,
  usertoken: undefined,

  err: undefined,
  callbackLink: undefined
};

export default function auth(state = initState, action) {
  switch (action.type) {
    case "LOGIN": {
      state = {
        ...state,
        userId: action.user.userId,
        accessToken: action.user.accessToken,
        code: 201
      };
      return state;
    }
    case "LOGOUT":
      return {
        ...state,
        userId: null,
        accessToken: null,
        code: null
      };
    case "LOGIN_ERR": {
      state = {
        ...state,
        accessToken: null,
        userId: null,
        code: 400
      };
      return state;
    }
    case "CALLBACK_LINK": {
      state = {
        ...state,
        callbackLink: action.link
      };
      return state;
    }
    case "GET_LOCAL_USER":
      return {
        ...state,
        userId: localStorage.getItem("userId"),
        accessToken: localStorage.getItem("accessToken")
      };
    default:
      return state;
  }
}
