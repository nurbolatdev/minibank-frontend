import { http } from "./https.js";

export const transactionsApi = {

    getAll(accountId, page = 0, size = 10) {

        return http.get(`/transactions?accountId=${accountId}&page=${page}&size=${size}`);

    }

};