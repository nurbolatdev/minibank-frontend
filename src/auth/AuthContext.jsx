import { createContext, useContext, useState } from "react";
import { tokenService } from "/src/service/tokenService";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [isAuth, setIsAuth] = useState(tokenService.isLoggedIn());

    const login = (token) => {
        tokenService.setToken(token);
        setIsAuth(true);
    };

    const logout = () => {
        tokenService.removeToken();
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

}

export const useAuth = () => useContext(AuthContext);