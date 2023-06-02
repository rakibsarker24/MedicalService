import axios from "axios";

export const BASE_URL = process.env.PUBLIC_URL;

export const API_URL = "http://127.0.0.1:8000/api/v1";
export const IMAGE_URL = "http://127.0.0.1:8000/uploads";

// export const API_URL = "https://backend.bddrakib.com/api/v1";
// export const IMAGE_URL = "https://backend.bddrakib.com/uploads";

export const route = axios.create({
  baseURL: API_URL,
});

if (localStorage.getItem("token") !== undefined) {
  route.defaults.headers.common["Authorization"] =
    localStorage.getItem("token");
}
route.defaults.headers.post["Content-Type"] = "application/json";
// route.defaults.headers.get["Accept"] = "application/json";

export const authUser = () => {
  if (localStorage.getItem("user") !== undefined) {
    return JSON.parse(localStorage.getItem("user"));
  }
  return;
};
