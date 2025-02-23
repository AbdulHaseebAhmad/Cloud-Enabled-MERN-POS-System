import suppliersReducer from "../Supplier/SupplierReducers";
import productsReducer from "../Product/ProductReducers"
import analyticsReducer from "../Analytics/AnalyticsReducers";
import { combineReducers } from '@reduxjs/toolkit';
import CategoriesReducers from "../Categories/CategoriesReducers";
import UserReducer from "../User/UserReducers";

const rootReducer = combineReducers({
  SupplierReducer: suppliersReducer,
  ProductReducer : productsReducer,
  AnalyticsReducer: analyticsReducer,
  CategoriesReducer:CategoriesReducers,
  UserReducer: UserReducer
});

export default rootReducer;