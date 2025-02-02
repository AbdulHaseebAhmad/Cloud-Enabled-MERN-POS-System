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
    dispatch(posScreenActions.setMessage({message:"Product Scanned Fetching Product",status:'Loading'}));
    console.log(SKU)
    try {
      const response = await axios.post(
        `${url}/api/pos/get-product`,
        {SKU:SKU},
      );
      dispatch(posScreenActions.addToCurrentOrder(response.data));
      dispatch(posScreenActions.setMessage({message:"Product Added To Cart",status:'success'}));
    } catch (error) {
      dispatch(posScreenActions.setMessage({message:"Product Fetching Failed",status:'error'}));
      console.log(error);
      }
  };
};

const checkOutOrder = (order) => {
  return async (dispatch) => {
     try{
      const response = await axios.post(
        `${url}/api/order/checkout`,
        {order:order},
      )
     console.log(response.data)
     dispatch(posScreenActions.cancelCurrentOrder());
    }
    catch (err){
      console.log(err)
    }
  };
}

export { getProduct,checkOutOrder };
