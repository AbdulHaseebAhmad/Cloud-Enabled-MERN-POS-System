import  { Signin_In_User, Signin_In_User_Success, Signin_In_User_Failure } from './Constants';
import { jwtDecode } from "jwt-decode";


const initialState = {
    loading: false,
    user: {},
    error: '',
    token: '',
    isAuthenticated: false,
};



const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case Signin_In_User:
            return {
                ...state,
                loading: true,
            };
        case Signin_In_User_Success:
            return {
                ...state,
                loading: false,
                user: jwtDecode(action.payload),
                token: action.payload.token,
                isAuthenticated: true,
            };
        case Signin_In_User_Failure:
            return {
                ...state,
                loading: false,
                error: action.payload,
                user: {},
            };
        
        case "SET_USER_DATA":
            return {
                ...state,
                loading: true,
            };
        case "SET_USER_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        case "SET_USER_DATA_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default UserReducer;