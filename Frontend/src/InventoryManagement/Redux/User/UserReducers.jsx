import  { Signin_In_User, Signin_In_User_Success, Signin_In_User_Failure } from './Constants';


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
                user: action.payload,
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
        default:
            return state;
    }
};

export default UserReducer;