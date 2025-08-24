import axios, { AxiosError } from "axios";
import { API_SERVER_ADDR } from "../env/variables";

export const API_BASE_URL = API_SERVER_ADDR + "/api";

export const fetcher = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
