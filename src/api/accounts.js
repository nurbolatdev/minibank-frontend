import { http } from "./https.js";

export const createAccount = (currency) => {
    return http.post("/accounts", { currency });
};

export const listAccounts = (page = 0, size = 10) => {
    return http.get(`/accounts?page=${page}&size=${size}`);
};