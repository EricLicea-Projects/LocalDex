import axios from "axios";
import router from "../router/routes";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 503) {
      router.navigate("/maintenance", { replace: true });
    }
    return Promise.reject(error);
  },
);
