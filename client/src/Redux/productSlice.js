import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    fetchingStart: (state) => {
      state.isFetching = true;
    },
    Success: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    Failure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    }
  },
});

export const { fetchingStart, Success, Failure } =
  productSlice.actions;
export default productSlice.reducer;
