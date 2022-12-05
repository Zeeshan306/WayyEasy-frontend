import axios from "axios";
import { api } from "./urlConfig";

export const API = axios.create({
  baseURL: api,
});

API.interceptors.request.use((req) => {
  if (JSON.parse(localStorage.getItem("owner"))) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("owner"))?.token
    }`;
  }
  return req;
});

API.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    try {
      const { status } = err?.response;
      if (status === 500) {
        console.log("err", err);
        sessionStorage.removeItem("user");
      }
      return Promise.reject(err);
    } catch (error) {
      console.log(error);
    }
  }
);
