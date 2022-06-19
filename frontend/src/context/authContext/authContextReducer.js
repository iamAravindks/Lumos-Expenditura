
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_LOGOUT, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_PROFILE_FAIL, USER_PROFILE_LOGOUT } from './authTypes'

const AuthContextReducer = (state, action) =>
{ 
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return { ...state, loading: true };
      case USER_LOGIN_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_LOGIN_FAIL:
        return { loading: false, userInfo: null };
      case USER_LOGIN_LOGOUT:
        return { loading: false, userInfo: null };
      case USER_REGISTER_REQUEST:
        return { ...state, loading: true };
      case USER_REGISTER_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_REGISTER_FAIL:
        return { loading: false, userInfo: null };
      case USER_REGISTER_LOGOUT:
        return { loading: false, userInfo: null };
      case USER_PROFILE_REQUEST:
        return { ...state, loading: true };
      case USER_PROFILE_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_PROFILE_FAIL:
        return { loading: false, userInfo: null };
      case USER_PROFILE_LOGOUT:
        return { loading: false, userInfo: null };
      default:
        return state;
    }
}

export default AuthContextReducer