import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../redux/baseQuery";

export type DataType = {
  id: number;
  image: string;
  title: string;
  smallImage: string;
};

export type SliderType = {
  data: DataType[];
  success: boolean;
};

export const sliderApi = createApi({
  reducerPath: "sliderApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getSlider: builder.query<SliderType, void>({
      query: () => ({
        url: `sliders`,
      }),
    }),
  }),
});

export const { useGetSliderQuery, useLazyGetSliderQuery } = sliderApi;
