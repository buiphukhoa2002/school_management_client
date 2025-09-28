import axios from "axios";

const api = axios.create({
  baseURL: "https://school-management-server-s9v7.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
