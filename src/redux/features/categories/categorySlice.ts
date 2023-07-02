import { productType } from "@/types/product";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      return res.data;
    } catch (error) {}
  }
);
type initialState = {
  products: productType[];
  loading: boolean;
  search: string;
};

const initialState: initialState = {
  products: [],
  loading: true,
  search: "",
};

const caterorySlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
    setSearchString: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { updateSearch, setSearchString } = caterorySlice.actions;

export default caterorySlice.reducer;
