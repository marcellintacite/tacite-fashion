import { productType } from "./product";

export type storeType = {
  header: {
    isOpen: boolean;
    isCartOpen: boolean;
  };
  cart: {
    cart: productType[];
    total: number;
    totalItems: number;
  };
  categories: {
    products: productType[];
    loading: boolean;
    search: string;
  };
};
