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

const initialState = {
  loading: false,
  data: [],
  error: null,
  msg: "",
};

 const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        loading: true,
        msg: ADD_PRODUCT,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
        msg: ADD_PRODUCT_SUCCESS,
      };
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
        msg: ADD_PRODUCT_FAILURE,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        loading: true,
        msg: UPDATE_PRODUCT,
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
        msg: UPDATE_PRODUCT_SUCCESS,
      };
    case UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
        msg: UPDATE_PRODUCT_FAILURE,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        loading: true,
        msg: DELETE_PRODUCT,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
        msg: DELETE_PRODUCT_SUCCESS,
      };
    case DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
        msg: DELETE_PRODUCT_FAILURE,
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: true,
        msg: FETCH_PRODUCTS,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
        msg: FETCH_PRODUCTS_SUCCESS,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
        msg: FETCH_PRODUCTS_FAILURE,
      };
    default:
      return state;
  }
};

export default productsReducer;