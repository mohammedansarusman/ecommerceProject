import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: string|number;
  name: string;
  price: number;
  sizes: string;
  color: string;
  quantity: number;
  image: string;
}
type CartState = {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cartItems.find(item=>item.id===action.payload.id)
      if(existingItem){
        existingItem.quantity=existingItem.quantity+1
      }else{
        state.cartItems.push(action.payload)
      }
    },
  },
});

export default cartSlice.reducer;
export const { addItems } = cartSlice.actions;
