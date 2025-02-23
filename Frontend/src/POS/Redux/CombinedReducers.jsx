import { combineReducers } from '@reduxjs/toolkit';
import posScreenSlice from "./PosScreen/PosScreenReducers";
import UserReducer from './User/userReducers';


const rootReducer = combineReducers(
    {
        currentCart:posScreenSlice.reducer,
        UserReducer:UserReducer
    }
)

export default rootReducer;