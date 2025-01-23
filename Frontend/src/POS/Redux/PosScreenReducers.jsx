import {createSlice} from "@reduxjs/toolkit";


const initialCheckoutState = {
    currentOrder: [],
    openOrders: [],
    coupons:[],
    currentOrderTotal: 0,
    currentOrderTax: 0,
    currentOrderDiscount: 0,
    currentOrderSubtotal: 0,
};

const posScreenSlice = createSlice({
    name:'Checkout',
    initialState: initialCheckoutState,
    reducers: {
        setCurrentOrder (state, action) {
            state.currentOrder = action.payload;
        },
        appendOpenOrders (state, action) {
            state.openOrders.push(action.payload);
            state.currentOrder = []
        },
        cancelCurrentOrder (state) {
            state.currentOrder = [];
        }
    }});

export const posScreenActions = posScreenSlice.actions;
export default posScreenSlice;