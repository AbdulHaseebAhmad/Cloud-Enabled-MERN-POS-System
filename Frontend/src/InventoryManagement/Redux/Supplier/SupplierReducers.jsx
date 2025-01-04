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
} from "./Constants";

const initialState = {
  loading: false,
  data: [],
  error: null,
  msg: "",
};

const suppliersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUPPLIER:
      return {
        ...state,
        loading: true,
        msg: ADD_SUPPLIER,
      };
    case ADD_SUPPLIER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
        msg: ADD_SUPPLIER_SUCCESS,
      };
    case ADD_SUPPLIER_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
        msg: ADD_SUPPLIER_FAILURE,
      };
    case UPDATE_SUPPLIER:
      return {
        ...state,
        loading: true,
        msg: UPDATE_SUPPLIER,
      };
    case UPDATE_SUPPLIER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
        msg: UPDATE_SUPPLIER_SUCCESS,
      };
    case UPDATE_SUPPLIER_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
        msg: UPDATE_SUPPLIER_FAILURE,
      };
    case DELETE_SUPPLIER:
      return {
        ...state,
        loading: true,
        msg: DELETE_SUPPLIER,
      };
    case DELETE_SUPPLIER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.filter((supplier) => supplier._id !== action.payload),
        error: null,
        msg: DELETE_SUPPLIER_SUCCESS,
      };
    case DELETE_SUPPLIER_FAILURE:
      return {
        ...state,
        loading: false,
        data: state.data,
        error: action.payload,
        msg: DELETE_SUPPLIER_FAILURE,
      };
    case FETCH_SUPPLIERS:
      return {
        ...state,
        loading: true,
        msg: FETCH_SUPPLIERS,
      };
    case FETCH_SUPPLIERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
        msg: FETCH_SUPPLIERS_SUCCESS,
      };
    case FETCH_SUPPLIERS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
        msg: FETCH_SUPPLIERS_FAILURE,
      };
    default:
      return state;
  }
};

export default suppliersReducer;