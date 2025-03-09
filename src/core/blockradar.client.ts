import axios, { AxiosInstance } from "axios";
import { BlockRadarError } from "./error";

class AxiosClient {
  private static instance: AxiosInstance;

  static getInstance(apiKey: string): AxiosInstance {
    if (!AxiosClient.instance) {
      AxiosClient.instance = axios.create({
        baseURL: "https://api.blockradar.co/v1",
        headers: {
          "x-api-key": apiKey,
          "Content-Type": "application/json",
        },
      });
      AxiosClient.instance.interceptors.response.use(
        (response) => response,
        (error) => {
          throw new BlockRadarError(
            error.response?.data?.message || "API Request Failed",
            error.response?.status,
            error.response?.data?.error
          );
        }
      );
    }
    return AxiosClient.instance;
  }
}

export default AxiosClient;
