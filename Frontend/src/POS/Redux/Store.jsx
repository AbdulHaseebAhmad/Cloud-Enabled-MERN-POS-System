 import {configureStore} from "@reduxjs/toolkit";
import posScreenSlice from "./PosScreenReducers";


 const Posstore = configureStore({reducer:{currentCart:posScreenSlice.reducer}});

 export default Posstore;