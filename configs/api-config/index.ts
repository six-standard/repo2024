import { Cookies } from "react-cookie";
import { toast } from "react-toastify";
import { refresh } from "./refresh";
import axios from "axios";
export * from "./hooks";
export * from "./paths";

const cookie = new Cookies();

export const instance = axios.create({
  baseURL: process.env.VITE_APP_BASE_URL,
  timeout: 5000
});

instance.interceptors.request.use(
  (res) => {
    const config = refresh().then(() => {
      const access_token = cookie.get("access_token");
      if (access_token) res.headers.Authorization = `Bearer ${access_token}`;
      return res;
    });
    return config;
  },
  (err) => Promise.reject(err)
);

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    const { response } = err;
    if (response.status === 401 || response.status === 403) {
      window.location.replace(`${process.env.VITE_APP_URL_STUDENT}/login`);
    } else {
      toast.error(
        `오류가 발생했습니다\n(${response.status}: ${response.data.description || response.data})`,
        { className: "whitespace-pre-line" }
      );
      return err;
    }
  }
);
