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
  ADD_SUPPLIER_DETAILS,
  ADD_SUPPLIER_DETAILS_SUCCESS,
  ADD_SUPPLIER_DETAILS_FAILURE,
  ADD_PAYMENT_DETAILS_SUCCESS,
  CLEAR_SUPPLIER_DETAILS,
  FETCH_SUPPLIER,
  FETCH_SUPPLIER_SUCCESS,
  FETCH_SUPPLIER_FAILURE
} from "./Constants";

const initialState = {
  loading: false,
  data: [],
  error: null,
  msg: "",
  supplierDetails: {
    "SupSupplier Name": "",
    "Supplier Id": "",
    "Supplier Address": "",
    "Supplier Contact": "",
    "Total Stock": 0,
    "Payment Details": {
      "Bank Account Information":{
        "Bank Name":"",
        "Account Name":"",
        "Account Number":"",
        "IBAN":"",
        "Swift Code":"",
        "Branch Code":""
      },
      "Payment Terms":{
        "Payment Frequency":"",
        "Payment Due Period":"",
        "Preferred Payment Method":"",
        "Discount Terms":""
      },
      "Tax Information":{
        "Tax Identification Number (TIN)":"",
        "VAT Number (if applicable)":"",
      },
      "Billing Information":{
        "Billing Address":"",
        "Invoice Requirements":""
      }
      
    },
  },
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
      ;
    case FETCH_SUPPLIER:
      return {
        ...state,
        loading: true,
        msg: FETCH_SUPPLIER,
      };
    case FETCH_SUPPLIER_SUCCESS:
      return {
        ...state,
        loading: false,
        supplierDetails: state.data.find((product) => product._id === action.payload),
        error: null,
        msg: FETCH_SUPPLIER_SUCCESS,
      };
    case FETCH_SUPPLIER_FAILURE:
      return {
        ...state,
        loading: false,
        supplierDetails: {},
        error: action.payload,
        msg: FETCH_SUPPLIER_FAILURE,
      };  
      case ADD_SUPPLIER_DETAILS: 
      return {
        ...state,
        loading:true,
        msg:ADD_SUPPLIER_DETAILS
      };
      case ADD_SUPPLIER_DETAILS_SUCCESS:
        return {
          ...state,
          loading:false,
          supplierDetails:{...state.supplierDetails,...action.payload},
          msg:ADD_SUPPLIER_DETAILS_SUCCESS
         };
      case ADD_SUPPLIER_DETAILS_FAILURE:
        return {
        ...state,
        loading:false,
        msg:ADD_SUPPLIER_DETAILS_FAILURE
      };
      case ADD_PAYMENT_DETAILS_SUCCESS:
        return {
          ...state,
          loading:false,
          msg:ADD_PAYMENT_DETAILS_SUCCESS,
          supplierDetails:{...state.supplierDetails,["Payment Details"]:{
            ...state.supplierDetails['Payment Details'],
            ...action.payload
          }}
        };
      case CLEAR_SUPPLIER_DETAILS: 
      return {
        ...state,
        supplierDetails:initialState.supplierDetails
      }
    default:
      return state;
  }
};

export default suppliersReducer;
