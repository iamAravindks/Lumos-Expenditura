import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import AuthContextReducer from "./authContextReducer";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "./authTypes";
import { ErrorContext } from "../errorContext/ErrorContext";
import { getToken } from "../../utils/serverUtils";

const userInfoStorage = JSON.parse(localStorage.getItem("userInfo")) || null;
const initialState = {
  loading: false,
  userInfo: userInfoStorage,
};
export const AuthContext = createContext(initialState);

const Provider = ({ children }) => {
  const [userState, dispatch] = useReducer(AuthContextReducer, initialState);
  const { setError } = useContext(ErrorContext);
  // @actions

  // login
  const login = async (email, password) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // The effect, the code pauses execution on those lines until the Promises resolve! Asynchronous programming becomes synchronous! 😲
      const { data } = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
      });
      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      setError(err);
    }
  };

  //  Register

  const register = async (name, email, password) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/users/",
        { name, email, password },
        config
      );

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
      });
      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      setError(err);
    }
  };

  //  Logout

  const logout = () => {
    localStorage.removeItem("userInfo");
    dispatch({
      type: USER_LOGIN_LOGOUT,
    });
  };

  // Get user profile

  const updateUserProfile = async ({ name, email, password}) => {
    try {
      dispatch({
        type: USER_PROFILE_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${getToken()}`,
        },
      };
      const { data } = await axios.put(
        "/api/users/profile",
        { name, email, password },
        config
      );
         dispatch({
        type: USER_PROFILE_SUCCESS,
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_PROFILE_FAIL,
      });
      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      setError(err);
    }
  
  };
  return (
    <AuthContext.Provider
      value={{
        userInfo: userState.userInfo,
        loading: userState.loading,
        login,
        register,
        logout,
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default Provider;
