import axios from "axios";

const prodUrl = "http://192.168.1.4:5000/api";
const Axios = axios.create({
  baseURL: `http://192.168.1.4:5000/api`,
});

Axios.interceptors.request.use(async (request) => {
  request.headers["Accept-Language"] = i18next.language;
  request.headers["mode"] = "no-cors";

  return request;
});

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const httpService = { Axios };
