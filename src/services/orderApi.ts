import { OrderDataType, OrderDetailsDataType } from "../pages/Profile/types";
import { emptySplitApi } from "../redux/baseQuery";

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

export const orderApi = emptySplitApi.injectEndpoints({    
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
  overrideExisting: false,
});

export const {
  useGetOrdersQuery,
  useGetOrderQuery,
  usePostOrderMutation,
  useLazyGetOrderQuery,
  useLazyGetOrdersQuery,
} = orderApi;
