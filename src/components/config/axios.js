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
