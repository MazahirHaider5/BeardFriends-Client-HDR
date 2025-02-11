import axios from "axios";
import { toast } from "react-hot-toast";
import store from "@/redux";
import { resetUser } from "@/redux/authSlice";
import Router from "next/router";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL!,
  withCredentials: true
});

apiClient.interceptors.request.use(
  (config) => {
    const token = store.getState().user.user?.token;
    if (!token) {
      store.dispatch(resetUser());
      toast.error("Session expired. Redirecting to login...");
      Router.push("/signin");
      return Promise.reject(new Error("No token found"));
    }
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error instanceof Error ? error : new Error(error))
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      toast.error("Network error. Please try again.");
      return Promise.reject(new Error("Network error"));
    }
    const { status } = error.response;
    if (status === 401) {
      store.dispatch(resetUser());
      toast.error("Session expired. Redirecting to login...");
      Router.push("/signin");
    }
    return Promise.reject(error instanceof Error ? error : new Error(error));
  }
);

export default apiClient;
