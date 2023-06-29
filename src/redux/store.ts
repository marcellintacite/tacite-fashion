import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./features/headerSlice";
import categorySlice from "./features/categories/categorySlice";

const store = configureStore({
  reducer: {
    header: headerSlice,
    categories: categorySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
