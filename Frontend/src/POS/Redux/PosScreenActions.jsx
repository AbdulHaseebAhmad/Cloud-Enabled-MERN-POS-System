// import Cookies from "js-cookie";
import axios from "axios";
import { posScreenActions } from "./PosScreenReducers";
const url = import.meta.env.VITE_APP_BACKEND_API_URL;
// const token = Cookies.get("token");

// const config = {
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`,
//   },
// };

const getProduct = (SKU) => {
  return async (dispatch) => {
    //dispatch({ type: ADD_PRODUCT });
    console.log(SKU)
    try {
      const response = await axios.post(
        `${url}/api/pos/get-product`,
        {SKU:SKU},
      );
      //console.log(response.data);
      dispatch(posScreenActions.addToCurrentOrder(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export { getProduct };
