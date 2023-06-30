import { productType } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
  totalItems: 0,
} as {
  cart: productType[];
  total: number;
  totalItems: number;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product } = action.payload;
      const pro = state.cart.find(
        (item: productType) => item.id === product.id
      );
      if (pro) {
        pro.quantity ? pro.quantity++ : (pro.quantity = 1);
      } else {
        state.cart.push(product);
      }
      state.totalItems++;
    },

    removeToCart: (state, action) => {
      const { product } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== product.id);
      // remove item
      state.totalItems = product.quantity
        ? state.totalItems - (product.quantity + 1)
        : state.totalItems - 1;
    },

    addQuantity: (state, action) => {
      const { product } = action.payload;
      const pro = state.cart.find(
        (item: productType) => item.id === product.id
      );
      if (pro) {
        pro.quantity ? pro.quantity++ : (pro.quantity = 1);
      }
      state.totalItems++;
    },
    reduceQuantity: (state, action) => {
      const { product } = action.payload;
      const pro = state.cart.find(
        (item: productType) => item.id === product.id
      );
      if (pro && pro.quantity) {
        pro.quantity ? pro.quantity-- : (pro.quantity = 0);
        state.totalItems--;
      }
    },
  },
});

export const { addToCart, removeToCart, addQuantity, reduceQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
