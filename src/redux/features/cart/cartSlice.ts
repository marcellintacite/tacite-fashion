import { productType } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  cart: productType[];
  total: number;
  totalItems: number;
}

const initialState: initialState = {
  cart: [],
  total: 0,
  totalItems: 0,
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
    calculateTotal: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        if (item.quantity) {
          total += item.price * item.quantity;
        } else {
          total += item.price;
        }
      });
      state.total = total;
    },
  },
});

export const {
  addToCart,
  removeToCart,
  addQuantity,
  reduceQuantity,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
