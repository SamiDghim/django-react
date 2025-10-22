import axios, { AxiosInstance, AxiosError } from "axios";
import toast from "react-hot-toast";

const baseURL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") + "/api/";

const api: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  },
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      toast.error(`Error: ${error.response.status} - ${error.response.statusText}`);
    } else if (error.request) {
      toast.error("No response received");
    } else {
      toast.error("Something else happened");
    }
    return Promise.reject(error);
  }
);

export default api;