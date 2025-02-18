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


const initialState = {
  loading: false,
  data: [],
  error: null,
  msg: "",
  productDetails:{
    'Product Name':'' ,
    SKU: '',
    Price: '',
    Description: '',
    Category: '',
    Supplier: '',
    variants: [],
 }
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
        error: null,
        msg: UPDATE_PRODUCT_SUCCESS,
      };
    case UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
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
        data: state.data.filter((product) => product._id !== action.payload),
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
    case FETCH_PRODUCT:
      return {
        ...state,
        loading: true,
        msg: FETCH_PRODUCT,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetails: state.data.find((product) => product._id === action.payload),
        error: null,
        msg: FETCH_PRODUCT_SUCCESS,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        productDetails: {},
        error: action.payload,
        msg: FETCH_PRODUCT_FAILURE,
      };  
      case ADD_PRODUCT_Details:
        return {
          ...state,
          productDetails: {...state.productDetails, ...action.payload},
        };
      case ADD_PRODUCT_Variants:
        return {
          ...state,
          productDetails: {
            ...state.productDetails,
            variants:action.payload,
          }
        };
      case CLEAR_PRODUCT_Dtails:
        return {
          ...state,
          productDetails: {
            'Product Name':'' ,
            SKU: '',
            Price: '',
            Description: '',
            Category: '',
            Supplier: '',
            variants: [],
         },
        };
      case CLEAR_TRANSITIONAL_DATA:
        return {
          ...state,
          loading: false,
          error: null,
          msg: "",
        };
    default:
      return state;
  }
};

export default productsReducer;