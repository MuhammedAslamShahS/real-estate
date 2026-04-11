import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// 🔥 auto token attach
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("userToken");

  if (token) {
    req.headers.Authorization = token;
  }

  return req;
});

export default API;