import { createContext, useContext, useMemo, useState } from "react";

const AuthCtx = createContext(null);

export function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("token"));

    const value = useMemo(() => ({
        token,
        isAuthed: !!token,
        setToken: (t) => {
            setToken(t);
            if (t) localStorage.setItem("token", t);
            else localStorage.removeItem("token");
        },
        logout: () => {
            setToken(null);
            localStorage.removeItem("token");
        },
    }), [token]);

    return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export const useAuth = () => useContext(AuthCtx);