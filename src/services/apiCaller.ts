import axios from "axios";

// const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

export const API = 'https://api.cloud-devel.brc-solar.dev';

export const apiCaller = axios.create({
  baseURL: `https://api.cloud-devel.brc-solar.dev`,
  responseType: "json",
});

apiCaller.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
  }
  return config;
});