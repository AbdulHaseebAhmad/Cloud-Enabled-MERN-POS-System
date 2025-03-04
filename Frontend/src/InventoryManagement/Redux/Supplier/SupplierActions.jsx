import axios from "axios";
import {
  ADD_SUPPLIER,
  ADD_SUPPLIER_SUCCESS,
  ADD_SUPPLIER_FAILURE,
  UPDATE_SUPPLIER,
  UPDATE_SUPPLIER_SUCCESS,
  UPDATE_SUPPLIER_FAILURE,
  DELETE_SUPPLIER,
  DELETE_SUPPLIER_SUCCESS,
  DELETE_SUPPLIER_FAILURE,
  FETCH_SUPPLIERS,
  FETCH_SUPPLIERS_SUCCESS,
  FETCH_SUPPLIERS_FAILURE,
  //ADD_PAYMENT_DETAILS,
  ADD_SUPPLIER_DETAILS_SUCCESS,
  ADD_PAYMENT_DETAILS_SUCCESS,
  CLEAR_SUPPLIER_DETAILS,
  FETCH_SUPPLIER,
  FETCH_SUPPLIER_SUCCESS,
  FETCH_SUPPLIER_FAILURE,
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

const addSupplier = (supplier) => {
  return async (dispatch) => {
    dispatch({ type: ADD_SUPPLIER });
    try {
      const response = await axios.post(
        `${url}/api/supplier/createsupplier`,
        supplier,
        config
      );
      dispatch({ type: ADD_SUPPLIER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ADD_SUPPLIER_FAILURE, payload: error.message });
    }
  };
};

const updateSupplier = (supplier,id) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_SUPPLIER });
    try {
      const response = await axios.put(
        `${url}/api/supplier/updatesupplier/${id}`,
        supplier,
        config
      );
      dispatch({ type: UPDATE_SUPPLIER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: UPDATE_SUPPLIER_FAILURE, payload: error.message });
    }
  };
};

const deleteSupplier = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_SUPPLIER });
    try {
      const response = await axios.delete(
        `${url}/api/supplier/deleteSupplier/${id}`,
        config
      );
      dispatch({ type: DELETE_SUPPLIER_SUCCESS, payload: response.data.id });
    } catch (error) {
      dispatch({ type: DELETE_SUPPLIER_FAILURE, payload: error.message });
    }
  };
};

const getSuppliers = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_SUPPLIERS });
    try {
      const token = Cookies.get("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `${url}/api/supplier/getsuppliers`,
        config
      );
      dispatch({ type: FETCH_SUPPLIERS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_SUPPLIERS_FAILURE, payload: error.message });
    }
  };
};

const setSupplierDetails = (supplierDetails) => {
  return async (dispatch) => {
    const { key, details } = supplierDetails;
    if (key === "General") {
      dispatch({
        type: ADD_SUPPLIER_DETAILS_SUCCESS,
        payload: details,
      });
    } else if (key === "Payment Details") {
      console.log(details);
      dispatch({ type: ADD_PAYMENT_DETAILS_SUCCESS, payload: details });
    }
  };
};

const clearSupplierDetails = () =>{
  return async(dispatch) => {
    dispatch({type:CLEAR_SUPPLIER_DETAILS})
  }
}


const fetchSupplierToUpdate = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_SUPPLIER });
    try {
      dispatch({ type: FETCH_SUPPLIER_SUCCESS, payload: id });
    }
    catch (error) {
      dispatch({ type: FETCH_SUPPLIER_FAILURE, payload: error.message });
  };  };
};


export {
  addSupplier,
  updateSupplier,
  deleteSupplier,
  getSuppliers,
  setSupplierDetails,
  clearSupplierDetails,
  fetchSupplierToUpdate
};
