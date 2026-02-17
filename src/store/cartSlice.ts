import { createSlice } from "@reduxjs/toolkit";

type CartState = {
    test: number;
}

const initialState: CartState = {
    test:10
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{}
    
})

export default cartSlice.reducer;
