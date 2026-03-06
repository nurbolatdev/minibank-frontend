import { http } from "../api/https.js";
import { tokenService } from "/src/service/tokenService";

export const authApi = {

    async register(email, password) {
        return http.post("/auth/register", {
            email,
            password
        });
    },

    async login(email, password) {

        const response = await http.post("/auth/login", {
            email,
            password
        });

        const token = response.data.token;

        tokenService.setToken(token);

        return response.data;
    },

    async me() {
        return http.get("/users/me");
    },

    logout() {
        tokenService.removeToken();
    }

};

