import { http } from "/https.js";

export const accountsApi = {

    create(currency) {
        return http.post("/accounts", {
            currency
        });
    },

    getAll(page = 0, size = 10) {
        return http.get(`/accounts?page=${page}&size=${size}`);
    }

};