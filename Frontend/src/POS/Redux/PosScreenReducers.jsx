import { createSlice } from "@reduxjs/toolkit";

const initialCheckoutState = {
  currentOrder: [],
  orderNumber: null,
  openOrders: [],
  coupons: [],
  currentOrderTotal: 0,
  currentOrderTax: 0,
  currentOrderDiscount: 0,
  currentOrderSubtotal: 0,
};

const posScreenSlice = createSlice({
  name: "Checkout",
  initialState: initialCheckoutState,
  reducers: {
    setCurrentOrder(state, action) {
      state.currentOrder = action.payload;
    },
    appendOpenOrders(state, action) {
      const existingItem = state.openOrders.find(
        (item) => item.orderNumber === action.payload.orderNumber
      );
      console.log(existingItem);
      if (existingItem) {
        existingItem.cartItems = action.payload.cartItems;
        existingItem.totalPrice = action.payload.totalPrice;
        state.orderNumber = null;
        state.currentOrder = [];
      } else {
        state.openOrders.push(action.payload);
        state.currentOrder = [];
        state.orderNumber = null;
      }
    },
    cancelCurrentOrder(state) {
      state.currentOrder = [];
      state.orderNumber = null;
    },
    addToCurrentOrder(state, action) {
      // console.log(action.payload)
      const itemExist = state.currentOrder.find(
        (item) => item.id === action.payload.id
      );
      if (itemExist) {
        itemExist.Qty += 1;
      } else {
        state.currentOrder.push(action.payload);
      }
    },
    decreaseQuantity(state, action) {
      // console.log(action.payload)
      const itemExist = state.currentOrder.find(
        (item) => item.id === action.payload
      );
      if (itemExist.Qty > 1) {
        itemExist.Qty -= 1;
      } else {
        state.currentOrder = state.currentOrder.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    increaceQuantity(state, action) {
      //  console.log(action.payload)
      const itemExist = state.currentOrder.find(
        (item) => item.id === action.payload
      );
      itemExist.Qty += 1;
    },
    removeItemFromCurrentOrder(state, action) {
      state.currentOrder = state.currentOrder.filter(
        (item) => item.id !== action.payload
      );
    },
    setOrderNumber(state, action) {
      state.orderNumber = action.payload;
    },
  },
});

export const posScreenActions = posScreenSlice.actions;
export default posScreenSlice;
