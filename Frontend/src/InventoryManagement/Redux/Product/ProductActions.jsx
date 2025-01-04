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
} from "./Constants";

import Cookies from "js-cookie";

const url = import.meta.env.VITE_APP_BACKEND_API_URL;
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookies.gt("token")}`,
  },
};

const addProduct = (product) => {
  return async (dispatch) => {
    dispatch({ type: ADD_PRODUCT });
    try {
      const response = await axios.post(
        `${url}/api/products/addproduct`,
        product,
        config
      );
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ADD_PRODUCT_FAILURE, payload: error.message });
    }
  };
};

const updateProduct = (product) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_PRODUCT });
    try {
      const response = await axios.put(
        `${url}/api/products/updateproduct`,
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
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
    }
  };
};

const getProducts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS });
    try {
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

export { addProduct, updateProduct, deleteProduct, getProducts };
