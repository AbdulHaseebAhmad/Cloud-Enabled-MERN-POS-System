import axios from 'axios';
import  { Signin_In_User, Signin_In_User_Success, Signin_In_User_Failure } from './Constants';
import Cookies from "js-cookie";
import { redirect } from  'react-router-dom';
const url = import.meta.env.VITE_APP_BACKEND_API_URL;


const signInUser = (user) => {
    return async (dispatch) => {
        dispatch({ type: Signin_In_User });
        try {
            const response = await axios.post(`${url}/api/authenticate/login`, user);
            Cookies.set("token", response.data.token, {
                  expires: 1/24,
                  path: "/",
                  secure: true,
                  sameSite: "Strict",
                });
                dispatch({ type: Signin_In_User_Success, payload: response.data });
                return redirect("/inventory-management");
                
        } catch (error) {
            dispatch({ type: Signin_In_User_Failure, payload: error.message });
        }
    }
}

export { signInUser };