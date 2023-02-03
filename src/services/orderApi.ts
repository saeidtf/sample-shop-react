import { createApi } from "@reduxjs/toolkit/query/react";
import { OrderDataType, OrderDetailsDataType } from "../pages/Profile/types";
import { baseQuery } from "../redux/baseQuery";

export type OrderQuery = {
  page?: number;
  pageSize?: number;
};

export type OrderDetailQuery = {
  id: string;
};

export type OrderType = {
  data: {
    count: number;
    rows: OrderDataType[];
  };
  success: boolean;
};

export type OrderDetailsType = {
  data: OrderDetailsDataType[];
  success: boolean;
};

export type CreateOrderType = {
  orderItems: {
    productId: number;
    quantity: number;
  }[];
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  address: string;
};

type OrderResponseType = {
  data: any;
  success: boolean;
  message: string;
};

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getOrders: builder.query<OrderType, OrderQuery>({
      query: (queryArg) => ({
        url: "orders",
        params: queryArg,
      }),
    }),
    getOrder: builder.query<OrderDetailsType, OrderDetailQuery>({
      query: (args) => ({
        url: `orders/${args.id}`,
      }),
    }),
    postOrder: builder.mutation<OrderResponseType, CreateOrderType>({
      query: (body) => ({
        url: "orders",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrderQuery,
  usePostOrderMutation,
  useLazyGetOrderQuery,
  useLazyGetOrdersQuery,
} = orderApi;
