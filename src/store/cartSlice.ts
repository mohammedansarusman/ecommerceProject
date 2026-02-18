import { createSlice } from "@reduxjs/toolkit";

// type CartState = {
//     test: number;
// }

// const initialState: CartState = {
//     test:10
// };
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItems: (state, action) => {
      // state.cartItems.push(action.payload);
      state.cartItems = [...state.cartItems,action.payload]
    },
  },
});

export default cartSlice.reducer;
export const { addItems } = cartSlice.actions;
