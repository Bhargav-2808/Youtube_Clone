import {
  LoadProfile,
  LoginFailed,
  LoginRequest,
  LoginSuccess,
  LogOut,
} from "../actionTypes";

const initialState = {
  accessToken: sessionStorage.getItem("yt-token")
    ? sessionStorage.getItem("yt-token")
    : null,
  user: sessionStorage.getItem("yt-profile")
    ? JSON.parse(sessionStorage.getItem("yt-profile"))
    : null,
  loading: false,
};

export const authReducer = (preState = initialState, action) => {
  const { type, payLoad } = action;

  switch (type) {
    case LoginRequest:
      return {
        ...preState,
        loading: true,
      };

    case LoginSuccess:
      return {
        ...preState,
        accessToken: payLoad,
        loading: false,
      };

    case LoginFailed:
      return {
        ...preState,
        accessToken: null,
        error: payLoad,
        loading: false,
      };

    case LoadProfile:
      return {
        ...preState,
        user: payLoad,
        loading: false,
      };
    case LogOut:
      return {
        ...preState,
        accessToken: null,
        user: null,
      };

    default:
      return preState;
  }
};
