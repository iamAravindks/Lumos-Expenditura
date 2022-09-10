import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_LOGOUT,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_LOGOUT,
  USER_FORGOT_PASSWORD,
  USER_RESET_PASSWORD,
  USER_ACTION_REQUEST,
  USER_FORGOT_PASSWORD_FAIL,
  USER_RESET_PASSWORD_FAIL,
} from "./authTypes";

const removeFromObjectByKey = (obj, key) => {
  if (obj.hasOwnProperty(key)) delete obj[key];

  return obj;
};
const AuthContextReducer = (state, action) => {
  let currState;
  switch (action.type) {
    case USER_ACTION_REQUEST:
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, userInfo: null };
    case USER_LOGIN_LOGOUT:
      return { ...state, loading: false, userInfo: null };
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { ...state, loading: false, userInfo: null };
    case USER_REGISTER_LOGOUT:
      return { loading: false, userInfo: null };
    case USER_PROFILE_REQUEST:
      return { ...state, loading: true };
    case USER_PROFILE_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_PROFILE_FAIL:
      return { ...state, loading: false, userInfo: null };
    case USER_PROFILE_LOGOUT:
      return { ...state, loading: false, userInfo: null };

    case USER_FORGOT_PASSWORD:
      return { ...state, loading: false, mailSend: true };
    case USER_RESET_PASSWORD:
      return { ...state, loading: false, resetPassword: true };
    case USER_FORGOT_PASSWORD_FAIL:
      return { ...state, loading: false, mailSend: null};
    case USER_RESET_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        resetPassword: null,
      };

    default:
      return state;
  }
};

export default AuthContextReducer;
