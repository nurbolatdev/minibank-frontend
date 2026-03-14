import { http } from "./https.js";

export const transferApi = {

    transfer(data) {

        return http.post("/transfers", {
            fromAccountId: data.fromAccountId,
            toAccountId: data.toAccountId,
            amount: data.amount,
            description: data.description
        });

    }

};