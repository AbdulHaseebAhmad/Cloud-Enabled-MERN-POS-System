import suppliersReducer from "../Supplier/SupplierReducers";
import productsReducer from "../Product/ProductReducers"
import analyticsReducer from "../Analytics/AnalyticsReducers";
import { combineReducers } from '@reduxjs/toolkit';
import CategoriesReducers from "../Categories/CategoriesReducers";

const rootReducer = combineReducers({
  SupplierReducer: suppliersReducer,
  ProductReducer : productsReducer,
  AnalyticsReducer: analyticsReducer,
  CategoriesReducer:CategoriesReducers
});

export default rootReducer;