import suppliersReducer from "../Supplier/SupplierReducers";
import productsReducer from "../Product/ProductReducers"
import analyticsReducer from "../Analytics/AnalyticsReducers";
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  SupplierReducer: suppliersReducer,
  ProductReducer : productsReducer,
  AnalyticsReducer: analyticsReducer
});

export default rootReducer;