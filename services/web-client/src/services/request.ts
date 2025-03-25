import axios from "axios";
import { config } from "../constants/config";

const request = axios.create({
  baseURL: config.serverUrl,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default request;
