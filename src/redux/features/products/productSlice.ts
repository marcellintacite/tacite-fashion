import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  category: string[];
  price: number[];
};
const filterSlice = createSlice({
  name: "filter",
  initialState: {
    category: [],
    price: [],
  } as initialStateType,
  reducers: {
    setCategory: (state, action) => {
      state.category = [...state.category, action.payload];
    },
    setPrice: (state, action) => {
      state.price = [...state.price, action.payload];
    },
    removeCategory: (state, action) => {
      state.category = state.category.filter((item) => item !== action.payload);
    },
    removePrice: (state, action) => {
      state.price = state.price.filter((item) => item !== action.payload);
    },
    resetFilter: (state) => {
      state.category = [];
      state.price = [];
    },
  },
});

export const {
  setCategory,
  setPrice,
  removeCategory,
  removePrice,
  resetFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
