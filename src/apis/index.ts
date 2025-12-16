import axios from "axios";
import { clearToken, getToken } from "../lib/token";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
  withCredentials: true,
});

// REQUEST INTERCEPTOR
axiosInstance.interceptors.request.use((config) => {
  const accessToken = getToken();

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

// RESPONSE INTERCEPTOR
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      clearToken();
      if (typeof window !== "undefined") {
        window.location.href = "/user/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
