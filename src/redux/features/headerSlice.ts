import { createSlice } from "@reduxjs/toolkit";

type HeaderState = {
  isOpen: boolean;
  isCartOpen: boolean;
  isFilterOpen?: boolean;
};

const initialState = {
  isOpen: true,
  isCartOpen: false,
  isFilterOpen: false,
} as HeaderState;

const headerSlice = createSlice({
  name: "header",
  initialState: initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { toggle, toggleCart } = headerSlice.actions;
export default headerSlice.reducer;
