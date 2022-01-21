import { createContext, useReducer } from "react";
import axios from 'axios'
import AuthContextReducer from "./authContextReducer";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./authTypes";


const userInfoStorage = JSON.parse(localStorage.getItem("userInfo")) || null;
const initialState = {
    loading: false,
    userInfo: { ...userInfoStorage },
    error:null
}
export const AuthContext = createContext(initialState);

 const Provider = ({ children }) =>
{ 
     const [userState, dispatch] = useReducer(AuthContextReducer, initialState);
     
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
                 payload: error.response && error.response.data.message ?
                     error.response.data.message :
                     error.message
             })
         }
     }
      return (
        <AuthContext.Provider
              value={{
                  userState,
                  login
          }}
        >
          {children}
        </AuthContext.Provider>
      );
 }
export default Provider