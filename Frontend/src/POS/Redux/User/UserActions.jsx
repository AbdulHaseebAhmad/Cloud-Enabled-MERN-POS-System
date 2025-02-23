import Cookies from "js-cookie";
import {
  SET_USER_DATA,
  SET_USER_DATA_FAILED,
  SET_USER_DATA_SUCCESFULL,
} from "./Constants";

const setUserData = () => {
  return async (dispatch) => {
    dispatch({ type: SET_USER_DATA });

    const token = Cookies.get("token");
    if (token) {
      dispatch({ type: SET_USER_DATA_SUCCESFULL, payload: token });
    } else {
      dispatch({ type: SET_USER_DATA_FAILED, payload: "No Token Found" });
    }
  };
};

export { setUserData };
