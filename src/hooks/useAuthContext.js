import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw new Error("AuthContext must be used inside the AuthContext Provider");
        
    }
    return context
}