import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./features/headerSlice";
import categorySlice from "./features/categories/categorySlice";
import cartSlice from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    header: headerSlice,
    categories: categorySlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
