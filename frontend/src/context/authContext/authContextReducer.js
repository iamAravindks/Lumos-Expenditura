
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_LOGOUT } from './authTypes'

const AuthContextReducer = (state, action) =>
{ 
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {...state,loading:true}
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload, error: null };
        case USER_LOGIN_FAIL:
            return { loading: false, userInfo: null,error:action.payload }
        case USER_LOGIN_LOGOUT:
            return {loading : false,userInfo:null,error:null}
        default:
            return state;
    }
}

export default AuthContextReducer