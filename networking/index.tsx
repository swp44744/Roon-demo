import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { Config } from "@/Config";

const instance = axios.create({
    baseURL: Config.apiUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  export enum QueryMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
  }

  export enum QueryKey {
    Experts = 'Experts',
    Profile = "Profile"
  }

  function handleReject(error: AxiosError) {
    if (error.response) {
      console.error("API Error:", error.response.status, error.response.data);
      return {
        status: error.response.status,
        message: error.response.data || "Something went wrong",
      };
    } else if (error.request) {
      console.error("Network Error: No response received");
      return { status: null, message: "No response from server. Check network." };
    } else {
      console.error("Request Error:", error.message);
      return { status: null, message: error.message };
    }
  }

  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => Promise.reject(handleReject(error))
  );

  export async function makeRequest<T>(
    config: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return instance<T>(config)
  }
