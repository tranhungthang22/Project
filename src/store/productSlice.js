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
       const dataRemove = state.productList.filter(el => el.id !== action.payload.id)
       state.productList = dataRemove;   
       },
  }
});

export const { removeCart, addProduct } = productSlice.actions;

export default productSlice.reducer;