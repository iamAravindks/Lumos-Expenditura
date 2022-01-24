import { createContext, useContext, useReducer } from "react";
import axios from 'axios'
import AuthContextReducer from "./authContextReducer";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./authTypes";
import { ErrorContext } from "../errorContext/ErrorContext";


const userInfoStorage = JSON.parse(localStorage.getItem("userInfo")) || null;
const initialState = {
    loading: false,
    userInfo: userInfoStorage,
}
export const AuthContext = createContext(initialState);

 const Provider = ({ children }) =>
{ 
   const [userState, dispatch] = useReducer(AuthContextReducer, initialState);
   const {setError} = useContext(ErrorContext)
     console.log(setError);
     // @actions

     const login = async (email, password) =>
     {
         try
         {
             dispatch({ type: USER_LOGIN_REQUEST })
             const config = {
                 headers: {
                     'Content-Type':'application/json'
                 }
             }
             const { data } = await axios.post("/api/users/login", { email, password }, config)
             
             dispatch({
                 type: USER_LOGIN_SUCCESS,
                 payload:data
             })
             
             localStorage.setItem('userInfo',JSON.stringify(data))
         } catch (error) {
             dispatch({
                 type: USER_LOGIN_FAIL,

             })
           const err =
             error.response && error.response.data.message
               ? error.response.data.message
               : error.message
           setError(err);
         }
     }
      return (
        <AuthContext.Provider
          value={{
            userInfo: userState.userInfo,
            loading: userState.loading,
            login,
          }}
        >
          {children}
        </AuthContext.Provider>
      );
 }
export default Provider