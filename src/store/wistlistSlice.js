import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wistList: []
};




export const wistlistSlice = createSlice({
  name: "wistlist",
  initialState,
  reducers: {
    addWishlist: (state, action) => {
      console.log("action", action.payload);
      state.wistList = [...state.wistList, action.payload];
    },
     
       

  }
});
export const { addWishlist } = wistlistSlice.actions;

export default wistlistSlice.reducer;