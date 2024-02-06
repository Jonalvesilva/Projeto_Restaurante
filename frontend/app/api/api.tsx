import axios from "axios";
import toast from "react-hot-toast";
import { useLoadingStore } from "@/useLoadingStore";

export const api = axios.create({
  baseURL: "https://api-projeto-restaurante.vercel.app",
});

const setLoading = useLoadingStore.getState().setIsLoading;

api.interceptors.request.use((config) => {
  setLoading(true);
  return config;
});

api.interceptors.response.use(
  (response) => {
    setLoading(false);
    return response;
  },
  (error) => {
    if (error.response.status === 400) {
      setLoading(false);

      if (error.response) {
        const errors: string[] = error.response.data.message.flat();

        errors.map((error) => {
          toast.error(error);
        });
      }
    }
  }
);
