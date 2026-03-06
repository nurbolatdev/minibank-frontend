import axios from "axios";
import { tokenService } from "/src/service/tokenService.js";

export const http = axios.create({
    baseURL: "http://localhost:8080/api",
    timeout: 10000
});


http.interceptors.request.use((config) => {

    const token = tokenService.getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;

});


http.interceptors.response.use(
    response => response,
    error => {

        if (error.response?.status === 401) {
            tokenService.removeToken();
            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);