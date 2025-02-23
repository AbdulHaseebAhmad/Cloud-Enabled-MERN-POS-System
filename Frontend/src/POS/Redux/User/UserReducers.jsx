import { jwtDecode } from "jwt-decode";
import { SET_USER_DATA,
    SET_USER_DATA_FAILED,
    SET_USER_DATA_SUCCESFULL}
    from "./Constants";

const initialState = {
    loading: false,
    user: {},
    error: false,
    token: '',
    isAuthenticated: false,
    errormsg:""
};


const UserReducer = (state = initialState, action) => {
    switch (action.type){
    case SET_USER_DATA:
        return {
            ...state,
            loading:true,
    };
    case SET_USER_DATA_SUCCESFULL:{
        return {
            ...state,
            loading:true,
            error:false,
            token:action.payload,
            user:jwtDecode(action.payload),
            isAuthenticated:true,
            errormsg:""
        }
    };
    case SET_USER_DATA_FAILED:
        return {
            ...state,
            loading:false,
            user:{},
            error:true,
            errormsg:action.payload,
            token:"",
            isAuthenticated:false,
        };
    default:
      return state;}
}


export default UserReducer;