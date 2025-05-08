import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const apiCLinet = axios.create({
  baseURL: baseURL,
});

apiCLinet.interceptors.request.use((config) => {
  //get access to token from local storage
  const token = localStorage.getItem("authToken");
  //attach token to Authentication header
  config.headers.Authorization = `Bearer ${token}`;
  //return config;
});
