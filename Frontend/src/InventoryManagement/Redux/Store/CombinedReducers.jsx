import suppliersReducer from "../Supplier/SupplierReducers";
import productsReducer from "../Product/ProductReducers"
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  SupplierReducer: suppliersReducer,
  ProductReducer : productsReducer
});

export default rootReducer;