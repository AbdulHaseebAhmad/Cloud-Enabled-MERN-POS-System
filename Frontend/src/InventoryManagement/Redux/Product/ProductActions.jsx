import axios from "axios";
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCT_Details,
  ADD_PRODUCT_Variants,
  CLEAR_PRODUCT_Dtails,
  CLEAR_TRANSITIONAL_DATA,
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "./Constants";

import Cookies from "js-cookie";

const url = import.meta.env.VITE_APP_BACKEND_API_URL;
const token = Cookies.get("token");
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

const addProduct = (product) => {
  return async (dispatch) => {
    dispatch({ type: ADD_PRODUCT });
    try {
      const response = await axios.post(
        `${url}/api/product/addproduct`,
        product,
        config
      );
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: response.data });
      dispatch({ type: CLEAR_PRODUCT_Dtails });
    } catch (error) {
      dispatch({ type: ADD_PRODUCT_FAILURE, payload: error.message });
    }
  };
};

const updateProduct = (product,id) => {
  return async (dispatch) => {
    console.log(id)
    dispatch({ type: UPDATE_PRODUCT });
    try {
      const response = await axios.put(
        `${url}/api/products/updateproduct/${id}`,
        product,
        config
      );
      dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: error.message });
    }
  };
};

const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT });
    try {
      const response = await axios.delete(
        `${url}/api/products/deleteproduct/${id}`,
        config
      );
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: response.data.id });
    } catch (error) {
      dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
    }
  };
};

const getProducts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS });
    try {
      const token = Cookies.get("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `${url}/api/products/getproducts`,
        config
      );
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
    }
  };
};

const setProduct = (productDetails) => {
  return async (dispatch) => {
    dispatch({ type: ADD_PRODUCT_Details, payload: productDetails });
  };
};
const setVariants = (variantsArray) => {
  console.log("Variants Array", variantsArray);
  return async (dispatch) => {
    dispatch({ type: ADD_PRODUCT_Variants, payload: variantsArray });
  };
};

const clearProductDetails = () => {
  return async (dispatch) => {
    dispatch({ type: CLEAR_PRODUCT_Dtails });
  };
};

const clearTransitionalData = () => {
  return async (dispatch) => {
    dispatch({ type: CLEAR_TRANSITIONAL_DATA });
  };
};

const fetchProductToUpdate = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCT });
    try {
      dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: id });
    }
    catch (error) {
      dispatch({ type: FETCH_PRODUCT_FAILURE, payload: error.message });
  };  };
};



export {
  addProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  setProduct,
  setVariants,
  clearProductDetails,
  clearTransitionalData,
  fetchProductToUpdate,
};
