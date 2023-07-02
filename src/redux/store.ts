import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./features/headerSlice";
import categorySlice from "./features/categories/categorySlice";
import cartSlice from "./features/cart/cartSlice";
import productSlice from "./features/products/productSlice";
const store = configureStore({
  reducer: {
    header: headerSlice,
    categories: categorySlice,
    cart: cartSlice,
    filter: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
