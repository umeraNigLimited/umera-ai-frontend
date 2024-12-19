import { PromptContext } from "../context/PromptContext";
import { useContext } from "react";


export const usePromptContext = () => {
    const context = useContext(PromptContext)

    if(!context) {
        throw new Error("PromptContext must be used inside the PromptContext Provider");
        
    }
    return context
}