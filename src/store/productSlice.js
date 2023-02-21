import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: []
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log("action", action.payload);
      state.productList = [...state.productList, action.payload];
    },
     removeCart: (state, action) => {
       console.log("action", action.payload);
       state.productList = [...state.productList, action.payload];     }
  }
});

export const { addProduct } = productSlice.actions;
export const { removeCart } = productSlice.actions;

export default productSlice.reducer;