import { emptySplitApi } from "../redux/baseQuery";

export type ProductItemType = {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
  thumbnail: string;
  description: string;
};

export type ProductQuery = {
  page?: number;
  pageSize?: number;
  q?: string;
};

export type ProductDataType = {
  data: {
    count: number;
    rows: ProductItemType[];
  };
  success: boolean;
};

export type ProductWidgetsType = {
    data: ProductItemType[];
    success: boolean;
};

export const productApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductDataType, ProductQuery>({
      query: (queryArg) => ({
        url: "products",
        params: queryArg,
      }),
    }),
    getProduct: builder.query<any, { id: string }>({
      query: (args) => ({
        url: `products/${args.id}`,
      }),
    }),
    getBestSellers: builder.query<ProductWidgetsType, void>({
        query: () => ({
            url: `products/bestSeller`,
        }),
    }),
    getNewestProducts: builder.query<ProductWidgetsType, void>({
        query: () => ({
            url: `products/newest`,
        }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetBestSellersQuery,
  useGetNewestProductsQuery, 
  useLazyGetProductQuery,
  useLazyGetProductsQuery,
  useLazyGetBestSellersQuery,
  useLazyGetNewestProductsQuery,
} = productApi;
