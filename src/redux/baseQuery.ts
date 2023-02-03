import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { toast } from "react-toastify";

const baseQuery = fetchBaseQuery({
  cache: "default",

  baseUrl: process.env.REACT_APP_BASE_URL,
  prepareHeaders: async (headers, { getState }) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "*/*");

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  
  if (
    result.error &&
    (result.meta?.response?.status === 401 || result.meta?.response?.status === 403)
  ) {  
    toast.error("Your session has expired. Please login again.");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }
  return result;
};

export { baseQueryWithReauth as baseQuery };
