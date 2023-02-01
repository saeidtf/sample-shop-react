import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token ? "Bearer " + token : undefined,
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

setupCache(instance,{
    ttl: 60 * 1000,
});

export default instance;
