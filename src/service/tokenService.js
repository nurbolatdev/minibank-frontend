const TOKEN_KEY = "minibank_token";

export const tokenService = {

    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    },

    setToken(token) {
        localStorage.setItem(TOKEN_KEY, token);
    },

    removeToken() {
        localStorage.removeItem(TOKEN_KEY);
    },

    isLoggedIn() {
        return !!localStorage.getItem(TOKEN_KEY);
    }

};