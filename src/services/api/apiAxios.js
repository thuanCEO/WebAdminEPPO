import axios from "axios";

const axiosClient = axios.create({
  // baseURL: "https://realityprint.somee.com/",

  baseURL: "https://localhost:7170/",
  headers: {
    "Content-Type": "application/json",
  },
});

// axiosClient.interceptors.request.use(
//   (config) => {
//     const token = sessionStorage.getItem("authToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosClient;
