import { callApiLogin } from "../utils/apiCaller";

export const actLogin = user => ({
  type: "LOGIN",
  user
});

export const actLoginErr = () => ({
  type: "LOGIN_ERR"
});

export const actLoginRequest = user => {
  return dispatch => {
    return callApiLogin(user)
      .then(res => {
        const user = {
          userId: res.data.userId,
          accessToken: res.data.accessToken
        };
        localStorage.setItem("accessToken", user.accessToken);
        localStorage.setItem("userId", user.userId);
        dispatch(actLogin(user));
      })
      .catch(() => {
        dispatch(actLoginErr());
      });
  };
};

export const actGetLocalUser = () => {
  return {
    type: "GET_LOCAL_USER"
  };
};

export const actLogout = () => {
  localStorage.removeItem("userId");
  localStorage.removeItem("accessToken");
  return {
    type: "LOGOUT"
  };
};

export const actCallbackLink = link => ({
  type: "CALLBACK_LINK",
  link
});
